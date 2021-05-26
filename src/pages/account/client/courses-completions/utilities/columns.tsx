import i18n from 'i18n/i18n';
import styles from '../CoursesCompletions.module.scss';
import { formatDate } from 'shared/functions';
import { ICourseCompletion } from '../CoursesCompletions';

const columns = () => [
	{
		title: i18n.t('columns:course'),
		dataIndex: 'course',
		render: (_, entity: ICourseCompletion) => (
			<img src={entity?.courseUrl || require('assets/images/icons/Device/CourseIcon.webp')} alt={'course image'} />
		),
		key: 'course',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:user'),
		dataIndex: 'user',
		render: (_, entity: ICourseCompletion) => (
			<div className={styles['user-info']}>
				{entity.userName}
				<span>{entity.userId}</span>
			</div>
		),
		key: 'user',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:score'),
		dataIndex: 'score',
		render: (_, entity: ICourseCompletion) => (
			<div className={styles['user-score']}>
				<img
					// className={styles.emblem}
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
		key: 'score',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:device'),
		dataIndex: 'device',
		render: (_, entity: ICourseCompletion) => (
			<div className={styles['device-info']}>
				<img src={entity.deviceUrl || require('assets/images/icons/Device/Device.svg')} alt={'emblem icon'} />
				<span>{entity.userId}</span>
			</div>
		),
		key: 'device',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:started'),
		dataIndex: 'started',
		key: 'started',
		render: (date: Date) => formatDate(date),
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:finished'),
		dataIndex: 'finished',
		key: 'finished',
		render: (date: Date) => formatDate(date),
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:duration'),
		dataIndex: 'duration',
		key: 'duration',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:language'),
		dataIndex: 'language',
		key: 'language',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	}
];

export default columns;
