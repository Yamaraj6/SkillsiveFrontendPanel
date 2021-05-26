export const download = (response: Blob, fileName: string): void => {
	const url = window.URL.createObjectURL(new Blob([response]));
	const link = document.createElement('a');

	link.href = url;
	link.setAttribute('download', `${fileName}.pdf`);
	document.body.appendChild(link);
	link.click();
};
