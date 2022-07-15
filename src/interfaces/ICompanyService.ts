import { Company } from '../models/Company';

export interface ICompanyService {
  createCompany(event: any): Promise<Company>;

  getCompany(event: any): Promise<Company>;

  updateCompany(event: any): Promise<Company>;
}
