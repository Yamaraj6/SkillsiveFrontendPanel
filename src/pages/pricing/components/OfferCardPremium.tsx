import styles from './OfferCard.module.scss';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { PremiumOfferLabelTwo } from 'assets/images/icons/Pricing';

function OfferCardPremium() {
	const { t } = useTranslation(['pricing']);

	return (
		<div className={styles.box}>
			<h1> PREMIUM</h1>

			<div className={styles['header-info']}>
				<p>For medium and large companies</p>

				<div>
					<span>UNLIMITED</span>

					<p>number of courses and playtime</p>
				</div>
			</div>

			<div className={styles.price}>
				<span className={styles['price__value']}> 749</span>

				<div className={styles['price__range']}>
					<span className={styles['price__currency']}>pln</span>
					<span className={styles['price__time']}>/mo</span>
				</div>
			</div>

			<div className={styles['offer-body']}>
				<div className={styles.label}>
					<PremiumOfferLabelTwo />

					<span>2</span>
				</div>

				<div className={styles.slider}>
					<div className={styles['slider__inner']} />
				</div>

				<p>support for 3 pairs of VR goggles included in the price, each next pair of goggles PLN 249 per month</p>
			</div>

			<Button className={styles['button-choose']}>{t('chooseAPlan')}</Button>

			<div className={styles['body-info']}>
				<h2>Applications in the plan:</h2>
				<ul>
					<li>{t('Production hazards')}</li>
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

export default OfferCardPremium;
