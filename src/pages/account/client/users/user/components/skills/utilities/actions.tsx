import { IMenuAction } from 'shared/interfaces/ITable';
import { InfoCircle } from 'assets/images/icons/InfoCircle';
import { IUserSkillData } from '../Skills';

const actions = (): IMenuAction<IUserSkillData>[] => {
	return [
		{
			component: (
				<div>
					<InfoCircle /> test
				</div>
			),
			method: (record: IUserSkillData): void => console.log(record) // TODO
		}
	];
};

export default actions;
