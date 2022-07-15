import { ICompanyService } from '../../interfaces/ICompanyService';
import { Company } from '../../models/Company';
import { ICompanyDataService } from '../../interfaces/ICompanyDataService';
import { COMPANY_NOT_FOUND } from '../../errors/ErrorDefinitions';
import { UpdateCompanyRequest } from '../../models/UpdateCompanyRequest';
import { validateAndConvert } from '../../commons';
import { NewCompanyRequest } from '../../models/NewCompanyRequest';

export class CompanyService implements ICompanyService {
  //eslint-disable-next-line no-useless-constructor
  constructor(private readonly companyDataService: ICompanyDataService) {
  }

  public async createCompany(event: any): Promise<Company> {
    const newCompanyRequest: NewCompanyRequest = await validateAndConvert(NewCompanyRequest, event.body);
    const company: Company = await this.companyDataService.newCompany({ newCompany: newCompanyRequest });
    return company;
  }

  public async getCompany(event: any): Promise<Company> {
    const { companyId } = event.pathParameters;
    const company: Company = await this.companyDataService.getCompany({ id: companyId });
    if (!Object.keys(company).length) {
      throw COMPANY_NOT_FOUND;
    }
    return {
      id: company.id,
      taxId: company.taxId,
      legalName: company.legalName,
      amount: company.amount,
      age: company.age
    };
  }

  public async updateCompany(event: any): Promise<Company> {
    const { companyId } = event.pathParameters;
    const updateCompanyRequest: UpdateCompanyRequest = await validateAndConvert(UpdateCompanyRequest, event.body);
    const company: Company = await this.companyDataService.getCompany({ id: companyId });
    if (!Object.keys(company).length) {
      throw COMPANY_NOT_FOUND;
    }
    await this.companyDataService.updateCompany({
      id: companyId,
      updatedCompany: updateCompanyRequest
    });
    return {
      id: company.id,
      ...updateCompanyRequest
    };
  }
}
