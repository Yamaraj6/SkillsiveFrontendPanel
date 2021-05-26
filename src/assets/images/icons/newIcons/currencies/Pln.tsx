import ISvgProps from 'shared/interfaces/ISvgProps';

function Pln({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='42' height='42' viewBox='0 0 42 42'>
			<defs>
				<style>{'.ZlotyA{fill:rgba(113,124,142,0.1);}.ZlotyB{fill:none;}.ZlotyC{isolation:isolate;}.ZlotyD{fill:#737c8b;}'}</style>
			</defs>
			<g transform='translate(-848 -1194)'>
				<g transform='translate(-500 -3706)'>
					<rect className='ZlotyA' width='42' height='42' rx='21' transform='translate(1348 4900)' />
				</g>
				<g transform='translate(141 117.107)'>
					<g transform='translate(719 1086.893)'>
						<rect className='ZlotyB' width='18' height='18' />
						<g className='ZlotyC' transform='translate(1.731 0)'>
							<path
								className='ZlotyD'
								d='M1168.237-80.155h8.173v1.95h-11.091v-1.756l7.708-10.24h-7.592v-1.975h10.588v1.691Z'
								transform='translate(-1165.319 96.205)'
							/>
							<path className='ZlotyD' d='M1181.691-80.038H1179.3v-18h2.389Z' transform='translate(-1167.152 98.038)' />
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

export default Pln;
