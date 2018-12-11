export interface FlowCIP {
  discoveryUrl?: string;
  clientId?: string;
  clientSecret?: string;
}

export interface AuthorizationCodeFlowCIP extends FlowCIP {
  clientId?: string;
  clientSecret?: string;
}

export interface Constructor<M> {
  new (...args: any[]): M;
}

export interface FlowP {}

export interface GetAuthorizationEndpointP extends FlowP {
  scope: string;
  redirectUri: string;
  state: string;
}

export interface OpenIdConfig {
  authorization_endpoint?: string;
  claims_parameter_supported?: boolean;
  claims_supported?: string[];
  grant_types_supported?: string[];
  id_token_signing_alg_values_supported?: string[];
  issuer?: string;
  jwks_uri?: string;
  registration_endpoint?: string;
  request_object_signing_alg_values_supported?: string;
  request_parameter_supported?: boolean;
  request_uri_parameter_supported?: boolean;
  require_request_uri_registration?: boolean;
  response_modes_supported?: string[];
  response_types_supported?: string[];
  scopes_supported?: string[];
  subject_types_supported?: string;
  token_endpoint?: string;
  token_endpoint_auth_methods_supported?: string[];
  token_endpoint_auth_signing_alg_values_supported?: string[];
  userinfo_endpoint?: string;
  userinfo_signing_alg_values_supported?: string[];
  code_challenge_methods_supported?: string[];
  introspection_endpoint?: string;
  introspection_endpoint_auth_methods_supported?: string[];
  introspection_endpoint_auth_signing_alg_values_supported?: string[];
  introspection_endpoint_signing_alg_values_supported?: string[];
  revocation_endpoint?: string;
  revocation_endpoint_auth_methods_supported?: string[];
  revocation_endpoint_auth_signing_alg_values_supported?: string[];
  id_token_encryption_alg_values_supported?: string[];
  id_token_encryption_enc_values_supported?: string[];
  userinfo_encryption_alg_values_supported?: string[];
  userinfo_encryption_enc_values_supported?: string[];
  introspection_encryption_alg_values_supported?: string[];
  introspection_encryption_enc_values_supported?: string[];
  request_object_encryption_alg_values_supported?: string[];
  request_object_encryption_enc_values_supported?: string[];
  end_session_endpoint?: string;
  check_session_iframe?: string;
  backchannel_logout_supported?: boolean;
  backchannel_logout_session_supported?: boolean;
  frontchannel_logout_supported?: boolean;
  frontchannel_logout_session_supported?: boolean;
  claim_types_supported?: string[];
  version?: string;
}
