import { IRegion, ICountry } from 'services/api/apiModels/app';
import { IRegionResponse } from 'services/api/apiModels/app';
import { IStoreState } from 'state/ducks';

export const getCountries = ({ app }: IStoreState): ICountry[] =>
	app.Countries?.map(country => ({
		id: country.id,
		language: country.language,
		languageCode: country.languageCode,
		name: country.name
	}));

export const getRegions = ({ app }: IStoreState): IRegion[] =>
	app?.Regions?.map(region => ({
		Id: region.Id,
		Name: region.Name
	}));

export const getAllRegions = ({ app }: IStoreState): IRegionResponse[] => app?.Regions;

export const getMenuStatus = ({ app }: IStoreState): boolean => app?.IsMenuOpen;

export const getModalStatus = ({ app }: IStoreState): boolean => app?.IsModalOpen;

export const isMaskVisible = ({ app }: IStoreState): boolean => app?.IsMenuOpen || app?.IsModalOpen;
