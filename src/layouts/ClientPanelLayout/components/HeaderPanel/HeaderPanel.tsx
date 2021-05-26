import styles from './HeaderPanel.module.scss';
import Link from 'next/link';
import routing from 'shared/routing';
import { useWindowWidth } from '@react-hook/window-size';
import { useTranslation } from 'react-i18next';
import { clientSelectors } from 'state/ducks/client';
import { useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import ResourcesMenuDropdown from './components/ResourcesMenuDropdown';
import { DownOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { useState } from 'react';
import { Menu } from 'antd';
import DropDownIcon from '../DropDownIcon';
import { useRouter } from 'next/router';
import { getDefaultSelectedKey, getMenuIcon } from '../../utilities';

interface IHeaderPanelProps {
	isPublicLayout?: boolean;
}

function HeaderPanel({ isPublicLayout }: IHeaderPanelProps) {
	const { t } = useTranslation(['headerPanel']);
	const windowWidth = useWindowWidth();
	const isUserAuthenticated = useSelector(clientSelectors.isClientAuthenticated);
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
	const router = useRouter();
	const [selectedKey, setSelectedKey] = useState(getDefaultSelectedKey());

	return windowWidth > 768 ? (
		<ul className={styles.main}>
			<li>
				<Link href={routing.apps.apps}>{t('apps')}</Link>
			</li>

			<li>
				<Link href={routing.pricing}>{t('pricing')}</Link>
			</li>

			<li>
				<Dropdown overlay={<ResourcesMenuDropdown />}>
					<a className='ant-dropdown-link' onClick={e => e.preventDefault()}>
						RESOURCES <DownOutlined />
					</a>
				</Dropdown>
			</li>

			<li>
				<Link href={isUserAuthenticated ? routing.dashboard : routing.authentication.login}>{t('portal')}</Link>
			</li>
		</ul>
	) : !!isPublicLayout ? (
		<>
			<Drawer className={'mobile-drawer'} placement='left' onClose={() => setIsDrawerOpen(false)} visible={isDrawerOpen}>
				<div className={styles.drawer}>
					<Menu
						className={styles.menu}
						theme='dark'
						mode='inline'
						onClick={path => {
							router.push(path.key.toString());
							setIsDrawerOpen(false);
						}}
						defaultSelectedKeys={[getDefaultSelectedKey()]}
						defaultOpenKeys={[router.pathname]}
						onSelect={data => setSelectedKey(data.key.toString())}
						expandIcon={<DropDownIcon />}
					>
						<Menu.Item
							className={styles['menu__sub-menu']}
							key={routing.apps.apps}
							// icon={getMenuIcon(routing.account.client.my_applications, selectedKey)}
						>
							{t('apps')}
						</Menu.Item>

						<Menu.SubMenu className={styles['menu__sub-menu-drop']} key={routing.webinars} title={t('resources')}>
							<Menu.Item key={routing.webinars}>
								<Link href={routing.webinars}>{t('webinars')}</Link>
							</Menu.Item>

							<Menu.Item key={routing.howToStart}>
								<Link href={routing.howToStart}>{t('howToStart')}</Link>
							</Menu.Item>

							<Menu.Item key={routing.clientHistory}>
								<Link href={routing.clientHistory}>{t('clientHistory')}</Link>
							</Menu.Item>

							<Menu.Item key={routing.tutorials}>
								<Link href={routing.tutorials}>{t('tutorials')}</Link>
							</Menu.Item>

							<Menu.Item key={routing.faq}>
								<Link href={routing.faq}>{t('faq')}</Link>
							</Menu.Item>

							<Menu.Item key={routing.partnershipProgramme}>
								<Link href={routing.partnershipProgramme}>{t('partnershipProgramme')}</Link>
							</Menu.Item>
						</Menu.SubMenu>

						<Menu.Item className={styles['menu__sub-menu']} key={routing.pricing}>
							{t('pricing')}
						</Menu.Item>

						<Menu.Item className={styles['menu__sub-menu']} key={routing.dashboard}>
							{t('portal')}
						</Menu.Item>
					</Menu>
				</div>
			</Drawer>

			<div className={styles['drawer__open-btn']} onClick={() => setIsDrawerOpen(true)}>
				<img src={require('assets/images/icons/menu/Menu.svg')} alt='open' />
			</div>
		</>
	) : (
		<> </>
	);
}

HeaderPanel.defaultProps = {
	isPublicLayout: false
};

export default HeaderPanel;
