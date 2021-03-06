import ISvgProps from 'shared/interfaces/ISvgProps';

function Emblem({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='29.138' height='29.863' viewBox='0 0 29.138 29.863'>
			<defs>
				<style>
					{
						'.a,.b{fill:url(#a);}.a,.c{clip-rule:evenodd;}.c,.d{fill:url(#c);}.e{clip-path:url(#e);}.f{clip-path:url(#f);}.g{clip-path:url(#h);}'
					}
				</style>
				<linearGradient id='a' x1='-0.057' y1='0.549' x2='0.925' y2='0.463' gradientUnits='objectBoundingBox'>
					<stop offset='0' stop-color='#ffdf98' />
					<stop offset='1' stop-color='#ffd257' />
				</linearGradient>
				<linearGradient id='c' x1='0.205' y1='0.517' x2='1.083' y2='0.419' gradientUnits='objectBoundingBox'>
					<stop offset='0' stop-color='#ffc400' />
					<stop offset='1' stop-color='#ff840a' />
				</linearGradient>
				<clipPath id='e'>
					<path
						className='a'
						d='M28.159-9.6A12.178,12.178,0,0,0,40.317-21.8,12.178,12.178,0,0,0,28.159-34,12.178,12.178,0,0,0,16-21.8,12.178,12.178,0,0,0,28.159-9.6Z'
						transform='translate(-16 34)'
					/>
				</clipPath>
				<clipPath id='f'>
					<path className='b' d='M-1425,2886.605H1493.068V-79H-1425Z' transform='translate(1425 79)' />
				</clipPath>
				<clipPath id='h'>
					<path
						className='c'
						d='M18.344-17.54a12.613,12.613,0,0,0,8.83,5.886l.441.06L22.448-6.409a1.516,1.516,0,0,1-1.985.124l-.142-.124L14.849-11.9a1.529,1.529,0,0,1-.123-1.992l.123-.143Zm21.278,0,3.5,3.507a1.529,1.529,0,0,1,.123,1.992l-.123.143L37.646-6.409a1.516,1.516,0,0,1-1.985.124l-.142-.124-5.167-5.184a12.609,12.609,0,0,0,9.032-5.571ZM29.778-30.018l1.233,3.128a.76.76,0,0,0,.643.479l3.267.276a.763.763,0,0,1,.445,1.326l-2.544,2.3a.764.764,0,0,0-.233.735l.767,3.394a.76.76,0,0,1-1.152.81l-2.723-1.755a.758.758,0,0,0-.821,0L25.937-17.57a.76.76,0,0,1-1.152-.81l.767-3.394a.764.764,0,0,0-.233-.735l-2.544-2.3a.763.763,0,0,1,.445-1.326l3.267-.276a.76.76,0,0,0,.643-.479l1.233-3.128A.759.759,0,0,1,29.778-30.018Z'
						transform='translate(-14.414 30.5)'
					/>
				</clipPath>
			</defs>
			<g className='e' transform='translate(2.41)'>
				<g className='f' transform='translate(-2190.071 -68.613)'>
					<g transform='translate(2220.057 68.843) rotate(94.981)'>
						<path className='b' d='M2.639,32.921,0,2.639,30.379-.008l2.639,30.282Z' />
					</g>
				</g>
			</g>
			<g className='g' transform='translate(0 5.337)'>
				<g className='f' transform='translate(-2187.661 -73.95)'>
					<g transform='matrix(-0.056, 0.998, -0.998, -0.056, 2219.126, 68.708)'>
						<path className='d' d='M1.7,32.05,0,1.7,30.447-.005l1.7,30.349Z' />
					</g>
				</g>
			</g>
		</svg>
	);
}

export default Emblem;
