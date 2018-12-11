import axios from 'axios';
import qs from 'qs';
import { FlowCIP } from './Interfaces/index';
import AuthorizationCodeFlow from './lib/AuthorizationCodeFlow';
import FlowInterface from './Interfaces/FlowInterface';

axios.interceptors.request.use(request => {
  request.headers['Content-Type'] === 'application/x-www-form-urlencoded';
  if (request.data) {
    request.data = qs.stringify(request.data);
  }
  return request;
});

class OpenSSOClient {
  async getFlow(flowCIP: FlowCIP): Promise<FlowInterface> {
    return AuthorizationCodeFlow.createInstance(flowCIP);
  }
}

const openSSOClient = new OpenSSOClient();

// const exec = async () => {
//   try {
//     const flow = await openSSOClient.getFlow({
//       discoveryUrl: 'http://localhost:5000/oauth2/v1',
//       clientId: 'foo',
//       clientSecret: 'bar'
//     });
//     console.log(
//       flow.getAuthorizationEndpoint({
//         redirectUri: 'http://localhost:3000',
//         scope: 'openid',
//         state: ''
//       })
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// exec();

module.exports = openSSOClient;
