import { ICountry } from './countries';

export interface IRegionResponse {
	Id: number;
	Name: string;
	ImageUrl: string;
	Countries: ICountry;
}

export interface IRegion {
	Id: number;
	Name: string;
}
