import ClientPanelLayout from 'layouts/ClientPanelLayout';
import styles from './Users.module.scss';
import FilterBar from 'components/FilterBar';
import Table from 'components/Table';
import { useTranslation } from 'react-i18next';
import columns from './utilities/columns';
import actions from './utilities/actions';
import MobileTable from 'components/MobileTable';
import { IMobileTable } from 'shared/interfaces/ITable';

export interface IUsersSelector {
	Total: number;
	Users: IUserData[];
}

export interface IUserData {
	user: string;
	name: string;
	number: number;
	sex: string;
	birthdate: Date;
	email: string;
	phone: string;
	id: number;
}

function Users() {
	const { t } = useTranslation(['users']);

	const users: IUserData[] = [
		{
			user: '',
			name: 'Andrzej Kowalski',
			number: 2133532,
			sex: 'Yes',
			birthdate: new Date(),
			email: 'Andrzejkoval@gmail.com',
			phone: '+48 000 000 000',
			id: 1
		},
		{
			user: '',
			name: 'Andrzej Kowalski',
			number: 2133532,
			sex: 'Yes',
			birthdate: new Date(),
			email: 'Andrzejkoval@gmail.com',
			phone: '+48 000 000 000',
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
					<Table<IUserData> data={users} columns={columns()} actions={actions()}>
						{({ data, dropdown }: IMobileTable<IUserData>) => (
							<MobileTable<IUserData> data={data} columns={columns()} dropdown={dropdown} />
						)}
					</Table>
				</div>
			</div>
		</div>
	);
}

Users.Layout = ClientPanelLayout;

export default Users;
