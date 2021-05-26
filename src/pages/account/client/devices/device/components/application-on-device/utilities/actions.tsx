import { IMenuAction } from 'shared/interfaces/ITable';
import { InfoCircle } from 'assets/images/icons/InfoCircle';
import { IApplicationOnDeviceData } from '../ApplicationOnDevice';

const actions = (): IMenuAction<IApplicationOnDeviceData>[] => {
	return [
		{
			component: (
				<div>
					<InfoCircle /> test
				</div>
			),
			method: (record: IApplicationOnDeviceData): void => console.log(record) // TODO
		}
	];
};

export default actions;
