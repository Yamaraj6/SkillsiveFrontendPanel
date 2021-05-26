import { IMenuAction } from 'shared/interfaces/ITable';
import { InfoCircle } from 'assets/images/icons/InfoCircle';
import { IUserLastCourseData } from '../LastCourse';

const actions = (): IMenuAction<IUserLastCourseData>[] => {
	return [
		{
			component: (
				<div>
					<InfoCircle /> test
				</div>
			),
			method: (record: IUserLastCourseData): void => console.log(record) // TODO
		}
	];
};

export default actions;
