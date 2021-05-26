import PublicLayout from 'layouts/PublicLayout/PublicLayout';
import styles from './ClientHistory.module.scss';

function ClientHistory() {
	return <div className={styles.main}>Webinars</div>;
}

ClientHistory.Layout = PublicLayout;

export default ClientHistory;
