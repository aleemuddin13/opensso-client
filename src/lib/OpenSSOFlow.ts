import FlowInterface from '../Interfaces/FlowInterface';
import { FlowCIP, OpenIdConfig, Constructor, FlowP } from '../Interfaces/index';
import basicHelper from '../util/basicHelper';

export default abstract class OpenSSOFlow implements FlowInterface {
  openIdConfig: OpenIdConfig;
  flowCIP: FlowCIP;
  constructor(openIdConfig: OpenIdConfig, flowCIP: FlowCIP) {
    this.openIdConfig = openIdConfig;
    this.flowCIP = flowCIP;
  }
  abstract getAuthorizationEndpoint(a: FlowP): string;
  static async createInstance<T extends FlowInterface>(
    this: Constructor<T>,
    flowCIP: FlowCIP
  ): Promise<T> {
    const openIdConfig = await basicHelper.fetchOpenIdConfig(flowCIP);
    return new this(openIdConfig, flowCIP);
  }
}
