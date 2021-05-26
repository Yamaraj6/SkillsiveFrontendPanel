import styles from '../../User.module.scss';
import Table from 'components/Table';
import { useTranslation } from 'react-i18next';
import MobileTable from 'components/MobileTable';
import { IMobileTable } from 'shared/interfaces/ITable';
import actions from './utilities/actions';
import columns from './utilities/columns';

export interface IUserSkillSelector {
	Total: number;
	UserSkill: IUserSkillData[];
}

export interface IUserSkillData {
	courseUrl: string;
	skill: string; // To jakis ENUM! bo musze zrobic z tego komponent osobny
	progress: number;
	started: Date;
	finished: Date;
	language: string;
	id: number;
}

interface ISkills {
	id: number;
}

function Skills({ id }: ISkills) {
	const { t } = useTranslation(['users']);

	const lastCourses: IUserSkillData[] = [
		{
			courseUrl: '',
			skill: 'Obsluga Gasnicy',
			progress: 57,
			started: new Date(),
			finished: new Date(),
			language: 'Polish',
			id: 1
		},
		{
			courseUrl: '',
			skill: 'Zachowanie podczas alarmu pozarowego',
			progress: 57,
			started: new Date(),
			finished: new Date(),
			language: 'Polish',
			id: 2
		}
	];

	return (
		<div className={styles['table-container']}>
			<Table<IUserSkillData> data={lastCourses} columns={columns()} actions={actions()}>
				{({ data, dropdown }: IMobileTable<IUserSkillData>) => (
					<MobileTable<IUserSkillData> data={data} columns={columns()} dropdown={dropdown} />
				)}
			</Table>
		</div>
	);
}

export default Skills;
