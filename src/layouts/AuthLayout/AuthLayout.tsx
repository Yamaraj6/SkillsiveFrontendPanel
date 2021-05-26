import { Logo, LogoMobile } from 'assets/images/icons/newIcons';
import { useWindowWidth } from '@react-hook/window-size';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import styles from './AuthLayout.module.scss';

interface IAuthLayoutProps {
	children: ReactNode;
}

function AuthLayout({ children }: IAuthLayoutProps) {
	const router = useRouter();
	const windowWidth = useWindowWidth();

	return (
		<div className={styles.main}>
			<img
				src={require('assets/images/icons/BackToButton.svg')}
				alt='arrow back'
				className={styles['back-to']}
				onClick={router.back}
			/>

			<div className={styles.logo}>{windowWidth > 425 ? <Logo /> : <LogoMobile />}</div>

			{children}
		</div>
	);
}

export default AuthLayout;
