import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './Menu.module.scss';
import cx from 'classnames';
import { IMenuProps, getDefaultSelectedKey, getMenuIcon } from '../../utilities';
import Router from 'next/router';
import { useState } from 'react';
import routing from 'shared/routing';
import DropDownIcon from '../DropDownIcon';

function DeveloperMenu({ isCollapsed, setIsDrawerOpen }: IMenuProps) {
	const { t } = useTranslation(['menu']);
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
		</Menu>
	);
}

export default DeveloperMenu;
