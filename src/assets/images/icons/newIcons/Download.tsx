import ISvgProps from 'shared/interfaces/ISvgProps';

function Download({ className }: ISvgProps) {
	return <img className={className} src={require('assets/images/icons/download.svg')} />;
}

export default Download;
