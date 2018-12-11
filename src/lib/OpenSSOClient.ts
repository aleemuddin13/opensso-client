import axios from 'axios';
import qs from 'qs';
import OpenSSOClientInteface from '../Interfaces/OpenSSOClientInterface';
import OpenSSOClientConfigInterface from '../Interfaces/OpenSSOClientConfigInterface';
import OpenSSOClientConfig from './OpenSSOClientConfig';

axios.interceptors.request.use(request => {
  if (
    request.data &&
    request.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    request.data = qs.stringify(request.data);
  }
  return request;
});

const baseDiscoveryUrl = 'http://localhost:5000/oauth2/v1';

export default class OpenSSOClient implements OpenSSOClientInteface {
  openSSOClientConfig: OpenSSOClientConfigInterface;
  openidConfig: any;
  constructor() {
    const defaultOpenSSOClientConfig = new OpenSSOClientConfig({
      discoveryUrl: baseDiscoveryUrl,
      clientId: 'foo',
      clientSecret: 'bar'
    });
    this.openSSOClientConfig = defaultOpenSSOClientConfig;
    this.openidConfig = {};
  }
  setConfig(openSSOClientConfig: OpenSSOClientConfigInterface): void {
    Object.assign(this.openSSOClientConfig, openSSOClientConfig);
    console.log(this.openSSOClientConfig);
  }
  async initialize() {
    const response = await axios.get(
      this.openSSOClientConfig.discoveryUrl +
        '/.well-known/openid-configuration'
    );
    this.openidConfig = response.data;
  }

  getAuthorizationEndpoint(data: {
    redirect_uri: string;
    scope: string;
    state: string;
  }) {
    return `${this.openidConfig.authorization_endpoint}?client_id=${
      this.openSSOClientConfig.clientId
    }&scope=${data.scope}&response_type=code&redirect_uri=${
      data.redirect_uri
    }&state=${data.state}`;
  }

  async getAccessToken(data: { code: string; redirect_uri: string }) {
    const tokenEndpoint = this.openidConfig.token_endpoint;
    const postData = {
      grant_type: 'authorization_code',
      code: data.code,
      redirect_uri: data.redirect_uri
    };

    const base64String = Buffer.from(
      `${this.openSSOClientConfig.clientId}:${
        this.openSSOClientConfig.clientSecret
      }`
    ).toString('base64');
    const response = await axios.post(tokenEndpoint, postData, {
      headers: {
        Authorization: `Basic ${base64String}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return response.data;
  }

  static createInstance() {
    return new OpenSSOClient();
  }
}
