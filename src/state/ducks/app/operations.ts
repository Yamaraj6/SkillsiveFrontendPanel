import Router from 'next/router';
import types from './types';
import { setCountriesData, setRedirect, setMenuStatus, setModalStatus, logout, setRegionsData } from './actions';
import { ICountry, IRegionResponse } from 'services/api/apiModels/app';
import { getApiCallAction } from 'state/utilities';
import { appApiRoutes } from 'services/api/apiRoutes';
import { removeTokens } from 'shared/functions/tokenCookiesHelper';
import { ParsedUrlQueryInput } from 'querystring';

export const getCountries = () =>
	getApiCallAction<ICountry>(appApiRoutes.countries, types.GET_CALLS.COUNTRIES, response => setCountriesData(response));

export const getRegions = () =>
	getApiCallAction<IRegionResponse[]>(appApiRoutes.regions, types.GET_CALLS.REGIONS, response => setRegionsData(response));

export const redirect = (newRoute: string, query?: string | ParsedUrlQueryInput) => {
	Router.push(newRoute, query);

	return setRedirect();
};

export const logoutUser = () => {
	removeTokens();

	return logout();
};

export { setMenuStatus, setModalStatus };
