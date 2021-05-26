import styles from './OfferCard.module.scss';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

function OfferCardEnterprise() {
	const { t } = useTranslation(['pricing']);

	return (
		<div className={styles.box}>
			<h1> ENTERPRISE</h1>

			<div className={styles['header-info']}>
				<p>For small and medium-sized businesses</p>

				<div>
					<span>UNLIMITED</span>

					<p>number of courses and playtime</p>
				</div>
			</div>

			<div className={styles.consult}>
				<span className={styles['consult__contact']}> Contact us</span>

				<div className={styles['consult__number']}>Any number of VR goggles</div>
			</div>

			<div className={styles['offer-body']} />

			<Button className={styles['button-choose']}>{t('chooseAPlan')}</Button>

			<div className={styles['body-info']}>
				<h2>Applications in the plan:</h2>
				<ul>
					<li className={styles['inactive']}>{t('Production hazards')}</li>
					<li>{t('Basic Application')}</li>
					<li>{t('Basic First Aid and Evacuation')}</li>
					<li>{t('Specialized applications')}</li>
				</ul>

				<h2>Features in the plan:</h2>
				<ul>
					<li>{t('Base Analytics ')}</li>
					<li>{t('Advanced Analytics')}</li>
					<li>{t('Customizations')}</li>
					<li>{t('Access to other languages ​')}</li>
					<li>{t('Remote application control')}</li>
					<li>{t('Support')}</li>
				</ul>
			</div>
		</div>
	);
}

export default OfferCardEnterprise;
