import appReducer, { IAppState } from './app/';
import { AnyAction, combineReducers, Store } from 'redux';
import apiCallReducer from './apiCall';
import clientReducer, { IClientState } from './client';
import types from './app/types';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import coursesReducer, { ICoursesState } from './courses';

export interface IProps {
	store: Store<IStoreState>;
	action: AnyAction;
}

export interface IStoreState {
	apiCall: any;
	client: IClientState;
	app: IAppState;
	courses: ICoursesState;
}

const appPersistConfig = {
	key: 'app',
	storage: storage,
	whitelist: [],
	blackList: []
};

const mainReducer = combineReducers({
	apiCall: apiCallReducer,
	client: clientReducer,
	courses: coursesReducer,
	app: persistReducer(appPersistConfig, appReducer)
});

const rootReducer = (state, action) =>
	mainReducer(
		action.type === types.LOGOUT
			? ({
					app: state.app
			  } as IStoreState)
			: state,
		action
	);

export default rootReducer;
