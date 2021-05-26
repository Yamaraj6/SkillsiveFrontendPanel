import styles from './SearchInput.module.scss';
import { SearchIcon } from 'assets/images/icons/SearchIcon';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { debounce } from 'lodash';

interface ISearchInputProps {
	onChange: (searchValue: string) => void;
	isLightTheme: boolean;
	className?: string;
	placeholder?: string;
}

function SearchInput({ onChange, isLightTheme, className, placeholder }: ISearchInputProps) {
	const { t } = useTranslation('app');

	return (
		<Input
			prefix={<SearchIcon />}
			placeholder={!placeholder ? t('search') : placeholder}
			className={cx(styles.search, className, { [styles['search--light-theme']]: isLightTheme })}
			onChange={e => debounce(onChange, 500)(e.target.value)}
		/>
	);
}

SearchInput.defaultProps = {
	isLightTheme: true,
	placeholder: null
};

export default SearchInput;
