interface ISvgProps {
	className?: string;
}

function Clock({ className }: ISvgProps) {
	return (
		<svg className={className} width='20' height='20' viewBox='0 0 20 20'>
			<defs>
				<style>{'.Clocka{fill:rgba(167,180,203,0.6);}.Clockb{fill:#16161f;}'}</style>
			</defs>
			<g transform='translate(-5 -4)'>
				<circle className='Clocka' cx='10' cy='10' r='10' transform='translate(5 4)' />
				<path
					className='Clockb'
					d='M1,0A1,1,0,0,1,2,1V5.586L4.207,7.793A1,1,0,0,1,2.793,9.207l-2.5-2.5A1,1,0,0,1,0,6V1A1,1,0,0,1,1,0Z'
					transform='translate(14 8)'
				/>
			</g>
		</svg>
	);
}

export default Clock;
