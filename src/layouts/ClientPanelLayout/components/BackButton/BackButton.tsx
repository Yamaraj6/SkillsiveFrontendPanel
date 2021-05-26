import Router from 'next/router';
import styles from './BackButton.module.scss';

function BackButton() {
	const split = Router.pathname.split('/').slice(2);

	if (split.length === 3) {
		return (
			<img
				src={require('assets/images/icons/back-button-menu.svg')}
				alt='arrow back'
				className={styles['back-btn']}
				onClick={Router.back}
			/>
		);
	} else {
		return <></>;
	}
}

export default BackButton;
