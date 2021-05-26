import React, { ReactNode, useState } from 'react';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './ClientPanelLayout.module.scss';
import SideMenu from 'components/SideMenu';
import { clientSelectors } from 'state/ducks/client';
import { getMenuBasedOnClientRole } from './utilities';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowWidth } from '@react-hook/window-size';
import Router from 'next/router';
import Breadcrumb from './components/Breadcrumb';
import BackButton from './components/BackButton';
import { RoleType } from 'shared/enums';
import { IClient } from 'services/api/apiModels/client';
import MenuDropdown from './components/MenuDropdown';
import { appOperations, appSelectors } from 'state/ducks/app';
import { Dropdown } from 'antd';
import { useRouter } from 'next/router';
import routing from 'shared/routing';
import { Avatar } from 'assets/images/icons/newIcons';
import cx from 'classnames';
import HeaderPanel from './components/HeaderPanel';

interface IClientPanelLayoutProps {
	children: ReactNode;
}

function ClientPanelLayout({ children }: IClientPanelLayoutProps) {
	const isClientAuthenticated = useSelector(clientSelectors.isClientAuthenticated);
	const { t } = useTranslation(['header', 'menu']);
	const windowWidth = useWindowWidth();
	const [isSiderCollapsed, setIsSiderCollapsed] = useState<boolean>(false);
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
	const IsMenuOpen: boolean = useSelector(appSelectors.getMenuStatus);
	const clientRole: RoleType = useSelector(clientSelectors.getClientRole);
	const clientData: IClient = useSelector(clientSelectors.getClientData);
	const dispatch = useDispatch();
	const router = useRouter();
	const IsMaskVisible = useSelector(appSelectors.isMaskVisible);

	return isClientAuthenticated ? (
		<Layout>
			<Layout.Header className={styles.header}>
				<img
					className={styles.header__logo}
					src={require('assets/images/skillsive/logo/Logo_horizontal.svg')}
					onClick={() => router.push(routing.dashboard)}
					alt='logo'
				/>

				<div className={styles['header-user']}>
					<HeaderPanel />

					<Dropdown
						className={styles.dropdown}
						overlayClassName={styles.dropdown}
						overlay={<MenuDropdown clientData={clientData} />}
						onVisibleChange={state => dispatch(appOperations.setMenuStatus(state))}
						trigger={['click']}
						visible={IsMenuOpen}
					>
						<div className={styles['dropdown__box']}>
							<Avatar />

							{windowWidth > 575 && (
								<div className={styles['header-user-personal-data']}>
									<div className={styles['header-user-personal-data__name']}>{clientData?.companyName}</div>
									<div className={styles['header-user-personal-data__email']}>{clientData?.email}</div>
								</div>
							)}
						</div>
					</Dropdown>
				</div>
			</Layout.Header>

			<Layout className={cx({ [styles.mask]: IsMaskVisible })}>
				<SideMenu
					isSiderCollapsed={isSiderCollapsed}
					setIsSiderCollapsed={setIsSiderCollapsed}
					isDrawerOpen={isDrawerOpen}
					setIsDrawerOpen={setIsDrawerOpen}
				>
					{getMenuBasedOnClientRole(clientRole, isSiderCollapsed, setIsDrawerOpen)}
				</SideMenu>

				<Layout.Content className={styles.main}>
					<div className={cx(styles['main-content'])}>
						<div className={styles['main-content-header']}>
							<BackButton />

							<div className={styles['main-content-header__title']}>{t(Router.pathname)}</div>

							<Breadcrumb />
						</div>

						<div className={styles['main-content__children']}>{children}</div>
					</div>
				</Layout.Content>
			</Layout>
		</Layout>
	) : (
		<>{Router.push(routing.authentication.login)}</>
	);
}

export default ClientPanelLayout;
