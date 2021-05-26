import { apiCallTypeCreator, BaseActionTypes } from 'state/utilities';

export default class types extends BaseActionTypes {
	static CLIENT = 'USER';

	static LOGIN = 'LOGIN';

	static LOGIN_WITH_SOCIAL = 'LOGIN_WITH_SOCIAL';

	static REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD';

	static RESET_PASSWORD = 'RESET_PASSWORD';

	static LOGIN_WITH_REFRESH_TOKEN = 'LOGIN_WITH_REFRESH_TOKEN';

	static CURRENT_CLIENT_DATA = 'CURRENT_CLIENT_DATA';

	static SET_TOKENS = `${types.CLIENT}/SET_TOKENS`;

	static REGISTER = 'REGISTER';

	static SET_USER_CURRENCY = 'SET_USER_CURRENCY';

	static POST_CALLS = {
		LOGIN: apiCallTypeCreator(`${types.CLIENT}/${types.LOGIN}/${types.POST_CALL}`),
		LOGIN_WITH_SOCIAL: apiCallTypeCreator(`${types.CLIENT}/${types.LOGIN_WITH_SOCIAL}/${types.POST_CALL}`),
		LOGIN_WITH_REFRESH_TOKEN: apiCallTypeCreator(`${types.CLIENT}/${types.LOGIN_WITH_REFRESH_TOKEN}/${types.POST_CALL}`),
		REGISTER: apiCallTypeCreator(`/${types.REGISTER}/${types.POST_CALL}`),
		REQUEST_RESET_PASSWORD: apiCallTypeCreator(`${types.CLIENT}/${types.REQUEST_RESET_PASSWORD}/${types.POST_CALL}`),
		RESET_PASSWORD: apiCallTypeCreator(`${types.CLIENT}/${types.RESET_PASSWORD}/${types.POST_CALL}`)
	};

	static GET_CALLS = {
		CURRENT_CLIENT_DATA: apiCallTypeCreator(`${types.CLIENT}/${types.CURRENT_CLIENT_DATA}/${types.GET_CALL}`)
	};

	static PUT_CALLS = {};
}
