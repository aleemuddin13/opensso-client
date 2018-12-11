import { OpenIdConfig, FlowCIP, FlowP } from './index';
export default interface FlowInterface {
  openIdConfig: OpenIdConfig;
  flowCIP: FlowCIP;
  getAuthorizationEndpoint(getAuthorizationEndpointP: FlowP): string;
}
