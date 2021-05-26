import styles from './MenuDropdown.module.scss';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import routing from 'shared/routing';
import { appOperations } from 'state/ducks/app';
import { useDispatch } from 'react-redux';
import { IClient } from 'services/api/apiModels/client';

interface IMenuDropdownProps {
	clientData?: IClient;
}

function MenuDropdown({ clientData }: IMenuDropdownProps) {
	const { t } = useTranslation(['dropdownMenu', 'menu', 'authentication']);
	const router = useRouter();
	const dispatch = useDispatch();

	return (
		<div className={styles.menu}>
			{!clientData ? (
				<>
					<div className={styles['menu__item']} onClick={() => router.push(routing.authentication.register)}>
						{/* <div className={styles['menu__icon-background']}>TEST</div> */}

						<h4>{t('authentication:register')}</h4>
					</div>

					<div className={styles['menu__item']} onClick={() => router.push(routing.authentication.login)}>
						{/* <div className={styles['menu__icon-background']}>TEST 1</div> */}

						<h4 className={styles['menu__sign-in']}>{t('authentication:login')}</h4>
					</div>
				</>
			) : (
				<>
					<div className={styles['menu__item']} onClick={() => router.push(routing.account.profile)}>
						<img src={require('assets/images/icons/dropdown/Profile.svg')} alt='error' />

						<h4>{t('profile')}</h4>
					</div>

					<div className={styles['menu__item']} onClick={() => router.push(routing.account.client.my_applications)}>
						<img src={require('assets/images/icons/dropdown/My_App.svg')} alt='error' />

						<h4>{t('myApp')}</h4>
					</div>

					<div className={styles['menu__item']} onClick={() => router.push(routing.account.client.personalizations)}>
						<img src={require('assets/images/icons/dropdown/Personalization.svg')} alt='error' />

						<h4>{t('personalization')}</h4>
					</div>

					<div
						className={styles['menu__item']}
						onClick={() => {
							dispatch(appOperations.logoutUser());
							dispatch(appOperations.setMenuStatus(false));
						}}
					>
						<img src={require('assets/images/icons/dropdown/Logout.svg')} alt='error' />

						<h4>{t('logOut')}</h4>
					</div>

					<hr />

					<div className={styles['menu__item-info']}>
						{t('subscription')}: <span> Standard {/* TODO  */}</span>
					</div>

					<div className={styles['menu__item-info']}>
						{t('numberOfHeadsets')}: <span>3/10 {/* TODO */}</span>
					</div>
				</>
			)}
		</div>
	);
}

export default MenuDropdown;
