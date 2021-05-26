import ISvgProps from 'shared/interfaces/ISvgProps';

function Delivery({ className }: ISvgProps) {
	return <img className={className} src={require('assets/images/icons/delivery.svg')} alt='delivery' />;
}

export default Delivery;
