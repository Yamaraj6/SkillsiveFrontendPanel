import ClientPanelLayout from 'layouts/ClientPanelLayout';
import styles from './Skills.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import Question from './components/Question';

function Skills() {
	const { t } = useTranslation(['skills']);
	const router = useRouter();
	const { Id } = router.query;

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<div className={styles['header__left-box']}>
					<h2>Questions</h2>
				</div>

				<div className={styles['header__right-box']}>
					<h2>Information of quest</h2>
				</div>
			</div>

			{/* TODO  W ZALEZNOSCI OD  API PRZEKAZYWAC JAKAS DATE COMPONENTOWI QUESTION, zapewne id pytania i w srodku selector po id*/}
			<Question />

			<Question />

			<Question />
		</div>
	);
}

Skills.Layout = ClientPanelLayout;

export default Skills;
