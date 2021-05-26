import PublicLayout from 'layouts/PublicLayout/PublicLayout';
import styles from './Apps.module.scss';
import FilterBar from 'components/FilterBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ICourse } from 'services/api/apiModels/courses';
import { coursesOperations, coursesSelectors } from 'state/ducks/courses';
import _ from 'lodash';
import { useRouter } from 'next/router';
import routing from 'shared/routing';
// export interface ICoursesDataSelector {
// 	// Total: number;
// 	// Invoices: IInvoicesData[];
// }

// export interface IInvoicesData {}

function Apps() {
	const dispatch = useDispatch();
	const courses: ICourse[] = useSelector(coursesSelectors.getCourses);
	// const filtered_courses: ICourse[] = [];
	const router = useRouter();

	useEffect(() => {
		dispatch(coursesOperations.getCourses());
	}, []);

	return (
		<div className={styles.main}>
			<h1>APPS</h1>

			<div className={styles['filter-container']}>
				<FilterBar
					className={styles.filter}
					withAutoComplete={false}
					itemsTotal={2}
					onChangeFilter={console.log}
					withPaging={false}
					withDatePicker={false}
					withCourses
					withPlans
				/>
			</div>

			<div className={styles['box-container']}>
				{courses?.map(
					(course, key) =>
						course.courseName.length > 1 && (
							<div
								key={key}
								className={styles['box']}
								onClick={() => {
									router.push({ pathname: routing.apps.app, query: { Id: course.id } });
								}}
							>
								<div className={styles['box__image-wrapper']}>
									<img src={course?.iconUrl} alt='Course image' />
								</div>
								<div className={styles['box__info']}>
									<h2>{course?.courseName}</h2>

									<p>
										Duration <span>{course?.estimatedCompletionTime} min</span>
									</p>
								</div>
							</div>
						)
				)}
			</div>
		</div>
	);
}

Apps.Layout = PublicLayout;

export default Apps;
