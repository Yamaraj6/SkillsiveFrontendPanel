import styles from './ResourcesMenuDropdown.module.scss';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import routing from 'shared/routing';
import { Menu } from 'antd';
import Link from 'next/link';

function ResourcesMenuDropdown() {
	const { t } = useTranslation(['dropdownMenu', 'menu', 'authentication']);
	const router = useRouter();

	return (
		<Menu>
			<Menu.Item>
				<Link href={routing.webinars}>{t('webinars')}</Link>
			</Menu.Item>

			<Menu.Item>
				<Link href={routing.howToStart}>{t('howToStart')}</Link>
			</Menu.Item>

			<Menu.Item>
				<Link href={routing.clientHistory}>{t('clientHistory')}</Link>
			</Menu.Item>

			<Menu.Item>
				<Link href={routing.tutorials}>{t('tutorials')}</Link>
			</Menu.Item>

			<Menu.Item>
				<Link href={routing.faq}>{t('faq')}</Link>
			</Menu.Item>

			<Menu.Item>
				<Link href={routing.partnershipProgramme}>{t('partnershipProgramme')}</Link>
			</Menu.Item>
		</Menu>
	);
}

export default ResourcesMenuDropdown;
