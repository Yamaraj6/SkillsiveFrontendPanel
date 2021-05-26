import { apiCallTypeCreator, BaseActionTypes } from 'state/utilities';

export default class types extends BaseActionTypes {
	static COURSES = 'COURSES';

	static ALL_COURSES = 'ALL_COURSES';

	static FILTERED_COURSES = 'FILTERED_COURSES';

	static CATEGORIES = 'CATEGORIES';

	static POST_CALLS = {
		FILTERED_COURSES: apiCallTypeCreator(`${types.COURSES}/${types.FILTERED_COURSES}/${types.POST_CALL}`)
	};

	static GET_CALLS = {
		ALL_COURSES: apiCallTypeCreator(`${types.COURSES}/${types.ALL_COURSES}/${types.GET_CALL}`),
		CATEGORIES: apiCallTypeCreator(`${types.COURSES}/${types.CATEGORIES}/${types.GET_CALL}`)
	};
}
