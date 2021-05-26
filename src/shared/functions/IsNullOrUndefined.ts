export const isNullOrUndefined = (value: any, noInfo = '') => {
	const dataToShow = !value ? noInfo : value;
	return dataToShow;
};
