import { Breadcrumb as BreadcrumbAnt } from 'antd';
import { useTranslation } from 'react-i18next';
import Router from 'next/router';
import Link from 'next/link';
import styles from './Breadcrumb.module.scss';

function Breadcrumb() {
	const { t } = useTranslation(['menu', 'header']);
	const split = Router.pathname.split('/').slice(2);

	if (split.length === 1) {
		return <></>;
	}
	// else if (Router.pathname === routing.account.profile_edit) {
	// 	return (
	// 		<BreadcrumbAnt className={styles.breadcrumb}>
	// 			<BreadcrumbAnt.Item>
	// 				<Link href={Router.pathname.replace(split[1], '')}>{t('menu:' + split[0])}</Link>
	// 			</BreadcrumbAnt.Item>

	// 			<BreadcrumbAnt.Item>
	// 				<Link href={Router.pathname}>{t('header:' + Router.pathname)}</Link>
	// 			</BreadcrumbAnt.Item>
	// 		</BreadcrumbAnt>
	// 	);
	// }
	else if (split.length === 2) {
		return (
			<BreadcrumbAnt className={styles.breadcrumb}>
				<BreadcrumbAnt.Item>{t('menu:' + split[0])}</BreadcrumbAnt.Item>

				<BreadcrumbAnt.Item>
					<Link href={Router.pathname}>{t('menu:' + split[1])}</Link>
				</BreadcrumbAnt.Item>
			</BreadcrumbAnt>
		);
	} else {
		return (
			<BreadcrumbAnt className={styles.breadcrumb}>
				<BreadcrumbAnt.Item>{t('menu:' + split[0])}</BreadcrumbAnt.Item>

				<BreadcrumbAnt.Item>
					<Link href={Router.pathname.replace(split[2], '')}>{t('menu:' + split[1])}</Link>
				</BreadcrumbAnt.Item>

				<BreadcrumbAnt.Item>
					<Link href={Router.pathname}>{t('header:' + Router.pathname)}</Link>
				</BreadcrumbAnt.Item>
			</BreadcrumbAnt>
		);
	}
}

export default Breadcrumb;
