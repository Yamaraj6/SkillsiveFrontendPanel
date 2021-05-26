export enum RegisterRequestType {
	EMAIL = 'email',
	PASSWORD = 'password',
	CONFIRM = 'confirm',
	COUNTRY_ID = 'countryId',
	NAME = 'Name',
	FIRST_NAME = 'FirstName',
	LAST_NAME = 'LastName',
	VAT_NUMBER = 'VatNumber',
	PHONE_NUMBER = 'PhoneNumber',
	ADDRESS = 'Address',
	CITY = 'City',
	CNAME = 'companyName',
	AGREEMENT = 'Agreement'
}

export interface IRegisterResponse {
	accessToken: string;
	refreshToken: string;
}

export class IRegisterRequest {
	email: string;
	companyName: string;
	password: string;
	countryId: string;
	roleId: string;
	facebookId: string;
}
