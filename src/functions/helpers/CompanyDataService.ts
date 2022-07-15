import { ICompanyDataService } from '../../interfaces/ICompanyDataService';
import * as AWS from 'aws-sdk';
import { LOCAL_STAGE } from '../../models/constants';
import { APIError } from '../../errors/Error';

export class CompanyDataService implements ICompanyDataService {
  private readonly options: AWS.Lambda.ClientConfiguration;
  private lambdaVerification: AWS.Lambda;

  constructor() {
    this.options = {
      region: process.env.REGION
    };
    if (process.env.ENVIRONMENT === LOCAL_STAGE) {
      this.options.endpoint = process.env.COMPANY_DATA_ENDPOINT_LOCAL;
    }
    this.lambdaVerification = new AWS.Lambda(this.options);
  }

  public async newCompany(params: any) {
    return await this.companyLambdaClient({
      isOffline: process.env.IS_OFFLINE === 'true',
      function: 'newCompany',
      ...params
    });
  }

  public async getCompany(params: any) {
    return await this.companyLambdaClient({
      isOffline: process.env.IS_OFFLINE === 'true',
      function: 'getCompany',
      ...params
    });
  }

  public async updateCompany(params: any) {
    return await this.companyLambdaClient({
      isOffline: process.env.IS_OFFLINE === 'true',
      function: 'updateCompany',
      ...params
    });
  }

  async companyLambdaClient(payload) {
    const params: AWS.Lambda.InvocationRequest = {
      FunctionName: process.env.COMPANY_DATA_LAMBDA_NAME,
      InvocationType: 'RequestResponse',
      LogType: 'Tail',
      Payload: JSON.stringify({
        ...payload,
        isOffline: process.env.IS_OFFLINE === 'true',
        env: process.env.ENVIRONMENT
      })
    };
    console.debug('Calling LambdaCompanyDaas & Payload', {
      lambdaCompanyDass: process.env.COMPANY_DATA_LAMBDA_NAME,
      Payload: payload
    });
    const lambdaResult = await this.lambdaVerification.invoke(params).promise();
    const parsed = JSON.parse(lambdaResult.Payload.toString());
    if (lambdaResult.StatusCode !== 200) {
      throw new APIError(parsed.statusCode, parsed.body);
    }
    if (parsed.statusCode !== 200) {
      throw new APIError(parsed.statusCode, parsed.body);
    }
    return JSON.parse(parsed.body);
  }
}
