import styles from '../CourseCompletions.module.scss';
import { FireExtinguisher } from 'assets/images/icons/Skills';
import { useRouter } from 'next/router';
import routing from 'shared/routing';

export interface ISkill {
	question: string;
	answers: {
		id: number;
		isRight: boolean;
		text: string;
	}[];
	wasUserRight: boolean;
	score: number;
	duration: number;
}

interface ISingleSkill {
	Id: number;
}

function SingleSkill({ Id }: ISingleSkill) {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push({ pathname: routing.account.client.courses_completions.skills, query: { Id } })}
			className={styles.skill}
		>
			<div className={styles['skill__left-container']}>
				<div className={styles['skill__icon']}>
					<FireExtinguisher />
				</div>

				<p>Obługa Gaśnicy</p>
			</div>

			<div className={styles['progress-bar']}>87%</div>
		</div>
	);
}

export default SingleSkill;
