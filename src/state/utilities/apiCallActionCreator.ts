import api from 'services/api/api';
import { apiCallOperations } from 'state/ducks/apiCall';
import { IApiCallType } from 'shared/interfaces';
import { AxiosError, AxiosResponse } from 'axios';

const successCodes = [200, 201, 204];

export function getApiCallAction<TResponse>(
	url: string,
	type: IApiCallType,
	actionOnSuccess: (arg0: TResponse) => any,
	headers?: Record<string, string>,
	responseType?: string
) {
	return dispatch => {
		dispatch(apiCallOperations.setApiCallPendingStatus(type.REGULAR, true));

		api.get(url, {
			headers: headers,
			responseType: responseType as 'text'
		})
			.then((response: AxiosResponse) => {
				if (successCodes.includes(response.status)) {
					dispatch(actionOnSuccess(response.data));
					dispatch(apiCallOperations.setApiCallResponseStatus(type.REGULAR, response.status));
				} else {
					throw response;
				}
			})
			.catch((error: AxiosError) => {
				dispatch(apiCallOperations.setApiCallError(type.REGULAR, error));
			});
	};
}

export function postApiCallAction<TRequest, TResponse = undefined>(
	url: string,
	type: IApiCallType,
	data: TRequest,
	actionOnSuccess?: (arg0: TResponse) => any
) {
	return dispatch => {
		dispatch(apiCallOperations.setApiCallPendingStatus(type.REGULAR, true));

		api.post(url, data)
			.then((response: AxiosResponse) => {
				if (successCodes.includes(response.status)) {
					if (!!actionOnSuccess) {
						dispatch(actionOnSuccess(response.data));
					}

					dispatch(apiCallOperations.setApiCallResponseStatus(type.REGULAR, response.status));
				} else {
					throw response;
				}
			})
			.catch((error: AxiosError) => {
				dispatch(apiCallOperations.setApiCallError(type.REGULAR, error));
			});
	};
}

export function putApiCallAction<TResponse, TRequest>(
	url: string,
	type: IApiCallType,
	data: TRequest,
	actionOnSuccess?: (arg0: TResponse) => any
) {
	return dispatch => {
		dispatch(apiCallOperations.setApiCallPendingStatus(type.REGULAR, true));

		api.put(url, data)
			.then((response: AxiosResponse) => {
				if (successCodes.includes(response.status) && response.data) {
					if (!!actionOnSuccess) {
						dispatch(actionOnSuccess(response.data));
					}

					dispatch(apiCallOperations.setApiCallPendingStatus(type.REGULAR, false));
				} else {
					throw response;
				}
			})
			.catch((error: AxiosError) => {
				dispatch(apiCallOperations.setApiCallError(type.REGULAR, error));
			});
	};
}

export function deleteApiCallAction<T, T1>(url: string, type: IApiCallType, data: T1, actionOnSuccess?: (arg0: T) => any) {
	return dispatch => {
		dispatch(apiCallOperations.setApiCallPendingStatus(type.REGULAR, true));

		api.delete(url, { data })
			.then((response: AxiosResponse) => {
				if (successCodes.includes(response.status)) {
					if (!!actionOnSuccess) {
						dispatch(actionOnSuccess(response.data));
					}

					dispatch(apiCallOperations.setApiCallPendingStatus(type.REGULAR, false));
				} else {
					throw response;
				}
			})
			.catch((error: AxiosError) => {
				dispatch(apiCallOperations.setApiCallError(type.REGULAR, error));
			});
	};
}
