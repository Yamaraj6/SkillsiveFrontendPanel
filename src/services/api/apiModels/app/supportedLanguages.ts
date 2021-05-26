import { CountryCode, Language } from 'shared/enums';

export interface ISupportedLanguageType {
	Name: string;
	Id: number;
}

export const supportedLanguages: ISupportedLanguageType[] = [
	{ Name: CountryCode.EN, Id: Language.EN },
	{ Name: CountryCode.PL, Id: Language.PL },
	{ Name: CountryCode.DE, Id: Language.DE },
	{ Name: CountryCode.IT, Id: Language.IT },
	{ Name: CountryCode.ES, Id: Language.ES },
	{ Name: CountryCode.FR, Id: Language.FR },
	{ Name: CountryCode.RU, Id: Language.RU },
	{ Name: CountryCode.NL, Id: Language.NL },
	{ Name: CountryCode.EL, Id: Language.EL }
];
