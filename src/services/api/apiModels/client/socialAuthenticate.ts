import { SocialLoginType } from 'shared/enums';
import { IClient } from './authenticate';

export interface ISocialLoginRequest {
	clientIdentification?: string | undefined;
	clientSocialEmail?: string | undefined;
	type: SocialLoginType;
	name?: string;
}

export interface ISocialLoginResponse {
	client?: IClient | undefined;
	accessToken?: string | undefined;
	refreshToken?: string | undefined;
}
