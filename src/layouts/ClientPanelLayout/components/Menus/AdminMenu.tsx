import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './Menu.module.scss';
import cx from 'classnames';
import { IMenuProps, getDefaultSelectedKey, getMenuIcon } from '../../utilities';
import Router from 'next/router';
import { useState } from 'react';
import routing from 'shared/routing';
import DropDownIcon from '../DropDownIcon';

function AdminMenu({ isCollapsed, setIsDrawerOpen }: IMenuProps) {
	const { t } = useTranslation(['menu', 'platform']);
	const [selectedKey, setSelectedKey] = useState(getDefaultSelectedKey());

	return (
		<Menu
			className={styles.menu}
			theme='dark'
			mode='inline'
			onClick={path => {
				Router.push(path.key.toString());
				setIsDrawerOpen(false);
			}}
			defaultSelectedKeys={[getDefaultSelectedKey()]}
			defaultOpenKeys={[Router.pathname]}
			onSelect={data => setSelectedKey(data.key.toString())}
			expandIcon={<DropDownIcon />}
		>
			<Menu.Item key={routing.dashboard} icon={getMenuIcon(routing.dashboard, selectedKey)}>
				{t('dashboard')}
			</Menu.Item>

			<Menu.Item key={routing.account.profile} icon={getMenuIcon(routing.account.profile, selectedKey)}>
				{t('profile')}
			</Menu.Item>

			<div className={cx(styles['menu__section'], { [styles['menu__section--collapsed']]: isCollapsed })}>{t('clientSection')}</div>

			<Menu.Item
				key={routing.account.client.courses_completions.courses_completions}
				icon={getMenuIcon(routing.account.client.courses_completions.courses_completions, selectedKey)}
			>
				{t('coursesCompletions')}
			</Menu.Item>

			<Menu.Item key={routing.account.client.my_applications} icon={getMenuIcon(routing.account.client.my_applications, selectedKey)}>
				{t('myApplications')}
			</Menu.Item>

			<Menu.SubMenu
				key={routing.account.client.users.name}
				icon={getMenuIcon(routing.account.client.users.name, selectedKey)}
				title={t('users')}
				popupClassName={styles['menu__sub-menu']}
			>
				<Menu.Item key={routing.account.client.users.users_list}>{t('Users List')}</Menu.Item>
			</Menu.SubMenu>

			<Menu.Item key={routing.account.client.devices.devices} icon={getMenuIcon(routing.account.client.devices.devices, selectedKey)}>
				{t('devices')}
			</Menu.Item>

			<Menu.Item key={routing.account.client.leaderboards} icon={getMenuIcon(routing.account.client.leaderboards, selectedKey)}>
				{t('leaderboards')}
			</Menu.Item>

			<Menu.Item
				key={routing.account.client.personalizations}
				icon={getMenuIcon(routing.account.client.personalizations, selectedKey)}
			>
				{t('personalizations')}
			</Menu.Item>

			<Menu.Item key={routing.account.client.support} icon={getMenuIcon(routing.account.client.support, selectedKey)}>
				{t('support')}
			</Menu.Item>

			<div className={cx(styles['menu__section'], { [styles['menu__section--collapsed']]: isCollapsed })}>
				{t('developerSection')}
			</div>

			<Menu.SubMenu
				key={routing.account.developer.applications.applications}
				icon={getMenuIcon(routing.account.developer.applications.applications, selectedKey)}
				title={t('applications')}
				popupClassName={styles['menu__sub-menu']}
			>
				<Menu.Item key={routing.account.developer.applications.applications}>{t('applications')}</Menu.Item>
			</Menu.SubMenu>

			<Menu.Item
				key={routing.account.developer.applications.create_new_applications}
				icon={getMenuIcon(routing.account.developer.applications.create_new_applications, selectedKey)}
			>
				{t('createNewApplications')}
			</Menu.Item>

			<div className={cx(styles['menu__section'], { [styles['menu__section--collapsed']]: isCollapsed })}>{t('adminSection')}</div>

			<Menu.Item key={routing.account.admin.dashboard} icon={getMenuIcon(routing.account.admin.dashboard, selectedKey)}>
				{t('dashboard')}
			</Menu.Item>

			<Menu.Item key={routing.account.admin.clients} icon={getMenuIcon(routing.account.admin.clients, selectedKey)}>
				{t('clients')}
			</Menu.Item>

			<Menu.Item key={routing.account.admin.payments} icon={getMenuIcon(routing.account.admin.payments, selectedKey)}>
				{t('payments')}
			</Menu.Item>

			<Menu.Item key={routing.account.admin.newsletter} icon={getMenuIcon(routing.account.admin.newsletter, selectedKey)}>
				{t('newsletter')}
			</Menu.Item>

			<Menu.Item key={routing.account.admin.all_applications} icon={getMenuIcon(routing.account.admin.all_applications, selectedKey)}>
				{t('allApplications')}
			</Menu.Item>

			<Menu.Item
				key={routing.account.admin.app_shared_resources}
				icon={getMenuIcon(routing.account.admin.app_shared_resources, selectedKey)}
			>
				{t('appSharedResources')}
			</Menu.Item>

			<Menu.Item
				key={routing.account.admin.online_applications}
				icon={getMenuIcon(routing.account.admin.online_applications, selectedKey)}
			>
				{t('onlineApplications')}
			</Menu.Item>

			<Menu.Item
				key={routing.account.admin.all_courses_completions}
				icon={getMenuIcon(routing.account.admin.all_courses_completions, selectedKey)}
			>
				{t('allCoursesCompletions')}
			</Menu.Item>
		</Menu>
	);
}

export default AdminMenu;
