import Table from 'components/Table';
import MobileTable from 'components/MobileTable';
import { IMobileTable } from 'shared/interfaces/ITable';
import columns from './utilities/columns';
import actions from './utilities/actions';
import { Language } from 'services/api/apiModels/client';

export interface ILastCoursesSelector {
	Total: number;
	Devices: ILastCoursesData[];
}

export interface ILastCoursesData {
	userName: string;
	courseUrl: string;
	userId: number;
	progress: number;
	deviceUrl: string;
	companyName: string;
	dateStarted: Date;
	dateFinished: Date;
	language: Language;
	id: number;
}

function LastCourses() {
	const applicationOnDevice: ILastCoursesData[] = [
		{
			userName: 'Andrzej Kowalski',
			courseUrl: '',
			userId: 2133532,
			progress: 57,
			deviceUrl: '',
			companyName: 'Company Warsaw',
			dateStarted: new Date(),
			dateFinished: new Date(),
			language: Language.POLISH, // zrobic switch
			id: 1
		},
		{
			userName: 'Andrzej Kowalski',
			courseUrl: '',
			userId: 2133532,
			progress: 57,
			deviceUrl: '',
			companyName: 'Company Warsaw',
			dateStarted: new Date(),
			dateFinished: new Date(),
			language: Language.POLISH,
			id: 2
		}
	];

	return (
		<div>
			<Table<ILastCoursesData> data={applicationOnDevice} columns={columns()} actions={actions()}>
				{({ data, dropdown }: IMobileTable<ILastCoursesData>) => (
					<MobileTable<ILastCoursesData> data={data} columns={columns()} dropdown={dropdown} />
				)}
			</Table>
		</div>
	);
}

export default LastCourses;
