import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './Menu.module.scss';
import cx from 'classnames';
import { IMenuProps, getDefaultSelectedKey, getMenuIcon } from '../../utilities';
import Router from 'next/router';
import { useState } from 'react';
import routing from 'shared/routing';
import DropDownIcon from '../DropDownIcon';
import { useWindowWidth } from '@react-hook/window-size';

function ClientMenu({ isCollapsed, setIsDrawerOpen }: IMenuProps) {
	const { t } = useTranslation(['menu', 'headerPanel']);
	const [selectedKey, setSelectedKey] = useState(getDefaultSelectedKey());
	const windowWidth = useWindowWidth();

	return windowWidth > 768 ? (
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
		</Menu>
	) : (
		<Menu
			className={styles.menu}
			theme='dark'
			mode='inline'
			onClick={path => {
				Router.push(path.key.toString());
				setIsDrawerOpen(false);
			}}
			defaultSelectedKeys={[getDefaultSelectedKey()]}
			defaultOpenKeys={['Portal']}
			// defaultOpenKeys={[Router.pathname]}
			onSelect={data => setSelectedKey(data.key.toString())}
			expandIcon={<DropDownIcon />}
		>
			<Menu.Item className={styles['menu__sub-menu']} key={routing.apps.apps}>
				{t('headerPanel:apps')}
			</Menu.Item>

			<Menu.SubMenu className={styles['menu__sub-menu-drop']} key={routing.webinars} title={t('headerPanel:resources')}>
				<Menu.Item key={routing.webinars}>{t('webinars')}</Menu.Item>

				<Menu.Item key={routing.howToStart}>{t('howToStart')}</Menu.Item>

				<Menu.Item key={routing.clientHistory}>{t('clientHistory')}</Menu.Item>

				<Menu.Item key={routing.tutorials}>{t('tutorials')}</Menu.Item>

				<Menu.Item key={routing.faq}>{t('faq')}</Menu.Item>

				<Menu.Item key={routing.partnershipProgramme}>{t('partnershipProgramme')}</Menu.Item>
			</Menu.SubMenu>

			<Menu.Item className={styles['menu__sub-menu']} key={routing.pricing}>
				{t('headerPanel:pricing')}
			</Menu.Item>

			<Menu.SubMenu className={styles['menu__sub-menu-drop']} key={'Portal'} title={t('headerPanel:portal')}>
				<Menu.Item key={routing.dashboard} icon={getMenuIcon(routing.dashboard, selectedKey)}>
					{t('dashboard')}
				</Menu.Item>

				<Menu.Item key={routing.account.profile} icon={getMenuIcon(routing.account.profile, selectedKey)}>
					{t('profile')}
				</Menu.Item>

				<div className={cx(styles['menu__section'], { [styles['menu__section--collapsed']]: isCollapsed })}>
					{t('clientSection')}
				</div>

				<Menu.Item
					key={routing.account.client.courses_completions.courses_completions}
					icon={getMenuIcon(routing.account.client.courses_completions.courses_completions, selectedKey)}
				>
					{t('coursesCompletions')}
				</Menu.Item>

				<Menu.Item
					key={routing.account.client.my_applications}
					icon={getMenuIcon(routing.account.client.my_applications, selectedKey)}
				>
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

				<Menu.Item
					key={routing.account.client.devices.devices}
					icon={getMenuIcon(routing.account.client.devices.devices, selectedKey)}
				>
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
			</Menu.SubMenu>
		</Menu>
		// <> </>
	);
}

export default ClientMenu;
