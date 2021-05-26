import ISvgProps from 'shared/interfaces/ISvgProps';

function Check({ className }: ISvgProps) {
	return <img src={require('assets/images/icons/Check.svg')} alt='Check' className={className} />;
}

export default Check;
