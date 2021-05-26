import { DropDownArrow } from 'assets/images/icons/DropDownArrow';
import { Select as AntSelect } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './Select.module.scss';
import { useState } from 'react';
import cx from 'classnames';

export interface ISelect {
	translationKey?: string;
	placeholder: string;
	data: { name?: string; id: number }[];
	isLightTheme?: boolean;
	onChange?: (x?: any) => void;
	value?: number;
	className?: string;
	readOnly?: boolean;
	suffixIcon?: JSX.Element;
}

function Select({
	translationKey,
	placeholder,
	data,
	value,
	isLightTheme,
	onChange,
	readOnly,
	suffixIcon,
	className
}: ISelect): React.ReactElement {
	const { t } = useTranslation([`${translationKey}`]);
	const [isFocused, setIsFocused] = useState<boolean>(false);

	return (
		<AntSelect
			placeholder={placeholder}
			defaultValue={value}
			onChange={onChange}
			options={data?.map(option => ({
				value: option?.id,
				label: t(`${option?.name}`)
			}))}
			className={cx(styles.select, className, {
				[styles['select--active']]: isFocused,
				[styles['select--light-theme']]: isLightTheme,
				[styles['select--read-only']]: readOnly
			})}
			showSearch
			suffixIcon={suffixIcon}
			filterOption={(input, option) =>
				(option.label as string).toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
				(option.label as string).toLowerCase().indexOf(input.toLowerCase()) >= 0
			}
			onFocus={() => setIsFocused(prev => !prev)}
			onBlur={() => setIsFocused(prev => !prev)}
		/>
	);
}

Select.defaultProps = {
	onChange: () => {},
	value: undefined,
	className: '',
	readOnly: false,
	translationKey: '',
	suffixIcon: <DropDownArrow className={styles.icon} />
};

export default Select;
