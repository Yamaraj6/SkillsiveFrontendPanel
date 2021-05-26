import i18n from 'i18n/i18n';
import styles from '../LastCourse.module.scss';
import { IUserLastCourseData } from '../LastCourse';
import { formatDate } from 'shared/functions';

const columns = () => [
	{
		title: i18n.t('columns:course'),
		dataIndex: 'course',
		render: (_, entity: IUserLastCourseData) => (
			<img src={entity?.courseUrl || require('assets/images/icons/Device/CourseIcon.webp')} alt={'course image'} />
		),
		key: 'course'
	},
	{
		title: i18n.t('columns:user'),
		dataIndex: 'user',
		render: (_, entity: IUserLastCourseData) => (
			<div className={styles['user-info']}>
				{entity.userName}
				<span>{entity.userId}</span>
			</div>
		),
		key: 'user'
	},
	{
		title: i18n.t('columns:score'),
		dataIndex: 'score',
		render: (_, entity: IUserLastCourseData) => (
			<div className={styles['user-score']}>
				<img
					className={styles.emblem}
					// TODO EMBLEM BASED ON SCORE
					src={require('assets/images/icons/Device/emblem.svg')}
					alt={'emblem icon'}
				/>
				<span className={styles['progress-bar']}>
					{/* TODO  PROGRESS BASED ON API RETURN */}
					{entity.progress}%
				</span>
			</div>
		),
		key: 'score'
	},
	{
		title: i18n.t('columns:device'),
		dataIndex: 'device',
		render: (_, entity: IUserLastCourseData) => (
			<div className={styles['device-info']}>
				<img src={entity.deviceUrl || require('assets/images/icons/Device/Device.svg')} alt={'emblem icon'} />
				<span>{entity.userId}</span>
			</div>
		),
		key: 'device'
	},
	{
		title: i18n.t('columns:started'),
		dataIndex: 'started',
		key: 'started',
		render: (date: Date) => formatDate(date)
	},
	{
		title: i18n.t('columns:finished'),
		dataIndex: 'finished',
		key: 'finished',
		render: (date: Date) => formatDate(date)
	},
	{
		title: i18n.t('columns:language'),
		dataIndex: 'language',
		key: 'language'
	}
];

export default columns;
