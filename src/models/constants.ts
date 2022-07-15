const LOCAL_STAGE: string = 'local';

export { LOCAL_STAGE };
export const SPECIFIC_COMPANY_USER = (process.env.IS_OFFLINE) ? '/local/company' : '/company';
export const LOOKUP_COMPANY = (process.env.IS_OFFLINE) ? '/local/company/lookup/{companyId}' : '/company/lookup/{companyId}';
export const GET_COMPANY = (process.env.IS_OFFLINE) ? '/local/company/{companyId}' : '/company/{companyId}';
