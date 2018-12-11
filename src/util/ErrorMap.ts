import CustomError from '../lib/CustomError';
export default {
  INVALID_DISCOVERY_URL: new CustomError(
    'INVALID_DISCOVERY_URL',
    'discovery url is invalid'
  ),
  INVALID_FUNCTION_CALL: new CustomError(
    'INVALID_FUNCTION_CALL',
    'invalid fuction call'
  )
};
