import i18n from 'i18n/i18n';
import { IApplicationOnDeviceData } from '../ApplicationOnDevice';
import styles from '../ApplicationOnDevice.module.scss';

const columns = () => [
	{
		title: i18n.t('columns:application'),
		dataIndex: 'application',
		render: (_, entity: IApplicationOnDeviceData) => (
			<div className={styles['ApplicationOnDevice-application']}>
				<img src={entity?.applicationUrl || require('assets/images/icons/Device/CourseIcon.webp')} alt={'application image'} />

				{entity?.application}
			</div>
		),
		key: 'application'
	},
	{
		title: i18n.t('columns:version'),
		dataIndex: 'version',
		key: 'version'
	},
	{
		title: i18n.t('columns:available'),
		dataIndex: 'available',
		key: 'available'
	},
	{
		title: i18n.t('columns:language'),
		dataIndex: 'language',
		key: 'language'
	}
];

export default columns;
