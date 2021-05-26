import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import styles from './PublicLayout.module.scss';
import { clientSelectors } from 'state/ducks/client';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowWidth } from '@react-hook/window-size';
import { IClient } from 'services/api/apiModels/client';
import { appOperations, appSelectors } from 'state/ducks/app';
import { Dropdown } from 'antd';
import { useRouter } from 'next/router';
import routing from 'shared/routing';
import { Avatar } from 'assets/images/icons/newIcons';
import cx from 'classnames';
import HeaderPanel from 'layouts/ClientPanelLayout/components/HeaderPanel';
import MenuDropdown from 'layouts/ClientPanelLayout/components/MenuDropdown';

interface IClientPanelLayoutProps {
	children: ReactNode;
}

function PublicLayout({ children }: IClientPanelLayoutProps) {
	const windowWidth = useWindowWidth();
	const IsMenuOpen: boolean = useSelector(appSelectors.getMenuStatus);
	const clientData: IClient = useSelector(clientSelectors.getClientData);
	const dispatch = useDispatch();
	const router = useRouter();
	const IsMaskVisible = useSelector(appSelectors.isMaskVisible);

	return (
		<Layout>
			<Layout.Header className={styles.header}>
				<img
					className={styles.header__logo}
					src={require('assets/images/skillsive/logo/Logo_horizontal.svg')}
					onClick={() => router.push(routing.landingPage)}
					alt='logo'
				/>

				<div className={styles['header-user']}>
					<HeaderPanel isPublicLayout />

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
				<Layout.Content className={styles.main}>
					<div className={cx(styles['main-content'])}>
						<div className={styles['main-content__children']}>{children}</div>
					</div>
				</Layout.Content>
			</Layout>
		</Layout>
	);
}

export default PublicLayout;
