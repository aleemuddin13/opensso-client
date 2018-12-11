import axios from 'axios';
import { FlowCIP, OpenIdConfig } from '../Interfaces/index';
class BasicHelper {
  async fetchOpenIdConfig(flowCIP: FlowCIP): Promise<OpenIdConfig> {
    const { discoveryUrl } = flowCIP;
    const response = await axios.get(
      discoveryUrl + '/.well-known/openid-configuration'
    );
    return response.data;
  }
}

const basicHelper = new BasicHelper();

export default basicHelper;
