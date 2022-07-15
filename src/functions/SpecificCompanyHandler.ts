import container from '../awilix.config';
import { ICompanyService } from '../interfaces/ICompanyService';
import { loadEnvVariables } from './helpers/env';
import { Commons } from '../commons';
import { Company } from '../models/Company';

const common = new Commons();

export const WrappedSpecificCompanyHandler = async (event, context, callback) => {
  loadEnvVariables(event);
  const companyService = container.resolve<ICompanyService>('companyService');
  const companyResponse: Company = await companyService.getCompany(event);
  return common.apiSuccess(companyResponse);
};

export const SpecificCompanyHandler = common.errorHandler(WrappedSpecificCompanyHandler);
