import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Constants from 'shared/Constants';
import api from 'services/api';
import { AuthenticateRequestType } from 'services/api/apiModels/client';

interface IToken {
	id: string;
	exp: number;
	role: string[];
}

export function getRefreshToken() {
	const refreshToken = Cookies.get(Constants.STORAGE_KEY.REFRESH_TOKEN);
	const email = Cookies.get(Constants.STORAGE_KEY.EMAIL);

	if (!email || !refreshToken) {
		return;
	}

	return { [AuthenticateRequestType.REFRESH_TOKEN]: refreshToken, [AuthenticateRequestType.EMAIL]: email };
}

export function getTokenIfNotExpired() {
	const token = Cookies.get(Constants.STORAGE_KEY.ACCESS_TOKEN);

	if (token) {
		const { exp } = jwtDecode(token) as IToken;

		if (new Date(exp * 1000) > new Date()) {
			api.defaults.headers.Authorization = `Bearer ${token}`;

			return token;
		}
	}

	return;
}

export function saveTokens(token: string, refreshToken: string, email: string) {
	const tokenData = jwtDecode(token) as IToken;

	Cookies.set(Constants.STORAGE_KEY.REFRESH_TOKEN, refreshToken);
	Cookies.set(Constants.STORAGE_KEY.ACCESS_TOKEN, token, { expires: new Date(tokenData.exp * 1000) });
	Cookies.set(Constants.STORAGE_KEY.EMAIL, email);

	api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function removeTokens() {
	Cookies.remove(Constants.STORAGE_KEY.REFRESH_TOKEN);
	Cookies.remove(Constants.STORAGE_KEY.ACCESS_TOKEN);

	delete api.defaults.headers.Authorization;
}
