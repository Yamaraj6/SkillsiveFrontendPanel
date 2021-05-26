import i18n from 'i18n/i18n';
import styles from '../Skills.module.scss';
import { IUserSkillData } from '../Skills';
import { formatDate } from 'shared/functions';

const columns = () => [
	{
		title: i18n.t('columns:course'),
		dataIndex: 'course',
		render: (_, entity: IUserSkillData) => (
			<img src={entity?.courseUrl || require('assets/images/icons/Device/CourseIcon.webp')} alt={'course image'} />
		),
		key: 'course'
	},
	{
		title: i18n.t('columns:skill'),
		dataIndex: 'skill', // TODO ZROBIC ENUM i KOMPONENT OSOBNY
		render: (skill: string) => (
			<div className={styles['user-skill']}>
				<img
					className={styles.emblem}
					// TODO EMBLEM BASED ON SCORE
					src={require('assets/images/icons/Skills/Fire_Extinguisher.svg')}
					alt={'emblem icon'}
				/>
				<span>{skill}</span>
			</div>
		),
		key: 'skill'
	},
	{
		title: i18n.t('columns:score'),
		dataIndex: 'score',
		render: (_, entity: IUserSkillData) => (
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
