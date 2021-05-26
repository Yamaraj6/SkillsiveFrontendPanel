import ISvgProps from 'shared/interfaces/ISvgProps';

function Times({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='15.028' height='15.028' viewBox='0 0 15.028 15.028'>
			<g transform='translate(-182.545 -174.854)'>
				<g transform='translate(182.545 174.855)'>
					<g transform='translate(0 13.693) rotate(-45)'>
						<path
							className='a'
							d='M18.422,1.887H.944A.944.944,0,0,1,.944,0H18.422a.944.944,0,0,1,0,1.887Z'
							transform='translate(0 0)'
						/>
					</g>
					<g transform='translate(1.335 0) rotate(45)'>
						<path
							className='a'
							d='M18.422,1.887H.944A.944.944,0,0,1,.944,0H18.422a.944.944,0,0,1,0,1.887Z'
							transform='translate(0 0)'
						/>
					</g>
				</g>
			</g>
		</svg>
	);
}

export default Times;
