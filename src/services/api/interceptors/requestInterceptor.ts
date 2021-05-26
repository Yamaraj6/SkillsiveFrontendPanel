import { clientOperations } from 'state/ducks/client';
import { getRefreshToken, saveTokens, getTokenIfNotExpired } from 'shared/functions/tokenCookiesHelper';
import api from '../api';
import { apiCallOperations } from 'state/ducks/apiCall';
import { userApiRoutes } from 'services/api/apiRoutes';
import types from 'state/ducks/client/types';
import Router from 'next/router';
import routes from 'shared/permissionRoutes';
import { RoleType } from 'shared/enums';
import i18n from 'i18n/i18n';

const successCodes = [200];

const refreshAccessToken = dispatch =>
	new Promise(async resolve => {
		dispatch(apiCallOperations.setApiCallPendingStatus(types.POST_CALLS.LOGIN_WITH_REFRESH_TOKEN.REGULAR, true));

		api.post(userApiRoutes.authorization.refreshToken, getRefreshToken())
			.then(response => {
				if (successCodes.includes(response.status)) {
					saveTokens(response.data.AccessToken, response.data.RefreshToken, response.data.User.Email);

					dispatch(clientOperations.setClientPersonalDataAfterReLogin(response.data));

					dispatch(
						apiCallOperations.setApiCallResponseStatus(types.POST_CALLS.LOGIN_WITH_REFRESH_TOKEN.REGULAR, response.status)
					);

					resolve(response.data.AccessToken);
				} else {
					throw response;
				}
			})
			.catch(error => {
				dispatch(apiCallOperations.setApiCallError(types.POST_CALLS.LOGIN_WITH_REFRESH_TOKEN.REGULAR, error));
			});
	});

const requestInterceptor = dispatch => {
	api.interceptors.request.use(async config => {
		config.headers['softflix-accept-language'] = i18n.language.substring(0, 2);

		if (
			!getTokenIfNotExpired() &&
			config.url !== userApiRoutes.authorization.refreshToken &&
			!routes[RoleType.PUBLIC].includes(Router.pathname)
		) {
			const responseToken = await refreshAccessToken(dispatch);

			config.headers.Authorization = `Bearer ${responseToken}`;

			return config;
		} else {
			return config;
		}
	});
};

export default requestInterceptor;
