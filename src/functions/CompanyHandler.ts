import { loadEnvVariables } from './helpers/env';
import container from '../awilix.config';
import { Company } from '../models/Company';
import { Commons } from '../commons';
import { ICompanyService } from '../interfaces/ICompanyService';

const common = new Commons();

export const WrappedCompanyHandler = async (event, context, callback) => {
  loadEnvVariables(event);
  const companyService = container.resolve<ICompanyService>('companyService');

  const newCompanyResponse: Company = await companyService.createCompany(event);
  return common.apiSuccess(newCompanyResponse);
};

export const CompanyHandler = common.errorHandler(WrappedCompanyHandler);
