import { Color } from 'services/api/apiModels/devices/devices';

const getColor = color => {
	switch (color) {
		case Color.NO_COLOR:
			return '#E5E4E2';
		case Color.BLACK:
			return '#000000';
		case Color.GREY:
			return '#808080';
		case Color.SILVER:
			return '#C0C0C0';
		case Color.WHITE:
			return '#FFFFFF';
		case Color.BURGUNDY:
			return '#800000';
		case Color.RED:
			return '#E21E13';
		case Color.BROWN:
			return '#964B00';
		case Color.ORANGE:
			return '#CC5D2B';
		case Color.GOLD:
			return '#FFD700';
		case Color.YELLOW:
			return '#F9E04B';
		case Color.GREEN:
			return '#7CFC00';
		case Color.DARK_GREEN:
			return '#326647';
		case Color.SEA_BLUE:
			return '#30D5C8';
		case Color.BLUE:
			return '#007FFF';
		case Color.NAVY_BLUE:
			return '#19247C';
		case Color.PURPLE:
			return '#660066';
		case Color.PINK:
			return '#DBB0EF';
		default:
			return '#E5E4E2';
	}
};

export default getColor;
