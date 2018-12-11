import OpenSSOClientConfigInterface from '../Interfaces/OpenSSOClientConfigInterface';
export default class OpenSSOClientConfig
  implements OpenSSOClientConfigInterface {
  discoveryUrl: string;
  clientId: string;
  clientSecret: string;
  constructor(data: any) {
    this.discoveryUrl = data.discoveryUrl;
    this.clientId = data.clientId;
    this.clientSecret = data.clientSecret;
  }
}
