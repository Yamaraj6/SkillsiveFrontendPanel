import { FileType, RoleType, SubscriptionType } from 'shared/enums';

export enum AuthenticateRequestType {
	EMAIL = 'email',
	PASSWORD = 'password',
	REFRESH_TOKEN = 'refreshToken'
}

export interface IAuthenticateRequest {
	email?: string;
	password?: string;
	refreshToken?: string;
}

export class ILoginRequest {
	email: string;
	password: string;
	authenticationType: IAuthenticationType;
	facebookId: string;
}

export enum IAuthenticationType {
	OCULUS = 1,
	EMAIL_PASSWORD = 2,
	FACEBOOK = 3
}

export interface IAuthenticateResponse {
	client: IClient;
	accessToken: string;
	refreshToken: string;
}

export interface IClient {
	id: string;
	companyName: string;
	createDate: string;
	role: IRole;
	country: ICountry;
	email: string;
	disabled: boolean;
	points: number;
	accountStatus: AccountStatus;
	pin: string;
	resourceFiles: ResourceFileDto[];
	isSubscriptionEnabled: boolean;
	subscriptionCompletionsLeft: number;
	subscriptionDevices: number;
	subscriptionType: SubscriptionType;
}

export class ResourceFileDto {
	id: string;
	downloadUrl: string;
	name: string;
	version: number;
	lastUpdatedDate: Date;
	size: number;
	extension: string;
	type: FileType;
	languageType: Language;
	languageId: string;
	languageDto: LanguageDto;
	language: string;
	courseId: string;
	clientId: string;
}

export enum Language {
	ALL = 0,
	POLISH = 1,
	ENGLISH_USA = 2,
	GERMAN = 3,
	UKRAINIAN = 4,
	ENGLISH_BRITISH = 5,
	SPANISH = 6,
	DANISH = 7,
	KOREAN = 8,
	FRENCH = 9,
	SWEDISH = 10,
	NORWEGIAN = 11,
	ITALIAN = 12,
	PORTUGUESE = 13,
	RUSSIAN = 14,
	JAPANESE = 15,
	ARABIC = 16,
	TURKISH = 17,
	CHINESE = 18
}

export class LanguageDto {
	id: string;
	languageType: Language;
	isoCode: string;
	displayName: string;
}

export interface IRole {
	id: string;
	roleName: string;
	roleType: RoleType;
}

export interface ICountry {
	id: string;
	name: string;
}

export enum AccountStatus {
	NOT_ACTIVATED = 1,
	DISABLED = 2,
	ACTIVATED = 3
}
