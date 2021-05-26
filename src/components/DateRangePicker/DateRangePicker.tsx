import styles from './DateRangePicker.module.scss';
import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';
import { CalendarIcon } from 'assets/images/icons/CalendarIcon';
import { useTranslation } from 'react-i18next';
import pl from 'antd/lib/date-picker/locale/pl_PL';
import en from 'antd/lib/date-picker/locale/en_US';

interface IDatePickerProps {
	defaultRange: [Moment, Moment];
	onDateChange(dates: { startDate: Moment; endDate: Moment }): void;
}

const { RangePicker } = DatePicker;

function DateRangePicker({ onDateChange, defaultRange }: IDatePickerProps) {
	const { t, i18n } = useTranslation(['app']);

	const chooseLanguage = (language: string) => {
		switch (language) {
			case 'pl':
				return pl;
			default:
				return en;
		}
	};

	return (
		<RangePicker
			suffixIcon={<CalendarIcon />}
			allowClear={false}
			format={'DD.MM.YYYY'}
			locale={chooseLanguage(i18n.language)}
			separator='>'
			ranges={{
				[t('today')]: [moment(), moment()],
				[t('thisMonth')]: [moment().startOf('month'), moment().endOf('month')]
			}}
			onChange={dates => onDateChange({ startDate: dates[0], endDate: dates[1] })}
			showTime={{ format: 'HH:mm' }}
			defaultValue={defaultRange}
			className={styles.picker}
		/>
	);
}

DateRangePicker.defaultProps = {
	defaultRange: [moment().subtract(1, 'year'), moment()]
};

export default DateRangePicker;
