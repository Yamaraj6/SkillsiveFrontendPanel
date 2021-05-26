import i18n from 'i18n/i18n';
import styles from '../Devices.module.scss';

const columns = () => [
	{
		title: i18n.t('columns:device'),
		dataIndex: 'deviceUrl',
		key: 'deviceUrl',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:name'),
		dataIndex: 'name',
		key: 'name',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:color'),
		dataIndex: 'color',
		key: 'color',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:number'),
		dataIndex: 'number',
		render: (number): JSX.Element => <div className={styles['device-number']}>{number}</div>,
		key: 'number',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:lastPin'),
		dataIndex: 'lastPin',
		key: 'lastPin',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:status'),
		dataIndex: 'status',
		key: 'status',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:subscription'),
		dataIndex: 'subscription',
		key: 'subscription',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	},
	{
		title: i18n.t('columns:devicesCount'),
		dataIndex: 'devicesCount',
		key: 'devicesCount',
		sortParam: 1,
		sorter: true,
		showSorterTooltip: false
	}
];

export default columns;
