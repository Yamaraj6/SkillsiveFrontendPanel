import ISvgProps from 'shared/interfaces/ISvgProps';

function Euro({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='42' height='42' viewBox='0 0 42 42'>
			<defs>
				<style>{'.EuroA{fill:rgba(113,124,142,0.1);}.EuroB{fill:none;}.EuroC{isolation:isolate;}.EuroD{fill:#737c8b;}'}</style>
			</defs>
			<g transform='translate(-848 -1026)'>
				<g transform='translate(-500 -3874)'>
					<rect className='EuroA' width='42' height='42' rx='21' transform='translate(1348 4900)' />
				</g>
				<g transform='translate(141 30)'>
					<g transform='translate(719 1008.001)'>
						<rect className='EuroB' width='18' height='18' transform='translate(0 0)' />
						<g className='EuroC' transform='translate(2.197)'>
							<path
								className='EuroD'
								d='M1175.781-165.681h-5.09a5.214,5.214,0,0,0,1.246,3.6,4.433,4.433,0,0,0,3.38,1.26,9.952,9.952,0,0,0,2.891-.409l.265,1.935a14.252,14.252,0,0,1-3.182.363,7.285,7.285,0,0,1-5.176-1.762,6.727,6.727,0,0,1-1.97-4.987h-2.36v-1.492h2.36v-1.648h-2.36v-1.5h2.36a6.68,6.68,0,0,1,2.023-4.88,7.283,7.283,0,0,1,5.11-1.726,15.978,15.978,0,0,1,3.2.371l-.265,1.939a10.307,10.307,0,0,0-2.9-.421,4.417,4.417,0,0,0-3.347,1.223,5.128,5.128,0,0,0-1.253,3.493h5.077v1.5h-5.09v1.648h5.09Z'
								transform='translate(-1165.785 176.931)'
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

export default Euro;
