import i18n from 'i18n/i18n';
import { formatDate } from 'shared/functions';
import styles from '../Users.module.scss';

const columns = () => [
	{
		title: i18n.t('columns:user'),
		dataIndex: 'user',
		key: 'user',
		render: (userUrl: string): JSX.Element => (
			<img
				className={styles['user-icon']}
				src={userUrl || require('assets/images/icons/Device/CourseIcon.webp')}
				alt={'course image'}
			/>
		),
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:name'),
		dataIndex: 'name',
		key: 'name',
		className: styles['user-name'],
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:number'),
		dataIndex: 'number',
		key: 'number',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:sex'),
		dataIndex: 'sex',
		key: 'sex',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:birthdate'),
		dataIndex: 'birthdate',
		key: 'birthdate',
		render: (date: Date) => formatDate(date),
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:email'),
		dataIndex: 'email',
		key: 'email',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:phone'),
		dataIndex: 'phone',
		key: 'phone',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	}
];

export default columns;
