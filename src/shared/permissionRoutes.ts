import { RoleType } from 'shared/enums';
import routing from 'shared/routing';

const publicRoutes = [
	routing.landingPage,
	routing.pricing,
	routing.apps.apps,
	routing.apps.app,
	routing.webinars,
	routing.howToStart,
	routing.clientHistory,
	routing.tutorials,
	routing.faq,
	routing.partnershipProgramme,
	routing.authentication.login,
	routing.authentication.register,
	routing.authentication.reset_password,
	routing.authentication.reset_password_token
];

const clientRoutes = [
	...publicRoutes,
	routing.account.client.courses_completions.courses_completions,
	routing.account.client.courses_completions.course_completions,
	routing.account.client.courses_completions.skills,
	routing.account.client.my_applications,
	routing.account.client.users.users_list,
	routing.account.client.users.user,
	routing.account.client.users.name,
	routing.account.client.devices.devices,
	routing.account.client.devices.device,
	routing.account.client.leaderboards,
	routing.account.client.personalizations,
	routing.account.client.support,
	routing.dashboard,
	routing.account.client,
	routing.account.profile,
	routing.account.profile_edit
];

const developerRoutes = [
	...clientRoutes,
	routing.account.developer.applications.applications,
	routing.account.developer.applications.create_new_applications
];

const distributorRoutes = [...clientRoutes];

const AdminRoutes = [
	...publicRoutes,
	...clientRoutes,
	...developerRoutes,
	...distributorRoutes,
	routing.account.admin.dashboard,
	routing.account.admin.clients,
	routing.account.admin.payments,
	routing.account.admin.newsletter,
	routing.account.admin.all_applications,
	routing.account.admin.app_shared_resources,
	routing.account.admin.online_applications,
	routing.account.admin.all_courses_completions
];

const routes = {
	[RoleType.PUBLIC]: publicRoutes,
	[RoleType.BASIC]: clientRoutes,
	[RoleType.DEVELOPER]: developerRoutes,
	[RoleType.DISTRIBUTOR]: distributorRoutes,
	[RoleType.ADMIN]: AdminRoutes
};

export default routes;
