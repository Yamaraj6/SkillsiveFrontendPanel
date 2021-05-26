import { Language } from 'shared/enums';

const getCountryFlag = (countryId: number): JSX.Element => {
	switch (countryId) {
		case Language.PL:
			return <img src={require('assets/images/flags/pl.webp')} alt='Poland flag' />;
		case Language.DE:
			return <img src={require('assets/images/flags/de.webp')} alt='Germany flag' />;
		case Language.EN:
			return <img src={require('assets/images/flags/us.webp')} alt='USA flag' />;
		case Language.FR:
			return <img src={require('assets/images/flags/fr.webp')} alt='France flag' />;
		case Language.ES:
			return <img src={require('assets/images/flags/es.webp')} alt='Span flag' />;
		case Language.IT:
			return <img src={require('assets/images/flags/it.webp')} alt='Italy flag' />;
		case Language.RU:
			return <img src={require('assets/images/flags/nl.webp')} alt='Netherlands flag' />;
		case Language.NL:
			return <img src={require('assets/images/flags/ru.webp')} alt='Russia flag' />;
		case Language.EL:
			return <img src={require('assets/images/flags/el.webp')} alt='Greek flag' />;
	}
};

export default getCountryFlag;
