import Select from 'components/Select';
import { useTranslation } from 'react-i18next';
import styles from './CoursesSelect.module.scss';
import { GraduationCap } from 'assets/images/icons/Search';
import cx from 'classnames';
import { useState } from 'react';
import { ChevronDown } from 'assets/images/icons/newIcons';

interface ICoursesSelect {
	className?: string;
	withSuffics?: boolean;
}

function CoursesSelect({ className, withSuffics }: ICoursesSelect): React.ReactElement {
	const { t } = useTranslation('filters');
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const data = [
		{ id: 1, name: 'course1' },
		{ id: 2, name: 'course2' }
	];

	return (
		<div className={styles['select-container']}>
			<Select
				placeholder={t('allCourses')}
				data={data}
				className={cx(className, styles.select, { [styles['no-icon']]: !withSuffics })}
				suffixIcon={<ChevronDown className={cx(styles['dropdown-icon'], { [styles['dropdown-icon--active']]: isFocused })} />}
			/>

			<GraduationCap className={styles.icon} />
		</div>
	);
}

CoursesSelect.defaultProps = {
	className: '',
	withSuffics: true
};

export default CoursesSelect;
