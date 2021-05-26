import types from './types';
import { IAuthenticateResponse } from 'services/api/apiModels/client';
import { IResetPasswordResponse } from 'services/api/apiModels/client/resetPassword';
import { ISocialLoginResponse } from 'services/api/apiModels/client/socialAuthenticate';

export const setClientPersonalData = (data: IAuthenticateResponse) => ({
	type: types.POST_CALLS.LOGIN.SUCCESS,
	payload: data
});

export const setNewPassword = (data: IResetPasswordResponse) => ({
	type: types.POST_CALLS.RESET_PASSWORD.SUCCESS,
	payload: data
});

export const setClientPersonalDataAfterReLogin = (data: IAuthenticateResponse) => ({
	type: types.POST_CALLS.LOGIN_WITH_REFRESH_TOKEN.SUCCESS,
	payload: data
});

export const setClientData = (data: IAuthenticateResponse) => ({
	type: types.GET_CALLS.CURRENT_CLIENT_DATA.SUCCESS,
	payload: data
});

export const setClientPersonalDataAfterLoginWithSocial = (data: ISocialLoginResponse) => ({
	type: types.POST_CALLS.LOGIN_WITH_SOCIAL.SUCCESS,
	payload: data
});

export const setTokens = (data: { accessToken?: string; refreshToken?: string }) => ({
	type: types.SET_TOKENS,
	payload: data
});
