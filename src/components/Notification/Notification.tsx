import styles from './Notification.module.scss';
import { useTranslation } from 'react-i18next';

export interface INotificationProps {
	productName?: string;
	productCoverUrl?: string;
}

function Notification({ productName, productCoverUrl }: INotificationProps) {
	const { t } = useTranslation(['buyProduct']);

	return (
		<div className={styles.box}>
			<div className={styles['box__message']}>
				<h3>{t('notification')}</h3>
			</div>

			<div className={styles.details}>
				<img src={productCoverUrl} alt='product cover' />
				<h2>{productName}</h2>
			</div>
		</div>
	);
}

export default Notification;
