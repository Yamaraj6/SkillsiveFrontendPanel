interface ISvgProps {
	className?: string;
}

function Checkbox({ className }: ISvgProps) {
	return (
		<svg className={className} width='20' height='20' viewBox='0 0 20 20'>
			<defs>
				<style>
					{
						'.Checkboxa,.Checkboxe{fill:rgba(167,180,203,0.6);}.Checkboxa,.Checkboxb{clip-rule:evenodd;}.Checkboxb,.Checkboxc{fill:#0f171e;}.Checkboxd{clip-path:url(#Checkboxa);}.Checkboxf{clip-path:url(#Checkboxb);}.Checkboxg{clip-path:url(#Checkboxc);}'
					}
				</style>
				<clipPath id='Checkboxa'>
					<path
						className='Checkboxa'
						d='M54.369-68.458a4.811,4.811,0,0,1,4.173-4.173A42.09,42.09,0,0,1,64-73a42.092,42.092,0,0,1,5.458.369,4.811,4.811,0,0,1,4.173,4.173A42.081,42.081,0,0,1,74-63a42.083,42.083,0,0,1-.369,5.458,4.811,4.811,0,0,1-4.173,4.173A42.083,42.083,0,0,1,64-53a42.081,42.081,0,0,1-5.458-.369,4.811,4.811,0,0,1-4.173-4.173A42.09,42.09,0,0,1,54-63,42.088,42.088,0,0,1,54.369-68.458Z'
						transform='translate(-54 73)'
					/>
				</clipPath>
				<clipPath id='Checkboxb'>
					<path
						className='Checkboxb'
						d='M28.26-27.673a1,1,0,0,1,1.413-.067,1,1,0,0,1,.146,1.315l-.079.1-6.364,7a1,1,0,0,1-1.433.048l-3.636-3.5a1,1,0,0,1-.027-1.414,1,1,0,0,1,1.414-.027l2.895,2.786Z'
					/>
				</clipPath>
				<clipPath id='Checkboxc'>
					<path className='Checkboxc' d='M-1653,620H267V-460H-1653Z' />
				</clipPath>
			</defs>
			<g transform='translate(1409 7322.442)'>
				<g transform='translate(-1409 -7323.558)'>
					<g className='Checkboxd' transform='translate(0 1.116)'>
						<path className='Checkboxe' d='M49-78H79v30H49Z' transform='translate(-54 73)' />
					</g>
				</g>
				<g className='Checkboxf' transform='translate(-1423 -7289)'>
					<g className='Checkboxg'>
						<path className='Checkboxc' d='M13-33H35v19H13Z' />
					</g>
				</g>
			</g>
		</svg>
	);
}

export default Checkbox;
