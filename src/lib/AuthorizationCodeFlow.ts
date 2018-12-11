import OpenSSOFlow from './OpenSSOFlow';
import axios from 'axios';
import { GetAuthorizationEndpointP } from '../Interfaces/index';

export default class AuthorizationCodeFlow extends OpenSSOFlow {
  getAuthorizationEndpoint(
    getAuthorizationEndpointP: GetAuthorizationEndpointP
  ): string {
    return `${this.openIdConfig.authorization_endpoint}?client_id=${
      this.flowCIP.clientId
    }&scope=${
      getAuthorizationEndpointP.scope
    }&response_type=code&redirect_uri=${
      getAuthorizationEndpointP.redirectUri
    }&state=${getAuthorizationEndpointP.state}`;
  }
  async getAccessToken(data: {
    code: string;
    redirectUri: string;
  }): Promise<any> {
    const { code, redirectUri } = data;
    const base64 = Buffer.from(
      `${this.flowCIP.clientId}:${this.flowCIP.clientSecret}`
    ).toString('base64');
    const postData = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri
    };
    const response = await axios.post(
      this.openIdConfig.token_endpoint || '',
      postData,
      {
        headers: {
          Authorization: `Basic ${base64}`
        }
      }
    );
    return response.data;
  }

  async getUserInfo(accessToken: string) {
    const response = await axios.post(
      this.openIdConfig.userinfo_endpoint || '',
      {},
      {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      }
    );
    return response.data;
  }
}
