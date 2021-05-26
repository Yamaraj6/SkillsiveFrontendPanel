export const downloadTextFile = (content: string, name: string, contentType: string) => {
	const uri = contentType + content;
	const downloadLink = document.createElement('a');

	downloadLink.href = uri;
	downloadLink.download = name;

	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
};
