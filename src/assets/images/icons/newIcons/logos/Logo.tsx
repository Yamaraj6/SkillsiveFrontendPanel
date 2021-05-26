import ISvgProps from 'shared/interfaces/ISvgProps';

function Logo({ className }: ISvgProps) {
	return <img className={className} src={require('assets/images/skillsive/logo/Logo_vertical.svg')} />;
}

export default Logo;
