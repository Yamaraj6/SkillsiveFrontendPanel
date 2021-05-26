import { Language } from 'shared/enums';

const getCountryFlag = (countryId: number): string => {
	switch (countryId) {
		case Language.PL:
			return 'Polish';
		case Language.DE:
			return 'German';
		case Language.EN:
			return 'English';
		case Language.FR:
			return 'French';
		case Language.ES:
			return 'Spanish';
		case Language.IT:
			return 'Italian';
		case Language.RU:
			return 'Russian';
		case Language.NL:
			return 'Dutch';
		case Language.EL:
			return 'Greek';
	}
};

export default getCountryFlag;
