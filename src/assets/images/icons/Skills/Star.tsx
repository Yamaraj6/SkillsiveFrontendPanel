interface ISvgProps {
	className?: string;
}

function Star({ className }: ISvgProps) {
	return (
		<svg className={className} width='30' height='30' viewBox='0 0 30 30'>
			<defs>
				<style>{'.Stara{fill:none;}.Starb{fill:rgba(167,180,203,0.6);}.Starc{fill:#16161f;}'}</style>
			</defs>
			<rect className='Stara' width='30' height='30' />
			<path
				className='Starb'
				d='M9.536.6a1,1,0,0,1,1.836,0l2.18,5.052a1,1,0,0,0,.841.6l5.591.432a1,1,0,0,1,.56,1.768l-4.2,3.471a1,1,0,0,0-.334,1.011L17.3,18.168a1,1,0,0,1-1.478,1.1l-4.86-2.861a1,1,0,0,0-1.015,0L5.087,19.27a1,1,0,0,1-1.478-1.1L4.9,12.939a1,1,0,0,0-.334-1.011L.365,8.457a1,1,0,0,1,.56-1.768l5.591-.432a1,1,0,0,0,.841-.6Z'
				transform='translate(4.546 5.524)'
			/>
			<path
				className='Starc'
				d='M3.843.316a.5.5,0,0,1,.93,0l.812,2.052a.5.5,0,0,0,.423.314l2.15.181a.5.5,0,0,1,.293.87L6.776,5.241a.5.5,0,0,0-.153.482l.5,2.226a.5.5,0,0,1-.758.531L4.578,7.33a.5.5,0,0,0-.54,0L2.246,8.48a.5.5,0,0,1-.758-.531l.5-2.226a.5.5,0,0,0-.153-.482L.166,3.733a.5.5,0,0,1,.293-.87l2.15-.181a.5.5,0,0,0,.423-.314Z'
				transform='translate(10.692 11)'
			/>
		</svg>
	);
}

export default Star;
