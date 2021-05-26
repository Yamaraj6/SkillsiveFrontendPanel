import PublicLayout from 'layouts/PublicLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { coursesOperations, coursesSelectors } from 'state/ducks/courses';
import { ICourse } from 'services/api/apiModels/courses';
import CourseBox from './components/CourseBox';

function App() {
	const router = useRouter();
	const { Id } = router.query;
	const dispatch = useDispatch();
	const course: ICourse = useSelector(coursesSelectors.getCourseById(Id as string));

	useEffect(() => {
		dispatch(coursesOperations.getCourses());
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<img src={require('assets/images/Przechwytywanie.webp')} />;
			</div>

			<div className={styles.container}>
				<div className={styles['left-box']}>
					<div className={styles['left-box__main-info']}>
						<h2>First Aid - Burns</h2>

						<p>
							Collaborating with specialists in the field of firefighting and Virtual Reality, we have created a tool that
							will take you to realistic environment, where you’ll be able to put out a fire of a person in safe conditions
							using 4 methods and then give him first aid.
						</p>
					</div>

					<div className={styles['left-box__additional-info']}>
						<div className={styles['left-box__additional-info-header']}>
							<p>Dodatkowe Szczegóły</p>{' '}
						</div>

						<div className={styles['left-box__additional-info-body']}>
							<div className={styles['device-types']}>
								<p>Typ okularów: </p>

								<div className={styles['device-types__devices']}>
									<img
										src={require('assets/images/icons/Device/Device.svg')}
										className={styles['device-types__device-box']}
									/>

									<img
										src={require('assets/images/icons/Device/Device.svg')}
										className={styles['device-types__device-box']}
									/>

									<img
										src={require('assets/images/icons/Device/Device.svg')}
										className={styles['device-types__device-box']}
									/>

									<img
										src={require('assets/images/icons/Device/Device.svg')}
										className={styles['device-types__device-box']}
									/>

									<img
										src={require('assets/images/icons/Device/Device.svg')}
										className={styles['device-types__device-box']}
									/>
								</div>
							</div>

							<ul>
								<li>
									<p> Jezyk: </p>

									<div>flags</div>
								</li>

								<li>
									<p> Szacowany czas ukończenia:: </p>

									<div>30</div>
								</li>

								<li>
									<p> Kategoria: </p>

									<div> Transport hazards and risk control, First Aid </div>
								</li>

								<li>
									<p> Data wydania: </p>

									<div> 01.01.2021 </div>
								</li>

								<li>
									<p>Autor:</p>

									<div>BHBVR</div>
								</li>

								<li>
									<p> Wymagane miejsce na dysku: </p>

									<div> 0 B </div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className={styles['right-box']}>
					<div className={styles['right-box__header']}>
						<p>Courses</p>
					</div>

					<div className={styles['right-box__body']}>
						<CourseBox />

						<CourseBox />

						<CourseBox />

						<CourseBox />

						<CourseBox />
					</div>
				</div>
			</div>
		</div>
	);
}

App.Layout = PublicLayout;

export default App;
