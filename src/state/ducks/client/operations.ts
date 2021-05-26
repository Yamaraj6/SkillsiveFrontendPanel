import { postApiCallAction, getApiCallAction } from 'state/utilities';
import { userApiRoutes } from 'services/api/apiRoutes';
import { IAuthenticateRequest, IAuthenticateResponse, IClient } from 'services/api/apiModels/client';
import types from './types';
import {
	setNewPassword,
	setClientPersonalDataAfterReLogin,
	setClientPersonalDataAfterLoginWithSocial,
	setClientPersonalData,
	setClientData
} from './actions';
import Router from 'next/router';
import { getTokenIfNotExpired, removeTokens, saveTokens } from 'shared/functions/tokenCookiesHelper';
import routing from 'shared/routing';
import {
	IRequestResetPasswordRequest,
	IRequestResetPasswordResponse,
	IResetPasswordRequest,
	IResetPasswordResponse
} from 'services/api/apiModels/client/resetPassword';
import { ISocialLoginRequest, ISocialLoginResponse } from 'services/api/apiModels/client/socialAuthenticate';
import { IRegisterRequest, IRegisterResponse } from 'services/api/apiModels/client/register';
import { redirect } from '../app/operations';
import { message } from 'antd';
import i18n from 'i18n/i18n';

export const login = (data: IAuthenticateRequest, isOrderPending: boolean) =>
	postApiCallAction<IAuthenticateRequest, IAuthenticateResponse>(
		userApiRoutes.authorization.authenticate,
		types.POST_CALLS.LOGIN,
		data,
		response => {
			saveTokens(response.accessToken, response.refreshToken, response.client.email);

			if (!isOrderPending) {
				Router.push(routing.dashboard);
			}

			return setClientPersonalData(response);
		}
	);

export const requestResetPassword = (data: IRequestResetPasswordRequest) =>
	postApiCallAction<IRequestResetPasswordRequest, IRequestResetPasswordResponse>(
		userApiRoutes.resetPassword.request,
		types.POST_CALLS.REQUEST_RESET_PASSWORD,
		data
	);

export const resetPassword = (data: IResetPasswordRequest) =>
	postApiCallAction<IResetPasswordRequest, IResetPasswordResponse>(
		userApiRoutes.resetPassword.reset,
		types.POST_CALLS.RESET_PASSWORD,
		data,
		response => {
			saveTokens(response.accessToken, response.refreshToken, response.client.email);
			Router.push(routing.dashboard);

			return setNewPassword(response);
		}
	);

export const reLogin = (data: IAuthenticateRequest) => {
	const token = getTokenIfNotExpired();
	if (!token) {
		removeTokens();

		return postApiCallAction<IAuthenticateRequest, IAuthenticateResponse>(
			userApiRoutes.authorization.refreshToken,
			types.POST_CALLS.LOGIN_WITH_REFRESH_TOKEN,
			data,
			response => {
				saveTokens(response.accessToken, response.refreshToken, response.client.email);

				return setClientPersonalDataAfterReLogin(response);
			}
		);
	} else {
		return getApiCallAction<IClient>(userApiRoutes.currentClient, types.GET_CALLS.CURRENT_CLIENT_DATA, response => {
			return dispatch => {
				return dispatch(setClientData({ client: response, accessToken: token, refreshToken: data.refreshToken }));
			};
		});
	}
};

export const loginWithSocial = (data: ISocialLoginRequest) =>
	postApiCallAction<ISocialLoginRequest, ISocialLoginResponse>(
		userApiRoutes.authorization.socialAuthenticate,
		types.POST_CALLS.LOGIN_WITH_SOCIAL,
		data,
		response => {
			saveTokens(response.accessToken, response.refreshToken, response.client.email);

			return setClientPersonalDataAfterLoginWithSocial(response);
		}
	);

export const register = (data: IRegisterRequest) =>
	postApiCallAction<IRegisterRequest, IRegisterResponse>(userApiRoutes.authorization.register, types.POST_CALLS.REGISTER, data, () => {
		message.success({
			content: i18n.t('register:checkMail')
		});

		return redirect(routing.authentication.login);
	});

export { setClientPersonalDataAfterReLogin };
