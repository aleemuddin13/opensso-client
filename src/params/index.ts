export class AuthorizationCodeFlowInputParam {
  discoveryUrl: string;
  clientId: string;
  clientSecret: string;
  constructor(data: {
    discoveryUrl: string;
    clientId: string;
    clientSecret: string;
  }) {
    this.discoveryUrl = data.discoveryUrl;
    this.clientId = data.clientId;
    this.clientSecret = data.clientSecret;
  }
}

export interface a {
  t1: string;
  t2: string;
}

const b = (c: a) => {
  return c.t1;
};

b({ t1: 'h', t2: 'c' });
