import { IClient } from './authenticate';

export enum ResetPasswordRequestType {
	EMAIL = 'Email',
	NEW_PASSWORD = 'NewPassword',
	CONFIRM_PASSWORD = 'ConfirmPassword'
}

export interface IEmailFormModel {
	Email: string;
}

export interface IPasswordFormModel {
	NewPassword: string;
	ConfirmPassword: string;
}

export interface IRequestResetPasswordRequest {
	email?: string;
}
export interface IRequestResetPasswordResponse {
	data: Blob;
	status: number;
	fileName?: string;
	headers?: { [name: string]: any };
}

export interface IResetPasswordRequest {
	newPassword: string;
	resetToken: string;
}

export interface IResetPasswordResponse {
	client?: IClient;
	accessToken?: string;
	refreshToken?: string;
}
