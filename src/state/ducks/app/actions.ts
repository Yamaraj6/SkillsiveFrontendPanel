import { ICountry, IRegionResponse } from 'services/api/apiModels/app';
import types from './types';

export const setCountriesData = (data: ICountry) => ({
	type: types.GET_CALLS.COUNTRIES.SUCCESS,
	payload: data
});

export const setRegionsData = (data: IRegionResponse[]) => ({
	type: types.GET_CALLS.REGIONS.SUCCESS,
	payload: data
});

export const logout = () => ({
	type: types.LOGOUT
});

export const setRedirect = () => ({
	type: types.REDIRECT
});

export const setMenuStatus = (status: boolean) => ({
	type: types.SET_MENU_STATUS,
	payload: status
});

export const setModalStatus = (status: boolean) => ({
	type: types.SET_MODAL_STATUS,
	payload: status
});
