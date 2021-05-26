import types from './types';
import { IAction } from 'shared/interfaces';
import { IClient } from 'services/api/apiModels/client';

export interface IClientState {
	client?: IClient;
	accessToken?: string;
	refreshToken?: string;
}

const initialState: IClientState = {};

function clientReducer(state: IClientState = initialState, action: IAction) {
	switch (action.type) {
		case types.POST_CALLS.LOGIN.SUCCESS:
		case types.POST_CALLS.LOGIN_WITH_REFRESH_TOKEN.SUCCESS:
		case types.POST_CALLS.LOGIN_WITH_SOCIAL.SUCCESS:
		case types.POST_CALLS.RESET_PASSWORD.SUCCESS:
		case types.GET_CALLS.CURRENT_CLIENT_DATA.SUCCESS:
		case types.SET_TOKENS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
}

export default clientReducer;
