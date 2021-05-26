import types from './types';
import { IAction } from 'shared/interfaces';
import { ICountry, IRegionResponse } from 'services/api/apiModels/app';

export interface IAppState {
	Countries?: ICountry[];
	Regions?: IRegionResponse[];
	IsMenuOpen: boolean;
	IsModalOpen: boolean;
}

const initialState: IAppState = {
	IsMenuOpen: false,
	IsModalOpen: false
};

function appReducer(state: IAppState = initialState, action: IAction) {
	switch (action.type) {
		case types.GET_CALLS.COUNTRIES.SUCCESS:
			return {
				...state,
				Countries: action.payload
			};
		case types.GET_CALLS.REGIONS.SUCCESS:
			return {
				...state,
				Regions: action.payload
			};
		case types.SET_MENU_STATUS:
			return { ...state, IsMenuOpen: action.payload, IsModalOpen: false };
		case types.SET_MODAL_STATUS:
			return { ...state, IsModalOpen: action.payload, IsMenuOpen: false };
		default:
			return state;
	}
}

export default appReducer;
