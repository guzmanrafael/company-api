import container from '../awilix.config';
import { Commons } from '../commons';
import { ICompanyService } from '../interfaces/ICompanyService';
import { loadEnvVariables } from './helpers/env';

const common = new Commons();

export const WrappedUpdateCompanyHandler = async (event, context, callback) => {
  loadEnvVariables(event);
  const companyService: ICompanyService = container.resolve<ICompanyService>('companyService');
  const response = await companyService.updateCompany(event);
  return common.apiSuccess(response);
};

export const UpdateCompanyHandler = common.errorHandler(WrappedUpdateCompanyHandler);
