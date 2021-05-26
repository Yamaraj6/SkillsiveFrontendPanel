import ISvgProps from 'shared/interfaces/ISvgProps';

function Key({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='20.006' height='11' viewBox='0 0 20.006 11'>
			<defs>
				<style>{'.a{fill:#A7B4CB;opacity:0.6;}.b{fill:#0f171e;}'}</style>
			</defs>
			<path
				className='a'
				d='M9.4.006H0A5.483,5.483,0,0,1,0,4H2.4V7a.9.9,0,0,0,1,1h2a.9.9,0,0,0,1-1V4h3a.9.9,0,0,0,1-1V1a.9.9,0,0,0-1-1Z'
				transform='translate(9.6 3)'
			/>
			<circle className='b' cx='5' cy='5' r='5' />
		</svg>
	);
}

export default Key;
