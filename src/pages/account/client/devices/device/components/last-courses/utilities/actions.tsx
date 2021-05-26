import { IMenuAction } from 'shared/interfaces/ITable';
import { InfoCircle } from 'assets/images/icons/InfoCircle';
import { ILastCoursesData } from '../LastCourses';

const actions = (): IMenuAction<ILastCoursesData>[] => {
	return [
		{
			component: (
				<div>
					<InfoCircle /> test
				</div>
			),
			method: (record: ILastCoursesData): void => console.log(record) // TODO
		}
	];
};

export default actions;
