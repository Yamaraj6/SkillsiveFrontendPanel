import { IMenuAction } from 'shared/interfaces/ITable';
import { InfoCircle } from 'assets/images/icons/InfoCircle';
import { IUserData } from '../Users';
import routing from 'shared/routing';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const actions = (): IMenuAction<IUserData>[] => {
	const { t } = useTranslation(['users']);
	const router = useRouter();

	return [
		{
			component: (
				<div>
					<InfoCircle /> {t('view')}
				</div>
			),
			method: ({ id }: IUserData): void => {
				router.push({ pathname: routing.account.client.users.user, query: { Id: id } });
			}
		}
	];
};

export default actions;
