import { IMenuAction } from 'shared/interfaces/ITable';
import { InfoCircle } from 'assets/images/icons/InfoCircle';
import routing from 'shared/routing';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { ICourseCompletion } from '../CoursesCompletions';

const actions = (): IMenuAction<ICourseCompletion>[] => {
	const { t } = useTranslation(['courseCompletions']);
	const router = useRouter();

	return [
		{
			component: (
				<div>
					<InfoCircle /> {t('checkUserProgress')}
				</div>
			),
			method: ({ id }: ICourseCompletion): void => {
				router.push({ pathname: routing.account.client.courses_completions.course_completions, query: { Id: id } });
			}
		}
	];
};

export default actions;
