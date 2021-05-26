import ClientPanelLayout from 'layouts/ClientPanelLayout';
import styles from './CoursesCompletions.module.scss';
import FilterBar from 'components/FilterBar/FilterBar';
import Table from 'components/Table';
import { useTranslation } from 'react-i18next';
import columns from './utilities/columns';
import actions from './utilities/actions';
import MobileTable from 'components/MobileTable';
import { IMobileTable } from 'shared/interfaces/ITable';
import InfoBox from 'components/InfoBox';
import ItemsCarousel from 'react-items-carousel';
import { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import ArrowButton from 'components/ArrowButton/ArrowButton';

export interface ICourseCompletionSelector {
	Total: number;
	CourseCompletion: ICourseCompletion[];
}

export interface IInfoBox {
	startedCourses: number;
	finishedCourses: number;
	ratioOfFinishedToStarted: number;
	coursesStartedPerDay: number;
	averageTimeInCourse: number;
	averageScore: number;
}

export interface ICourseCompletion {
	courseUrl: string;
	userName: string;
	userId: number;
	progress: number;
	deviceUrl: string;
	companyName: string;
	started: Date;
	finished: Date;
	duration: string;
	language: string;
	id: number;
}

function CoursesCompletions() {
	const { t } = useTranslation(['courseCompletions']);
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 40;
	const currentWidth = useWindowWidth();

	const courseCompletions: ICourseCompletion[] = [
		{
			courseUrl: '',
			userName: 'Andrzej Kowalski',
			userId: 2133532,
			progress: 57,
			deviceUrl: '',
			companyName: 'Company Warsaw',
			started: new Date(),
			finished: new Date(),
			duration: '1h 13m 32s',
			language: 'Polish',
			id: 1
		},
		{
			courseUrl: '',
			userName: 'Andrzej Kowalski',
			userId: 2133532,
			progress: 57,
			deviceUrl: '',
			companyName: 'Company Warsaw',
			started: new Date(),
			finished: new Date(),
			duration: '1h 13m 32s',
			language: 'Polish',
			id: 2
		}
	];

	const getIconNumbers = (): number => {
		if (currentWidth > 1654) return 5;
		else if (currentWidth > 1410) return 4;
		else if (currentWidth > 947) return 3;
		else if (currentWidth > 600) return 2;
		else {
			return 1;
		}
	};

	return (
		<div className={styles.main}>
			<div className={styles['content-container']}>
				<div className={styles['filter-container']}>
					<FilterBar
						withAutoComplete={false}
						withDevices
						withCourses
						itemsTotal={2}
						onChangeFilter={console.log}
						placeholder={t('name')}
						className={styles['filter-bar']}
					/>
				</div>
				{currentWidth < 1800 ? (
					<div style={{ padding: `0 ${chevronWidth}px` }}>
						<div className={styles['infoBox-container']}>
							<ItemsCarousel
								requestToChangeActive={setActiveItemIndex}
								activeItemIndex={activeItemIndex}
								numberOfCards={getIconNumbers()}
								gutter={4}
								slidesToScroll
								leftChevron={<ArrowButton className={styles['arrow-back']} direction='back' />}
								rightChevron={<ArrowButton className={styles['arrow-right']} direction='next' />}
								outsideChevron
								chevronWidth={chevronWidth}
							>
								<InfoBox
									className={styles['infoBox-container__box']}
									placeholder={'Started Courses'}
									value={607}
									icon={
										<img src={require('assets/images/icons/Device/Statistics/StartedCourses.svg')} alt='Course Image' />
									}
								/>
								<InfoBox
									className={styles['infoBox-container__box']}
									placeholder={'Finished Courses'}
									value={607}
									icon={
										<img
											src={require('assets/images/icons/Device/Statistics/FinishedCourses.svg')}
											alt='Course Image'
										/>
									}
								/>
								<InfoBox
									className={styles['infoBox-container__special']}
									placeholder={'Ratio of Finished to Started'}
									value={607}
									icon={
										<img
											src={require('assets/images/icons/Device/Statistics/RatioOfFinishedCourses.svg')}
											alt='Course Image'
										/>
									}
								/>
								<InfoBox
									className={styles['infoBox-container__box']}
									placeholder={'Courses started per day'}
									value={607}
									icon={
										<img
											src={require('assets/images/icons/Device/Statistics/CoursesStartedPerDay.svg')}
											alt='Course Image'
										/>
									}
								/>
								<InfoBox
									className={styles['infoBox-container__box']}
									placeholder={'Averege time in course'}
									value={607}
									icon={
										<img
											src={require('assets/images/icons/Device/Statistics/AverageTimeInCourse.svg')}
											alt='Course Image'
										/>
									}
								/>
								<InfoBox
									className={styles['infoBox-container__box']}
									placeholder={'Average Score'}
									value={607}
									icon={
										<img src={require('assets/images/icons/Device/Statistics/AverageCourse.svg')} alt='Course Image' />
									}
								/>
							</ItemsCarousel>
						</div>
					</div>
				) : (
					<div className={styles['infoBox-container']}>
						<InfoBox
							className={styles['infoBox-container__box']}
							placeholder={'Started Courses'}
							value={607}
							icon={<img src={require('assets/images/icons/Device/Statistics/StartedCourses.svg')} alt='Course Image' />}
						/>
						<InfoBox
							className={styles['infoBox-container__box']}
							placeholder={'Finished Courses'}
							value={607}
							icon={<img src={require('assets/images/icons/Device/Statistics/FinishedCourses.svg')} alt='Course Image' />}
						/>
						<InfoBox
							className={styles['infoBox-container__special']}
							placeholder={'Ratio of Finished to Started'}
							value={607}
							icon={
								<img src={require('assets/images/icons/Device/Statistics/RatioOfFinishedCourses.svg')} alt='Course Image' />
							}
						/>
						<InfoBox
							className={styles['infoBox-container__box']}
							placeholder={'Courses started per day'}
							value={607}
							icon={
								<img src={require('assets/images/icons/Device/Statistics/CoursesStartedPerDay.svg')} alt='Course Image' />
							}
						/>
						<InfoBox
							className={styles['infoBox-container__box']}
							placeholder={'Averege time in course'}
							value={607}
							icon={<img src={require('assets/images/icons/Device/Statistics/AverageTimeInCourse.svg')} alt='Course Image' />}
						/>
						<InfoBox
							className={styles['infoBox-container__box']}
							placeholder={'Average Score'}
							value={607}
							icon={<img src={require('assets/images/icons/Device/Statistics/AverageCourse.svg')} alt='Course Image' />}
						/>
					</div>
				)}

				<h2>Last Course Completions</h2>

				<div className={styles['table-container']}>
					<Table<ICourseCompletion> data={courseCompletions} actions={actions()} columns={columns()}>
						{({ data, dropdown }: IMobileTable<ICourseCompletion>) => (
							<MobileTable<ICourseCompletion> data={data} columns={columns()} dropdown={dropdown} />
						)}
					</Table>
				</div>
			</div>
		</div>
	);
}

CoursesCompletions.Layout = ClientPanelLayout;

export default CoursesCompletions;
