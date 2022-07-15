import { asClass, createContainer } from 'awilix';
import { CompanyDataService } from './functions/helpers/CompanyDataService';
import { CompanyService } from './functions/helpers/CompanyService';

const container = createContainer({
  injectionMode: 'CLASSIC'
});

container.register({
  companyDataService: asClass(CompanyDataService).scoped(),
  companyService: asClass(CompanyService).scoped()
}
);

export default container;
