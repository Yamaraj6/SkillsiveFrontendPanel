import { getApiCallAction } from 'state/utilities';
import { coursesApiRoutes, userApiRoutes } from 'services/api/apiRoutes';
import types from './types';
import { setCategories, setCourses } from './actions';
import { ICourse, ICourseCategory } from 'services/api/apiModels/courses';

export const getCourses = () =>
	getApiCallAction<ICourse[]>(coursesApiRoutes.courses.allCourses, types.GET_CALLS.ALL_COURSES, response => setCourses(response));

export const getCategories = () =>
	getApiCallAction<ICourseCategory[]>(coursesApiRoutes.courses.categories, types.GET_CALLS.ALL_COURSES, response =>
		setCategories(response)
	);

// export const getFilteredCourses = (data: IAuthenticateRequest, isOrderPending: boolean) =>
// getApiCallAction<IAuthenticateRequest, IAuthenticateResponse>(
// 	userApiRoutes.authorization.authenticate,
// 	types.POST_CALLS.LOGIN,
// 	data,
// 	response => setFilteredCourses(response);
// );

// export const getDiscountedSoftware = () =>
// getApiCallAction<ILandingPageOffers[]>(`${offersApiRoutes.offers.discountedSoftware}`, types.GET_CALLS.DISCOUNTED_SOFTWARE, response =>
// 	setDiscountedSoftware(response)
// );
