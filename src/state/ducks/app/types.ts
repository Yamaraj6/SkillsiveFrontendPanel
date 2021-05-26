import { apiCallTypeCreator, BaseActionTypes } from 'state/utilities';

export default class types extends BaseActionTypes {
	static APP = 'APP';

	static REDIRECT = 'REDIRECT';

	static COUNTRIES = 'COUNTRIES';

	static REGIONS = 'REGIONS';

	static ALL_REGIONS = 'ALL_REGIONS';

	static SET_MENU_STATUS = 'SET_MENU_STATUS';

	static SET_MODAL_STATUS = 'SET_MODAL_STATUS';

	static LOGOUT = 'LOGOUT';

	static GET_CALLS = {
		COUNTRIES: apiCallTypeCreator(`${types.APP}/${types.COUNTRIES}/${types.GET_CALL}`),
		REGIONS: apiCallTypeCreator(`${types.APP}/${types.REGIONS}/${types.GET_CALL}`)
	};
}
