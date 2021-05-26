import Select from 'components/Select';
import { useTranslation } from 'react-i18next';
import styles from './PlanSelect.module.scss';
import { GraduationCap } from 'assets/images/icons/Search';
import cx from 'classnames';
import { useState } from 'react';
import { ChevronDown } from 'assets/images/icons/newIcons';

interface IPlanSelect {
	className?: string;
	withSuffics?: boolean;
}

function PlanSelect({ className, withSuffics }: IPlanSelect): React.ReactElement {
	const { t } = useTranslation('filters');
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const data = [
		{ id: 1, name: 'plan1' },
		{ id: 2, name: 'plan2' }
	];

	return (
		<div className={styles['select-container']}>
			<Select
				placeholder={t('allPlans')}
				data={data}
				className={cx(className, styles.select, { [styles['no-icon']]: !withSuffics })}
				suffixIcon={<ChevronDown className={cx(styles['dropdown-icon'], { [styles['dropdown-icon--active']]: isFocused })} />}
			/>

			<GraduationCap className={styles.icon} />
		</div>
	);
}

PlanSelect.defaultProps = {
	className: '',
	withSuffics: true
};

export default PlanSelect;
