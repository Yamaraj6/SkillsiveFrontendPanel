import styles from '../Skills.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { Star, Clock, Checkbox, Checkmark } from 'assets/images/icons/Skills';

function Question() {
	const { t } = useTranslation(['skills']);
	const router = useRouter();
	const { Id } = router.query;

	return (
		<div className={styles['skill-container']}>
			<div className={styles['question-box']}>
				<p>
					1. Fire group A solid fire 2.5 MW of energy will arise during a cabinet fire. This energy is able to caomletely destroy
					3 rooms
				</p>

				<div className={styles['answer-container']}>
					<div className={styles['answer-container__row']}>
						<div className={cx(styles.checkbox, styles['checkbox__checked'])}>
							<Checkmark />
						</div>

						<p>Get out of the office</p>
					</div>

					<div className={styles['answer-container__row']}>
						<div className={cx(styles.checkbox)}></div>

						<p>Receive on email</p>
					</div>

					<div className={styles['answer-container__row']}>
						<div className={cx(styles.checkbox)}></div>

						<p>Receive on email</p>
					</div>

					<div className={styles['answer-container__row']}>
						<div className={cx(styles.checkbox)}></div>

						<p>Get out of the office</p>
					</div>
				</div>
			</div>

			<div className={styles['information-box']}>
				<div className={styles['information-box__row']}>
					<div className={styles['information-box__type']}>
						<Star />

						<span>score</span>
					</div>

					<div className={styles['information-box__value']}>
						<span className={styles.score}>87</span>/100
					</div>
				</div>

				<div className={styles['information-box__row']}>
					<div className={styles['information-box__type']}>
						<Checkbox />

						<span>good answer</span>
					</div>
					<div className={styles['information-box__value']}>
						<div className={styles['good-answer']}>1/1</div>
					</div>
				</div>

				<div className={styles['information-box__row']}>
					<div className={styles['information-box__type']}>
						<Clock />

						<span>duration</span>
					</div>

					<div className={styles['information-box__value']}>
						<span className={styles.duration}>00:00:08</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Question;
