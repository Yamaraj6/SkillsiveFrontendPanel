interface ISvgProps {
	className?: string;
}

export function Create({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
			<defs>
				<style>
					{
						'.a,.b{fill:#fff;}.a{clip-rule:evenodd;}.c{opacity:0.404;clip-path:url(#a);}.d{clip-path:url(#b);}.e{clip-path:url(#c);}'
					}
				</style>
				<clipPath id='a'>
					<path className='a' d='M15-5A10,10,0,0,0,25-15,10,10,0,0,0,15-25,10,10,0,0,0,5-15,10,10,0,0,0,15-5Z' />
				</clipPath>
				<clipPath id='b'>
					<path className='b' d='M-999,1631H921V-314H-999Z' />
				</clipPath>
				<clipPath id='c'>
					<path
						className='a'
						d='M19.26-18.673a1,1,0,0,1,1.413-.067,1,1,0,0,1,.146,1.315l-.079.1-6.364,7a1,1,0,0,1-1.433.048l-3.636-3.5a1,1,0,0,1-.027-1.414,1,1,0,0,1,1.414-.027l2.895,2.786Z'
					/>
				</clipPath>
			</defs>
			<g transform='translate(-5 25)'>
				<g className='c'>
					<g className='d'>
						<path className='b' d='M0-30H30V0H0Z' />
					</g>
				</g>
				<g className='e'>
					<g className='d'>
						<path className='b' d='M4-24H26V-5H4Z' />
					</g>
				</g>
			</g>
		</svg>
	);
}
