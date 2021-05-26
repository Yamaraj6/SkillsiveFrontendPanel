import { DropDownArrow } from 'assets/images/icons/DropDownArrow';
import { Select as AntSelect } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './MultiSelect.module.scss';
import { useState } from 'react';
import cx from 'classnames';

export interface IMultiSelect {
	translationKey?: string;
	placeholder?: string;
	data: { Name?: string; Id: number }[];
	isLightTheme?: boolean;
	onChange?: () => void;
	value?: number[];
}

function MultiSelect({ translationKey, placeholder, data, value, isLightTheme, onChange }: IMultiSelect): React.ReactElement {
	const { t } = useTranslation([`${translationKey}`]);
	const [isFocused, setIsFocused] = useState<boolean>(false);

	return (
		<AntSelect
			mode='multiple'
			placeholder={placeholder}
			defaultValue={value}
			onChange={onChange}
			options={data?.map(option => ({
				value: option?.Id,
				label: t(`${option?.Name}`)
			}))}
			className={cx(styles.select, {
				[styles['select--active']]: isFocused,
				[styles['select--light-theme']]: isLightTheme
			})}
			showSearch
			suffixIcon={<DropDownArrow className={styles.icon} />}
			filterOption={(input, option) =>
				(option.label as string).toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
				(option.label as string).toLowerCase().indexOf(input.toLowerCase()) >= 0
			}
			onFocus={() => setIsFocused(prev => !prev)}
			onBlur={() => setIsFocused(prev => !prev)}
		/>
	);
}

MultiSelect.defaultProps = {
	onChange: () => {},
	value: undefined
};

export default MultiSelect;
