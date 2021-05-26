import ClientPanelLayout from 'layouts/ClientPanelLayout';
import InfoBox from 'components/InfoBox';
import styles from './Statistics.module.scss';

export interface IStatisticsSelector {
	Total: number;
	Devices: IStatisticsData[];
}

export interface IStatisticsData {
	id: number;
}

export interface IStatisticsData {
	id: number;
}

function Statistics() {
	return (
		<div className={styles['main']}>
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
					icon={<img src={require('assets/images/icons/Device/Statistics/RatioOfFinishedCourses.svg')} alt='Course Image' />}
				/>
				<InfoBox
					className={styles['infoBox-container__box']}
					placeholder={'Courses started per day'}
					value={607}
					icon={<img src={require('assets/images/icons/Device/Statistics/CoursesStartedPerDay.svg')} alt='Course Image' />}
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
		</div>
	);
}

Statistics.Layout = ClientPanelLayout;

export default Statistics;
