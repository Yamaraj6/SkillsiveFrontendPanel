import PublicLayout from 'layouts/PublicLayout/PublicLayout';
import { Carousel } from 'antd';
import styles from './Pricing.module.scss';
import { useWindowWidth } from '@react-hook/window-size';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import OfferCardEnterprise from './components/OfferCardEnterprise';
import OfferCardFree from './components/OfferCardFree';
import OfferCardStandard from './components/OfferCardStandard';
import OfferCardPremium from './components/OfferCardPremium';
import { RightArrowCarousel, LeftArrowCarousel } from 'assets/images/icons/Pricing';

function Pricing() {
	const width = useWindowWidth();
	const { t } = useTranslation(['pricing']);

	const settings = {
		nextArrow: <RightArrowCarousel />,
		prevArrow: <LeftArrowCarousel />
	};

	return (
		<div className={styles.main}>
			{width < 600 && <p className={styles['mobile-header']}> {t('pricing')}</p>}

			<div className={styles.informations}>
				<h1>{t('ourPlansAndPricing')}</h1>
				<p>{t('plansContent')}</p>

				<div className={styles['informations__plan-container']}>
					<div className={styles['button-container']}>
						<Button className={styles['button-monthly']}>{t('monthly')}</Button>

						<Button className={styles['button-annual']}>{t('annual')}</Button>
					</div>

					<span>({t('freeMonths')})</span>
				</div>

				<p>{t('info')}</p>
			</div>

			{width < 600 ? (
				<div className={styles['carousel-container']}>
					<Carousel className={styles.carousel} arrows {...settings} draggable={true} dots={false}>
						<div className={styles.card}>
							<OfferCardFree />
						</div>

						<div className={styles.card}>
							<OfferCardStandard />
						</div>

						<div className={styles.card}>
							<OfferCardPremium />
						</div>

						<div className={styles.card}>
							<OfferCardEnterprise />
						</div>
					</Carousel>
				</div>
			) : (
				<div className={styles['card-container']}>
					<div className={styles['card-container__card']}>
						<OfferCardFree />
					</div>
					<div className={styles['card-container__card']}>
						<span>NAJPOPULARNIEJSZY</span>
						<OfferCardStandard />
					</div>
					<div className={styles['card-container__card']}>
						<OfferCardPremium />
					</div>
					<div className={styles['card-container__card']}>
						<OfferCardEnterprise />
					</div>
				</div>
			)}
		</div>
	);
}

Pricing.Layout = PublicLayout;

export default Pricing;
