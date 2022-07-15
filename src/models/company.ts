/**
 * Company
 * Company API provides functionality to create and update a company type resource
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: rafael.guzman1609@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class Company {
    /**
    * Unique company tax id identifier .
    */
    'id'?: string;
    /**
    * Company tax id
    */
    'taxId'?: string;
    /**
    * Company legal name.
    */
    'legalName'?: string;
    /**
    * The numerical amount of money.
    */
    'amount'?: number;
    /**
    * Age of the company, in years.
    */
    'age'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
      {
        name: 'id',
        baseName: 'id',
        type: 'string'
      },
      {
        name: 'taxId',
        baseName: 'taxId',
        type: 'string'
      },
      {
        name: 'legalName',
        baseName: 'legalName',
        type: 'string'
      },
      {
        name: 'amount',
        baseName: 'amount',
        type: 'number'
      },
      {
        name: 'age',
        baseName: 'age',
        type: 'number'
      }];

    static getAttributeTypeMap() {
      return Company.attributeTypeMap;
    }
}
