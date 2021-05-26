import ClientPanelLayout from 'layouts/ClientPanelLayout';
import styles from './Devices.module.scss';
import FilterBar from 'components/FilterBar/FilterBar';
import Table from 'components/Table';
import { useTranslation } from 'react-i18next';
import columns from './utilities/columns';
import MobileTable from 'components/MobileTable';
import { IMobileTable } from 'shared/interfaces/ITable';
import { useRouter } from 'next/router';
import routing from 'shared/routing';
import { Color, GoggleStatus } from 'services/api/apiModels/devices';

enum Subscription { // TO JAKIS ENUM, TEGO NIE MA
	FREE = 'Free',
	STANDARD = 'Standard',
	PREMIUM = 'Premium',
	ENTERPRISE = 'Enterprise'
}

export interface IDevicesDataSelector {
	Total: number;
	Devices: IDevicesData[];
}

export interface IDevicesData {
	deviceUrl: string;
	name: string;
	color: Color;
	number: number;
	lastPin: number;
	status: GoggleStatus;
	subscription: Subscription;
	devicesCount: string;
	id: number;
}

function Devices() {
	const { t } = useTranslation(['devices']);
	const router = useRouter();

	const devices: IDevicesData[] = [
		{
			deviceUrl: 'URL',
			name: 'Company Warsaw',
			color: Color.GREEN,
			number: 12,
			lastPin: 2324,
			status: GoggleStatus.ONLINE,
			subscription: Subscription.STANDARD, // zmienic na switch
			devicesCount: ' 3 / 10',
			id: 1
		},
		{
			deviceUrl: 'URL',
			name: 'Company Warsaw',
			color: Color.GREEN,
			number: 12,
			lastPin: 2324,
			status: GoggleStatus.ONLINE,
			subscription: Subscription.STANDARD,
			devicesCount: ' 3 / 10',
			id: 2
		}
	];

	return (
		<div className={styles['main-container']}>
			<div className={styles['content-container']}>
				<div className={styles['filter-container']}>
					<FilterBar
						withDevices
						withCourses
						withAutoComplete={false}
						itemsTotal={2}
						onChangeFilter={console.log}
						placeholder={t('name')}
						className={styles['filter-bar']}
					/>
				</div>

				<div className={styles['table-container']}>
					<Table<IDevicesData>
						data={devices}
						columns={columns()}
						rowClick={(entity: IDevicesData) =>
							router.push({ pathname: routing.account.client.devices.device, query: { id: entity.id } })
						}
					>
						{({ data }: IMobileTable<IDevicesData>) => <MobileTable<IDevicesData> data={data} columns={columns()} />}
					</Table>
				</div>
			</div>
		</div>
	);
}

Devices.Layout = ClientPanelLayout;

export default Devices;
