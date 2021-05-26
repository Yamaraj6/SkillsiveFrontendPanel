import styles from './Autocomplete.module.scss';
import { AutoComplete as AntAutoComplete, Input } from 'antd';
import { useState } from 'react';
import { debounce } from 'lodash';
import { SearchIcon } from 'assets/images/icons/SearchIcon';
import cx from 'classnames';
import { IAutoCompleteValue } from 'shared/interfaces/IAutoComplete';

export interface IAutoCompleteProps {
	onSearch: (autoCompleteItem: string) => void;
	autoCompleteItems: IAutoCompleteValue[];
	onChange?: (id: number) => void;
	placeholder?: string;
	isLightTheme?: boolean;
	withIcon?: boolean;
	className?: string;
	dropdownClassName?: string;
}

function AutoComplete({
	onSearch,
	autoCompleteItems,
	onChange,
	placeholder,
	isLightTheme,
	withIcon,
	className,
	dropdownClassName
}: IAutoCompleteProps) {
	const [label, setLabel] = useState('');
	const [areOptionsVisible, setOptionsVisible] = useState<boolean>();

	const triggerChange = (_newValue: string, option: IAutoCompleteValue) => {
		if (_newValue) {
			setLabel(option.label);
			onChange(option.value);
		}
	};

	const onBeforeSearch = (value: string) => {
		if (value.length < 3) {
			setOptionsVisible(false);
		} else {
			setOptionsVisible(true);
			debounce(onSearch, 500)(value);
		}
	};

	return (
		<AntAutoComplete
			options={areOptionsVisible && autoCompleteItems}
			onSearch={onBeforeSearch}
			onChange={triggerChange}
			value={label}
			className={cx(styles.autocomplete, className, { [styles['autocomplete--light-theme']]: isLightTheme })}
			dropdownClassName={cx(styles.dropdown, dropdownClassName)}
		>
			<Input prefix={withIcon ? <SearchIcon /> : <></>} placeholder={placeholder} value={label} />
		</AntAutoComplete>
	);
}

AutoComplete.defaultProps = {
	isLightTheme: false,
	withIcon: false,
	onChange: () => {}
};

export default AutoComplete;
