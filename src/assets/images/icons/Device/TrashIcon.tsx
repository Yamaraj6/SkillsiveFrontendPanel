import ISvgProps from 'shared/interfaces/ISvgProps';

function Device({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
			<defs>
				<style>{'.trashA{fill:#a7b4cb;opacity:0.6;}.trashB{fill:#16161f;}'}</style>
			</defs>
			<g transform='translate(-1143 -656)'>
				<path
					className='trashA'
					d='M0,14.555V0H16V14.555a2.248,2.248,0,0,1-.812,1.706A2.7,2.7,0,0,1,13.313,17H2.688a2.7,2.7,0,0,1-1.875-.739A2.248,2.248,0,0,1,0,14.555Z'
					transform='translate(1145 659)'
				/>
				<path className='trashB' d='M20,1.313V4H0V1.313H4.966L6.443,0h7.114l1.477,1.313Z' transform='translate(1143 656)' />
			</g>
		</svg>
	);
}

export default Device;
