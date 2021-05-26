import styles from './OfferCard.module.scss';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

function OfferCardFree() {
	const { t } = useTranslation(['pricing']);

	return (
		<div className={styles.box}>
			<h1> FREE</h1>

			<div className={styles['header-info']}>
				<p>For small and medium-sized businesses</p>

				<div>
					<span>15</span>

					<p>course views</p>
				</div>
			</div>

			<div className={styles.price}>
				<span className={styles['price__value']}> 0</span>

				<div className={styles['price__range']}>
					<span className={styles['price__currency']}>pln</span>
					<span className={styles['price__time']}>/mo</span>
				</div>
			</div>

			<div className={styles['offer-body']} />

			<Button className={styles['button-choose']}>{t('chooseAPlan')}</Button>

			<div className={styles['body-info']}>
				<h2>Applications in the plan:</h2>
				<ul>
					<li>{t('Production hazards')}</li>
					<li className={styles['inactive']}>{t('Basic Application')}</li>
					<li className={styles['inactive']}>{t('Basic First Aid and Evacuation')}</li>
					<li className={styles['inactive']}>{t('Specialized applications')}</li>
				</ul>

				<h2>Features in the plan:</h2>
				<ul>
					<li>{t('Base Analytics ')}</li>
					<li className={styles['inactive']}>{t('Advanced Analytics')}</li>
					<li className={styles['inactive']}>{t('Customizations')}</li>
					<li className={styles['inactive']}>{t('Access to other languages ​')}</li>
					<li className={styles['inactive']}>{t('Remote application control')}</li>
					<li className={styles['inactive']}>{t('Support')}</li>
				</ul>
			</div>
		</div>
	);
}

export default OfferCardFree;
