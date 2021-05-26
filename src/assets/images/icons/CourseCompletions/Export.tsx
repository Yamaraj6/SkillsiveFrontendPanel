import ISvgProps from 'shared/interfaces/ISvgProps';

function Export({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='19.502' height='19.502' viewBox='0 0 19.502 19.502'>
			<defs>
				<style>{'.ExportA{fill:rgba(167,180,203,0.6);}.ExportB{fill:#0f171e;}'}</style>
			</defs>
			<g transform='translate(-1460 -161.774)'>
				<path
					className='ExportA'
					d='M23.845,8H10.438A2.237,2.237,0,0,0,8,10.438V25.064A2.237,2.237,0,0,0,10.438,27.5H25.064A2.242,2.242,0,0,0,27.5,25.064V11.909a.609.609,0,0,0-.178-.431L24.166,8.321Zm-.914,8.532H12.41c-.874,0-.753-.686-.753-.686V8H23.845v7.381C23.845,16.708,22.931,16.532,22.931,16.532Z'
					transform='translate(1452 153.774)'
				/>
				<rect className='ExportB' width='3.657' height='6.094' rx='1' transform='translate(1469.751 161.774)' />
			</g>
		</svg>
	);
}

export default Export;
