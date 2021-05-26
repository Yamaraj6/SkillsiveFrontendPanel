import routing from 'shared/routing';

const getMenuIcon = (key: string, selectedKey: string) => {
	const isSelectedKey = selectedKey.includes(key);

	switch (key) {
		case routing.dashboard:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Dashboard.svg')} alt='profile' />
			) : (
				<img src={require('assets/images/icons/menu/Dashboard.svg')} alt='profile' />
			);
		case routing.account.client.courses_completions.courses_completions:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Courses_Completions.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Courses_Completions.svg')} alt='dashboard' />
			);
		case routing.account.client.my_applications:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/My_Applications.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/My_Applications.svg')} alt='dashboard' />
			);
		case routing.account.client.users.name:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Users.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Users.svg')} alt='dashboard' />
			);
		case routing.account.client.users.users_list:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Users.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Users.svg')} alt='dashboard' />
			);
		case routing.account.client.devices.devices:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Devices.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Devices.svg')} alt='dashboard' />
			);
		case routing.account.client.leaderboards:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Leaderboards.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Leaderboards.svg')} alt='dashboard' />
			);
		case routing.account.client.personalizations:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Personalization.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Personalization.svg')} alt='dashboard' />
			);
		case routing.account.client.support:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Support.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Support.svg')} alt='dashboard' />
			);

		case routing.account.developer.applications.applications:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/My_Applications.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/My_Applications.svg')} alt='dashboard' />
			);
		case routing.account.developer.applications.create_new_applications:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Create_New_Applications.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Create_New_Applications.svg')} alt='dashboard' />
			);

		case routing.account.admin.dashboard:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Dashboard.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Dashboard.svg')} alt='dashboard' />
			);
		case routing.account.admin.clients:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Users.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Users.svg')} alt='dashboard' />
			);
		case routing.account.admin.payments:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Payments.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Payments.svg')} alt='dashboard' />
			);
		case routing.account.admin.newsletter:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Newsletter.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Newsletter.svg')} alt='dashboard' />
			);
		case routing.account.admin.all_applications:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/My_Applications.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/My_Applications.svg')} alt='dashboard' />
			);
		case routing.account.admin.app_shared_resources:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/My_Applications.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/My_Applications.svg')} alt='dashboard' />
			);
		case routing.account.admin.online_applications:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/OnlineApplications.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/OnlineApplications.svg')} alt='dashboard' />
			);
		case routing.account.admin.all_courses_completions:
			return isSelectedKey ? (
				<img src={require('assets/images/icons/menu/Courses_Completions.svg')} alt='dashboard' />
			) : (
				<img src={require('assets/images/icons/menu/Courses_Completions.svg')} alt='dashboard' />
			);
		default:
			return;
	}
};

export default getMenuIcon;
