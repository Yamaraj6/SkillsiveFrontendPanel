import styles from '../../User.module.scss';
import Table from 'components/Table';
import { useTranslation } from 'react-i18next';
import MobileTable from 'components/MobileTable';
import { IMobileTable } from 'shared/interfaces/ITable';
import actions from './utilities/actions';
import columns from './utilities/columns';

export interface IUserLastCourseSelector {
	Total: number;
	LastCourses: IUserLastCourseData[];
}

export interface IUserLastCourseData {
	courseUrl: string;
	userName: string;
	progress: number;
	deviceUrl: string;
	started: Date;
	finished: Date;
	language: string;
	userId: number;
	id: number;
}

interface ILastCourse {
	id: number;
}

function LastCourse({ id }: ILastCourse) {
	const { t } = useTranslation(['users']);
	const lastCourses: IUserLastCourseData[] = [
		{
			courseUrl: '',
			userName: 'Andrzej Kowalski',
			progress: 57,
			deviceUrl: '',
			started: new Date(),
			finished: new Date(),
			language: 'Polish',
			userId: 2133532,
			id: 1
		},
		{
			courseUrl: '',
			userName: 'Andrzej Kowalski',
			progress: 57,
			deviceUrl: '',
			started: new Date(),
			finished: new Date(),
			language: 'Polish',
			userId: 2133532,
			id: 2
		}
	];

	return (
		<div className={styles['table-container']}>
			<Table<IUserLastCourseData> data={lastCourses} columns={columns()} actions={actions()}>
				{({ data, dropdown }: IMobileTable<IUserLastCourseData>) => (
					<MobileTable<IUserLastCourseData> data={data} columns={columns()} dropdown={dropdown} />
				)}
			</Table>
		</div>
	);
}

export default LastCourse;
