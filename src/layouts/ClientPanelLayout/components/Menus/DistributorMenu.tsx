import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './Menu.module.scss';
import cx from 'classnames';
import { IMenuProps, getDefaultSelectedKey, getMenuIcon } from '../../utilities';
import Router from 'next/router';
import { useState } from 'react';
import routing from 'shared/routing';
import DropDownIcon from '../DropDownIcon';

function DistributortMenu({ isCollapsed, setIsDrawerOpen }: IMenuProps) {
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
			<Menu.Item key={routing.account.profile} icon={getMenuIcon(routing.account.profile, selectedKey)}>
				{t('profile')}
			</Menu.Item>

			<Menu.Item key={routing.dashboard} icon={getMenuIcon(routing.dashboard, selectedKey)}>
				{t('dashboard')}
			</Menu.Item>

			<div className={cx(styles['menu__section'], { [styles['menu__section--collapsed']]: isCollapsed })}>{t('supportSection')}</div>
		</Menu>
	);
}

export default DistributortMenu;
