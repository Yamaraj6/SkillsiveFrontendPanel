import ISvgProps from 'shared/interfaces/ISvgProps';

function LogoMobile({ className }: ISvgProps) {
	return <img className={className} src={require('assets/images/skillsive/logo/Logo_.svg')} />;
}

export default LogoMobile;
