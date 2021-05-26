import ClientPanelLayout from 'layouts/ClientPanelLayout';
import styles from './User.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { IUserData } from '../Users';
import { Button } from 'antd';
import { useState } from 'react';
import cx from 'classnames';
import FilterBar from 'components/FilterBar';
import Skills from './components/skills/Skills';
import LastCourse from './components/last-course/LastCourse';

function User() {
	const { t } = useTranslation(['users']);
	const router = useRouter();
	const { id } = router.query;
	const [currentTab, setTab] = useState<number>(0);

	const users: IUserData[] = [
		{
			user: '',
			name: 'Andrzej Kowalski',
			number: 2133532,
			sex: 'Yes',
			birthdate: new Date(),
			email: 'Andrzejkoval@gmail.com',
			phone: '+48 000 000 000',
			id: 1
		}
	];

	return (
		<div className={styles.main}>
			<div className={styles['user-container']}>
				<div className={styles['user-content']}>
					<div className={styles['header-info']}>
						<img src={require('assets/images/icons/Device/CourseIcon.webp')} alt='User Icon' />

						<div>
							<h2>Andrzej Kowalski</h2>

							<span>2133532</span>
						</div>

						<div className={styles['body-info']}></div>
					</div>

					<div className={'body-info'}>
						<div className={styles['info-row']}>
							<div className={styles['info-row__title']}>Phone</div>
							<div className={styles['info-row__value']}>+48 000 000 000</div>
						</div>

						<div className={styles['info-row']}>
							<div className={styles['info-row__title']}>Email</div>
							<div className={styles['info-row__value']}>andrzejkow@gmail.com</div>
						</div>

						<div className={styles['info-row']}>
							<div className={styles['info-row__title']}>Birthdate</div>
							<div className={styles['info-row__value']}>23.02.1987</div>
						</div>

						<div className={styles['info-row']}>
							<div className={styles['info-row__title']}>Sex</div>
							<div className={styles['info-row__value']}>Yes</div>
						</div>
					</div>
				</div>
			</div>

			<div className={styles['content-container']}>
				<div>
					<div className={styles['content-container__buttons']}>
						<Button
							className={cx(styles['content-button'], { [styles['content-button--active']]: currentTab === 0 })}
							onClick={() => setTab(0)}
						>
							{t('skills')}
						</Button>

						<Button
							className={cx(styles['content-button'], { [styles['content-button--active']]: currentTab === 1 })}
							onClick={() => setTab(1)}
						>
							{t('lastCourse')}
						</Button>
					</div>

					<FilterBar
						className={styles.pager}
						withDatePicker={false}
						withAutoComplete={false}
						itemsTotal={2}
						onChangeFilter={console.log}
						placeholder={t('name')}
						withSearch={false}
					/>
				</div>

				<div className={styles['table-container']}>
					{currentTab === 0 ? <Skills id={Number(id)} /> : <LastCourse id={Number(id)} />}
				</div>
			</div>
		</div>
	);
}

User.Layout = ClientPanelLayout;

export default User;
