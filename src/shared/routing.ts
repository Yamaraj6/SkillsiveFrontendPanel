const routing = {
	landingPage: '/',
	dashboard: '/dashboard',
	pricing: '/pricing',
	webinars: '/resources/webinars',
	howToStart: '/resources/howToStart',
	clientHistory: '/resources/clientHistory',
	tutorials: '/resources/tutorials',
	faq: '/resources/faq',
	partnershipProgramme: '/resources/partnershipProgramme',
	apps: {
		apps: '/apps',
		app: '/apps/app'
	},
	authentication: {
		login: '/authentication/login',
		register: '/authentication/register',
		reset_password: '/authentication/reset-password',
		reset_password_token: '/authentication/reset-password/[token]'
	},
	account: {
		profile: '/account/profile',
		profile_edit: '/account/profile/edit',
		client: {
			courses_completions: {
				courses_completions: '/account/client/courses-completions',
				course_completions: '/account/client/courses-completions/course-completions',
				skills: '/account/client/courses-completions/skills'
			},
			my_applications: '/account/client/my-applications',
			users: {
				name: '/account/client/users/',
				users_list: '/account/client/users',
				user: '/account/client/users/user'
			},
			devices: {
				devices: '/account/client/devices',
				device: '/account/client/devices/device'
			},
			leaderboards: '/account/client/leaderboards',
			personalizations: '/account/client/personalizations',
			support: '/account/client/support'
		},
		developer: {
			applications: {
				applications: '/account/developer/applications',
				create_new_applications: '/account/developer/create-new-applications'
			}
		},
		admin: {
			dashboard: '/account/admin/dashboard',
			clients: '/account/admin/clients',
			payments: '/account/admin/payments',
			newsletter: '/account/admin/newsletter',
			all_applications: '/account/admin/all-applications',
			app_shared_resources: '/account/admin/app-shared-resources',
			online_applications: '/account/admin/online-applications',
			all_courses_completions: '/account/admin/all-courses-completions'
		}
	}
};

export default routing;
