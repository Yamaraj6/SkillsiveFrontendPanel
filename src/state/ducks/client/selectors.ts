import { apiCallSelectors } from '../apiCall';
import types from './types';
import { IStoreState } from '../index';

export const getLoginApiCall = () => apiCallSelectors.getApiCall(types.POST_CALLS.LOGIN);

export const getLoginWithSocialApiCall = () => apiCallSelectors.getApiCall(types.POST_CALLS.LOGIN_WITH_SOCIAL);

export const getRequestResetPasswordApiCall = () => apiCallSelectors.getApiCall(types.POST_CALLS.REQUEST_RESET_PASSWORD);

export const getResetPasswordApiCall = () => apiCallSelectors.getApiCall(types.POST_CALLS.RESET_PASSWORD);

export const getReLoginApiCall = () => apiCallSelectors.getApiCall(types.POST_CALLS.LOGIN_WITH_REFRESH_TOKEN);

export const getRegisterApiCall = () => apiCallSelectors.getApiCall(types.POST_CALLS.REGISTER);

export const getClientRole = ({ client }: IStoreState) => client?.client?.role?.roleType;

export const getClientData = ({ client }: IStoreState) => client?.client;

export const getToken = ({ client }: IStoreState) => client?.accessToken;

export const getUserEmail = ({ client }: IStoreState) => client?.client?.email;

export const isClientAuthenticated = ({ client }: IStoreState) => !!client?.refreshToken && !!client?.accessToken;
