import ClientPanelLayout from 'layouts/ClientPanelLayout';
import styles from './CourseCompletions.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { Export, GetCertificate } from 'assets/images/icons/CourseCompletions';
import SingleSkill from './components/SingleSkill';
import { Color } from 'services/api/apiModels/devices';
import { ICourseCompletion } from '../CoursesCompletions';

export interface IUserDevice {
	name: string;
	color: Color;
	createDate: Date; // Idk
	device_id: number;
	number: number;
}

export interface IUserCourseCompletion extends ICourseCompletion {
	app: string; // Enum ? nie wiem co to, jakas kategoria ?
	skills: {
		skill: string; // Jakis  ENUM po ktorym moge znalezc Nazwe skilla i ikone
		progress: number;
	}; // albo oddzielnym callem
}

function CourseCompletions() {
	const { t } = useTranslation(['courseCompletions']);
	const router = useRouter();
	const { id } = router.query;

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<h2>
					BLS COVID-19 <span>/ First Aid AED</span>
				</h2>

				<div className={styles['header__buttons']}>
					<Button icon={<Export />}>{t('exportToPdf')}</Button>

					<Button icon={<GetCertificate />}>{t('getACertificate')}</Button>

					<img src={require('assets/images/icons/CourseCompletions/ExitButton.svg')} alt='Exit Icon' />
				</div>
			</div>

			<div className={styles.made}>
				<p>
					Made by
					<span>BHP VR</span>
				</p>
			</div>

			<div className={styles['main-content']}>
				<img src={require('assets/images/icons/CourseCompletions/MaskTextBigger.webp')} alt='course image' />

				<div className={styles['user-progress']}>
					<div className={styles['user-progress__row']}>
						<div className={styles['user-progress__title']}>Completed</div>

						<div className={styles['user-progress__value']}>
							<div className={styles['progress-bar']}>57</div>

							<img className={styles.emblem} src={require('assets/images/icons/Device/emblem.svg')} alt={'emblem icon'} />
						</div>
					</div>

					<div className={styles['user-progress__row']}>
						<div className={styles['user-progress__title']}>Duration</div>
						<div className={styles['user-progress__value']}>00:11:24</div>
					</div>

					<div className={styles['user-progress__row']}>
						<div className={styles['user-progress__title']}>Finish Time</div>
						<div className={styles['user-progress__value']}>12:45:24 / 23.02.2021</div>
					</div>

					<div className={styles['user-progress__row']}>
						<div className={styles['user-progress__title']}>START TIME</div>
						<div className={styles['user-progress__value']}>12:34:34 / 23.02.2021</div>
					</div>

					<div className={styles['user-progress__row']}>
						<div className={styles['user-progress__title']}>APP</div>
						<div className={styles['user-progress__value']}>Evacuations</div>
					</div>

					<div className={styles['user-progress__row']}>
						<div className={styles['user-progress__title']}>LANGUAGE</div>
						<div className={styles['user-progress__value']}>Polish</div>
					</div>
				</div>

				<div className={styles['user-skills']}>
					<h1>Skills</h1>

					<div className={styles['user-skills__container']}>
						<SingleSkill Id={1} />

						<SingleSkill Id={1} />

						<SingleSkill Id={1} />

						<SingleSkill Id={1} />

						<SingleSkill Id={1} />

						<SingleSkill Id={1} />

						<SingleSkill Id={1} />

						<SingleSkill Id={1} />
					</div>
				</div>
			</div>

			<div className={styles['info-container']}>
				<div className={styles['info-container__box']}>
					<h1>User</h1>

					<div className={styles['info-container__box-container']}>
						<img src={require('assets/images/icons/CourseCompletions/Mask.webp')} alt='User image' />

						<div className={styles['info-container__table']}>
							<div className={styles['info-container__row']}>
								<div className={styles['info-container__title']}>Name</div>

								<div className={styles['info-container__value']}>Andrzej Kowalski</div>
							</div>

							<div className={styles['info-container__row']}>
								<div className={styles['info-container__title']}>Email</div>

								<div className={styles['info-container__value']}>andrzejkow@gmail.com</div>
							</div>

							<div className={styles['info-container__row']}>
								<div className={styles['info-container__title']}>Birthdate</div>

								<div className={styles['info-container__value']}>23.02.1987</div>
							</div>

							<div className={styles['info-container__row']}>
								<div className={styles['info-container__title']}>Sex</div>

								<div className={styles['info-container__value']}>Yes</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles['info-container__box']}>
					<h1>Device</h1>

					<div className={styles['info-container__box-container']}>
						<img src={require('assets/images/icons/CourseCompletions/Mask.webp')} alt='Device image' />

						<div className={styles['info-container__table']}>
							<div className={styles['info-container__row']}>
								<div className={styles['info-container__title']}>Name</div>

								<div className={styles['info-container__value']}>Hebe</div>
							</div>

							<div className={styles['info-container__row']}>
								<div className={styles['info-container__title']}>Color</div>

								<div className={styles['info-container__value']}>White</div>
							</div>

							<div className={styles['info-container__row']}>
								<div className={styles['info-container__title']}>Create Date</div>

								<div className={styles['info-container__value']}>01.01.01 / 00:00:00</div>
							</div>

							<div className={styles['info-container__row']}>
								<div className={styles['info-container__title']}>Id</div>

								<div className={styles['info-container__value']}>1H3763O1781023</div>
							</div>

							<div className={styles['info-container__row']}>
								<div className={styles['info-container__title']}>Number</div>

								<div className={styles['info-container__value']}>1</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

CourseCompletions.Layout = ClientPanelLayout;

export default CourseCompletions;
