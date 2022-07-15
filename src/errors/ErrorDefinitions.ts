import { APIError } from './Error';

export const MISSING_PARAMS_ERROR = (missingParamErrorString: string) => {
  return new APIError(400, `Dynamic_Error ${missingParamErrorString}`);
};

export const MISSING_BODY_ERROR = new APIError(400, 'Missing_Body');
export const COMPANY_ALREADY_EXISTS = new APIError(409, 'company_already_exists');
export const COMPANY_NOT_FOUND = new APIError(404, 'company_not_exists');
export const COMPANY_ALREADY_VERIFIED = new APIError(409, 'company_already_verified');
export const TAX_ID_NOT_PRESENT = new APIError(409, 'tax_id_not_present_in_request');
