export const userApiRoutes = {
	authorization: {
		authenticate: '/api/core/login',
		socialAuthenticate: '/usersApi/api/authorization/socialAuthenticate',
		refreshToken: '/api/refresh-token',
		register: '/api/core/register'
	},
	resetPassword: {
		request: '/api/forgot-password',
		reset: '/api​/reset-password'
	},

	currentClient: '/api/client/currentClient',
	teams: '/usersApi/api/teams'
};

export const coursesApiRoutes = {
	courses: {
		filteredCourses: '/api/core/course/get-all',
		categories: '/api/course/categories',
		allCourses: '/api/core/course'
	}
};

export const appApiRoutes = {
	countries: '/api/core/country',
	regions: '/productsApi/api/regions'
};
