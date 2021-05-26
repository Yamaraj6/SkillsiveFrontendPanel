import ClientPanelLayout from 'layouts/ClientPanelLayout';
import Table from 'components/Table';
import MobileTable from 'components/MobileTable';
import { IMobileTable } from 'shared/interfaces/ITable';
import columns from './utilities/columns';
import actions from './utilities/actions';

export interface IApplicationOnDeviceSelector {
	Total: number;
	Devices: IApplicationOnDeviceData[];
}

export interface IApplicationOnDeviceData {
	applicationUrl: string;
	application: string;
	version: number;
	available: number;
	language: string;
	id: number;
}

function ApplicationOnDevice() {
	const applicationOnDevice: IApplicationOnDeviceData[] = [
		{
			applicationUrl: '',
			application: 'First Aid - BLS and AED COVID-19',
			version: 1.2,
			available: 1.2,
			language: 'Polski',
			id: 1
		},
		{
			applicationUrl: '',
			application: 'First Aid - BLS and AED COVID-19',
			version: 1.2,
			available: 1.2,
			language: 'Polski',
			id: 2
		}
	];

	return (
		<div>
			<Table<IApplicationOnDeviceData> data={applicationOnDevice} columns={columns()} actions={actions()}>
				{({ data, dropdown }: IMobileTable<IApplicationOnDeviceData>) => (
					<MobileTable<IApplicationOnDeviceData> data={data} columns={columns()} dropdown={dropdown} />
				)}
			</Table>
		</div>
	);
}

ApplicationOnDevice.Layout = ClientPanelLayout;

export default ApplicationOnDevice;
