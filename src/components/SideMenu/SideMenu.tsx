import styles from './SideMenu.module.scss';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Layout, Drawer } from 'antd';

export interface ISideMenuProps {
	children: ReactNode;
	isSiderCollapsed: boolean;
	setIsSiderCollapsed: Dispatch<SetStateAction<boolean>>;
	isDrawerOpen: boolean;
	setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

function SideMenu({ children, isSiderCollapsed, setIsSiderCollapsed, isDrawerOpen, setIsDrawerOpen }: ISideMenuProps): React.ReactElement {
	const windowWidth = useWindowWidth();

	return windowWidth < 769 ? (
		<>
			<Drawer className={'mobile-drawer'} placement='left' onClose={() => setIsDrawerOpen(false)} visible={isDrawerOpen}>
				<div className={styles.drawer}>{children}</div>
			</Drawer>

			<div className={styles['drawer__open-btn']} onClick={() => setIsDrawerOpen(true)}>
				<img src={require('assets/images/icons/menu/Menu.svg')} alt='open' />
			</div>
		</>
	) : (
		<Layout.Sider
			className={styles.sider}
			collapsible
			collapsed={isSiderCollapsed}
			breakpoint='lg'
			collapsedWidth='60'
			width='270'
			onCollapse={setIsSiderCollapsed}
			trigger={null}
		>
			{children}

			{isSiderCollapsed ? (
				<div className={styles['sider__collapse-btn']} onClick={() => setIsSiderCollapsed(false)}>
					<img src={require('assets/images/icons/back-button.svg')} alt='collapse' />
				</div>
			) : (
				<div className={styles['sider__open-btn']} onClick={() => setIsSiderCollapsed(true)}>
					<img src={require('assets/images/icons/back-button.svg')} alt='open' />
				</div>
			)}
		</Layout.Sider>
	);
}

export default SideMenu;
