interface ISvgProps {
	className?: string;
}

function FireExtinguisher({ className }: ISvgProps) {
	return (
		<svg className={className} width='48' height='48' viewBox='0 0 48 48'>
			<defs>
				<style>
					{
						'.FireExtinguisherA,.FireExtinguisherE{fill:#3c9cde;}.FireExtinguisherA,.FireExtinguisherB{clip-rule:evenodd;}.FireExtinguisherB,.g{fill:rgba(60,156,222,0.3);}.FireExtinguisherC{fill:rgba(60,156,222,0.1);}.FireExtinguisherD{clip-path:url(#FireExtinguisherA);}.FireExtinguisherF{clip-path:url(#FireExtinguisherB);}.FireExtinguisherH{fill:none;stroke:#3c9cde;stroke-linecap:round;stroke-width:2px;}.FireExtinguisherI{clip-path:url(#FireExtinguisherC);}.FireExtinguisherJ{clip-path:url(#FireExtinguisherD);}'
					}
				</style>
				<clipPath id='FireExtinguisherA'>
					<path
						className='FireExtinguisherA'
						d='M14.95-27a.95.95,0,0,1,.95.95v3.8a.95.95,0,0,1-.95.95.95.95,0,0,1-.95-.95v-3.8A.95.95,0,0,1,14.95-27Z'
						transform='translate(-14 27)'
					/>
				</clipPath>
				<clipPath id='FireExtinguisherB'>
					<path
						className='FireExtinguisherB'
						d='M14.7-22a5.7,5.7,0,0,1,5.7,5.7V-4.9A1.9,1.9,0,0,1,18.5-3H10.9A1.9,1.9,0,0,1,9-4.9V-16.3A5.7,5.7,0,0,1,14.7-22Z'
						transform='translate(-9 22)'
					/>
				</clipPath>
				<clipPath id='FireExtinguisherC'>
					<path
						className='FireExtinguisherA'
						d='M16.064-26.019l4.279-1.872a.95.95,0,0,1,1.251.49.95.95,0,0,1,.08.381v3.744a.95.95,0,0,1-.95.95.95.95,0,0,1-.381-.08l-4.279-1.872a.95.95,0,0,1-.489-1.251A.95.95,0,0,1,16.064-26.019Z'
						transform='translate(-15.495 27.971)'
					/>
				</clipPath>
				<clipPath id='FireExtinguisherD'>
					<path
						className='FireExtinguisherA'
						d='M8.95-4h11.4a.95.95,0,0,1,.95.95.95.95,0,0,1-.95.95H8.95A.95.95,0,0,1,8-3.05.95.95,0,0,1,8.95-4Z'
						transform='translate(-8 4)'
					/>
				</clipPath>
			</defs>
			<g transform='translate(-1017 -280)'>
				<rect className='FireExtinguisherC' width='48' height='48' rx='8' transform='translate(1017 280)' />
				<g transform='translate(1033.805 291)'>
					<g className='FireExtinguisherD' transform='translate(7.206 0.923)'>
						<path className='FireExtinguisherE' d='M9-32H20.4v15.2H9Z' transform='translate(-13.749 27.251)' />
					</g>
					<g className='FireExtinguisherF' transform='translate(2.456 5.672)'>
						<path className='FireExtinguisherG' d='M4-27H24.9V1.5H4Z' transform='translate(-8.749 22.251)' />
					</g>
					<g transform='translate(0 2.822)'>
						<path className='FireExtinguisherH' d='M0,3.8C.581,2.188,2.4,0,4.927,0H7.852' />
					</g>
					<g className='FireExtinguisherI' transform='translate(8.625)'>
						<path
							className='FireExtinguisherE'
							d='M10.495-17.828V-32.971H26.172v15.143Z'
							transform='translate(-15.244 28.222)'
						/>
					</g>
					<g className='j' transform='translate(1.506 22.769)'>
						<path className='FireExtinguisherE' d='M3-9H25.8V2.4H3Z' transform='translate(-7.749 4.251)' />
					</g>
				</g>
			</g>
		</svg>
	);
}

export default FireExtinguisher;
