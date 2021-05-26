import ClientPanelLayout from 'layouts/ClientPanelLayout';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Device.module.scss';
import { Button, Form } from 'antd';
import { Trash } from 'assets/images/icons/Device';
import { useTranslation } from 'react-i18next';
import ApplicationOnDevice from './components/application-on-device/ApplicationOnDevice';
import LastCourses from './components/last-courses/LastCourses';
import Statistics from './components/statistics/Statistics';
import { Device as DeviceImage } from 'assets/images/icons/Device';
import Select from 'components/Select/Select';
import cx from 'classnames';
import FilterBar from 'components/FilterBar';
import NameSetupModal from './components/modals/NameSetupModal';
import NumberSetupModal from './components/modals/NumberSetupModal';
import ColorSetupModal from './components/modals/ColorSetupModal';

function Device() {
	const { t } = useTranslation(['devices']);
	const router = useRouter();
	const { id } = router.query;
	const [currentTab, setTab] = useState<number>(0);
	const [currentModalOpen, setModalOpen] = useState<number>(null);
	const setModalSetupData = data => {
		console.log(data);
		setModalOpen(null);
	};

	return (
		<div className={styles.main}>
			<div className={styles['device-container']}>
				<div className={styles['device-container__head-series']}>
					<div>
						<p>1H3763O1781023</p>

						<span className={cx(styles['status-box'], styles['status-box--active'])}>Active</span>
					</div>
				</div>

				<div className={styles['device-container__header']}>
					<DeviceImage className={styles.googles} />

					<div className={styles['info-box']}>
						<h2 onClick={() => setModalOpen(0)}>COMPANY WARSAW</h2>

						<div onClick={() => setModalOpen(1)} className={styles['info-box__device-number']}>
							12
						</div>

						<div onClick={() => setModalOpen(2)} className={styles['info-box__device-color']}></div>
					</div>
				</div>

				<div className={styles['device-container__info']}>
					<div>
						<span>LAST USED PIN</span> <div className={styles['number-value']}>2324</div>
					</div>

					<div>
						<span>SUBSCRIPTIONS</span> <div className={styles['type-value']}>Standard</div>
					</div>

					<div>
						<span>ILOSC GOGLI</span>

						<div className={styles['range-value']}>
							<span>3</span>

							<span>/10</span>
						</div>
					</div>
				</div>

				<div className={styles['device-container__remote']}>
					<div className={styles['remote-headline']}>
						<h2>Remote Control</h2> <span className={cx(styles['status-box'], styles['status-box--online'])}>Online</span>
					</div>
					<Form requiredMark={false} layout='vertical' onFinish={console.log}>
						<div className={styles['input-container']}>
							<div className={styles['input-container__select']}>
								<img src={require('assets/images/icons/Device/CourseIcon.webp')} alt='Course Image' />

								<Form.Item
									className={styles['select-form-item']}
									name={'CurrentRunningCourse'}
									label={'Current Running Course'}
								>
									<Select
										className={styles.select}
										data={[{ name: 'First Aid - BLS and AED COVID-19', id: 1 }]}
										placeholder={'Current active application'}
									/>
								</Form.Item>
							</div>

							<div className={styles['input-container__select']}>
								<img src={require('assets/images/icons/Device/CourseIcon.webp')} alt='Course Image' />

								<Form.Item
									className={styles['select-form-item']}
									name={'CurrentRunningCourse'}
									label={'Current Running Course'}
								>
									<Select
										className={styles.select}
										data={[{ name: 'AED', id: 1 }]}
										placeholder={'Current running course'}
									/>
								</Form.Item>
							</div>
						</div>

						<Form.Item className={styles['submit-container']}>
							<Button
								icon={<img src={require('assets/images/icons/Device/finish.svg')} />}
								className={cx(styles['button'], styles['button__finish'])}
								htmlType='submit'
							>
								{t('finish')}
							</Button>
						</Form.Item>
					</Form>
				</div>

				<Button
					icon={<Trash />}
					className={cx(styles['button'], styles['button__delete'])}
					onClick={() => console.log('delete')}
					type={'default'}
				>
					{t('delete')}
				</Button>
			</div>

			<div className={styles['content-container']}>
				<div>
					<div className={styles['content-container__buttons']}>
						<Button
							className={cx(styles['content-button'], { [styles['content-button--active']]: currentTab === 0 })}
							onClick={() => setTab(0)}
						>
							{t('applicationOnDevice')}
						</Button>

						<Button
							className={cx(styles['content-button'], { [styles['content-button--active']]: currentTab === 1 })}
							onClick={() => setTab(1)}
						>
							{t('lastCourse')}
						</Button>

						<Button
							className={cx(styles['content-button'], { [styles['content-button--active']]: currentTab === 2 })}
							onClick={() => setTab(2)}
						>
							{t('statistics')}
						</Button>
					</div>

					<FilterBar
						className={styles.pager}
						withDatePicker={false}
						withAutoComplete={false}
						itemsTotal={2}
						onChangeFilter={console.log}
						placeholder={t('name')}
						withSearch={false}
					/>
				</div>

				<div className={styles['table-container']}>
					{currentTab === 0 ? <ApplicationOnDevice /> : currentTab === 1 ? <LastCourses /> : currentTab === 2 && <Statistics />}
				</div>
			</div>

			{currentModalOpen === 0 ? (
				<NameSetupModal setModalClose={() => setModalOpen(null)} setValues={data => setModalSetupData(data)} />
			) : currentModalOpen === 1 ? (
				<NumberSetupModal setModalClose={() => setModalOpen(null)} setValues={data => setModalSetupData(data)} />
			) : (
				currentModalOpen === 2 && <ColorSetupModal setModalClose={() => setModalOpen(null)} />
			)}
		</div>
	);
}

Device.Layout = ClientPanelLayout;

export default Device;
