import ISvgProps from 'shared/interfaces/ISvgProps';

function Bag({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='42' height='42' viewBox='0 0 42 42'>
			<defs>
				<style>{'.a{fill:rgba(113,124,142,0.1);}.b{fill:#717c8e;}'}</style>
			</defs>
			<g transform='translate(-946 -663)'>
				<g transform='translate(913 663)'>
					<rect className='a' width='42' height='42' rx='21' transform='translate(33)' />
				</g>
				<g transform='translate(813.145 468.788)'>
					<path
						className='b'
						d='M162.6,221.124l-1.676-10.839a1.592,1.592,0,0,0-1.606-1.325H157.76v-1.078a3.912,3.912,0,0,0-7.806,0v1.078H148.4a1.593,1.593,0,0,0-1.606,1.325l-1.676,10.839a2.88,2.88,0,0,0,.674,2.315,3.282,3.282,0,0,0,2.505,1.125H159.42a3.285,3.285,0,0,0,2.506-1.125A2.879,2.879,0,0,0,162.6,221.124Zm-11.145-13.242a2.419,2.419,0,0,1,4.806,0v1.078h-4.806Zm9.333,14.581a1.788,1.788,0,0,1-1.367.6H148.293a1.788,1.788,0,0,1-1.367-.6,1.361,1.361,0,0,1-.329-1.109l1.675-10.84a.142.142,0,0,1,.124-.054h1.558v3.079a.75.75,0,0,0,1.5,0V210.46h4.806v3.079a.75.75,0,0,0,1.5,0V210.46h1.557a.142.142,0,0,1,.124.054l1.676,10.84A1.365,1.365,0,0,1,160.787,222.463Z'
					/>
				</g>
			</g>
		</svg>
	);
}

export default Bag;
