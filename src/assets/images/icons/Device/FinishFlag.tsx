import ISvgProps from 'shared/interfaces/ISvgProps';

function FinishFlag({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='18.108' height='26.526' viewBox='0 0 18.108 26.526'>
			<defs>
				<style>
					{
						'.flaga,.flagB{fill:#3c9cde;}.flagA{clip-rule:evenodd;}.flagC{clip-path:url(#a);}.flagD{clip-path:url(#b);}.flagE{clip-path:url(#c);}.flagF{opacity:0.4;clip-path:url(#e);}'
					}
				</style>
				<clipPath id='flagA'>
					<path
						className='flagA'
						d='M791.053-372.158a1.105,1.105,0,0,1,1.105-1.105,1.105,1.105,0,0,1,1.105,1.105v24.316a1.105,1.105,0,0,1-1.105,1.105,1.105,1.105,0,0,1-1.105-1.105Z'
					/>
				</clipPath>
				<clipPath id='flagB'>
					<path className='flagB' d='M-250,0H1190V-1024H-250Z' />
				</clipPath>
				<clipPath id='flagC'>
					<path
						className='flagA'
						d='M799.895-367.737A1.105,1.105,0,0,1,801-368.842h7.054a1.105,1.105,0,0,1,.989,1.6l-2.269,4.538a1.1,1.1,0,0,0,0,.988l2.269,4.538a1.105,1.105,0,0,1-.989,1.6h-5.948a2.211,2.211,0,0,1-2.211-2.211Z'
					/>
				</clipPath>
				<clipPath id='flagE'>
					<path
						className='flagA'
						d='M793.263-371.053h6.632a2.211,2.211,0,0,1,2.211,2.211v9.947A1.105,1.105,0,0,1,801-357.789h-7.737Z'
					/>
				</clipPath>
			</defs>
			<g transform='translate(-801.053 -293.737)'>
				<g className='flagC' transform='translate(10 667)'>
					<g className='flagD'>
						<path className='flagB' d='M786.053-378.263h12.211v36.526H786.053Z' />
					</g>
				</g>
				<g className='flagE' transform='translate(10 667)'>
					<g className='flagD'>
						<path className='flagB' d='M794.895-373.842H814.16v23.263H794.895Z' />
					</g>
				</g>
				<g className='flagF' transform='translate(10 667)'>
					<g className='flagD'>
						<path className='flagB' d='M788.263-376.053h18.842v23.263H788.263Z' />
					</g>
				</g>
			</g>
		</svg>
	);
}

export default FinishFlag;
