import { Select } from 'antd';
import styles from './LanguageSelect.module.scss';
import cx from 'classnames';
import { useState } from 'react';
import { ChevronDown } from 'assets/images/icons/newIcons';
import { ISupportedLanguageType, supportedLanguages } from 'services/api/apiModels/app';
import getCountryFlag from './utilities/getCountryFlag';
import { useTranslation } from 'react-i18next';
import Cookie from 'js-cookie';
import Constants from 'shared/Constants';
import getCountryName from './utilities/getCountryName';
import { useRouter } from 'next/router';

interface ILanguageSelectProps {
	className?: string;
	onSelect?: () => void;
}

function LanguageSelect({ className }: ILanguageSelectProps): JSX.Element {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const { i18n } = useTranslation();
	const router = useRouter();

	const handleLanguageChange = (selectedLanguageId: number) => {
		const selectedLanguage: string = supportedLanguages.find(lang => lang.Id === selectedLanguageId)?.Name;

		i18n.changeLanguage(selectedLanguage);
		Cookie.set(Constants.NEXT_LOCALE, selectedLanguage);
		router.reload();
	};

	return (
		<div className={cx(styles.box, className)}>
			<Select
				defaultValue={supportedLanguages.find((lang: ISupportedLanguageType) => i18n.language.includes(lang.Name))?.Id}
				className={styles.select}
				suffixIcon={<ChevronDown className={cx(styles['dropdown-icon'], { [styles['dropdown-icon--active']]: isFocused })} />}
				dropdownClassName={styles.dropdown}
				onFocus={() => setIsFocused(prev => !prev)}
				onBlur={() => setIsFocused(prev => !prev)}
				onChange={handleLanguageChange}
			>
				{supportedLanguages.map(language => (
					<Select.Option value={language.Id} key={language.Id}>
						<div className={styles.option}>
							<span className={styles['option__img']}>{getCountryFlag(language.Id)}</span>
							<span className={styles['option__text']}>{getCountryName(language.Id)}</span>
						</div>
					</Select.Option>
				))}
			</Select>
		</div>
	);
}

LanguageSelect.defaultProps = {
	className: '',
	onSelect: () => {}
};

export default LanguageSelect;
