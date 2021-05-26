interface ISvgProps {
	className?: string;
}

export function DeleteIcon({ className }: ISvgProps) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' className={className}>
			<defs></defs>
			<path
				d='M.369,4.542A4.811,4.811,0,0,1,4.542.369,42.08,42.08,0,0,1,10,0a42.08,42.08,0,0,1,5.458.369,4.811,4.811,0,0,1,4.173,4.173A42.171,42.171,0,0,1,20,10a42.172,42.172,0,0,1-.369,5.458,4.81,4.81,0,0,1-4.173,4.173A42.073,42.073,0,0,1,10,20a42.073,42.073,0,0,1-5.458-.369A4.81,4.81,0,0,1,.369,15.458,42.172,42.172,0,0,1,0,10,42.171,42.171,0,0,1,.369,4.542Z'
				fill='#ff554e'
				opacity='0.3'
			/>
			<path
				d='M.293.293a1,1,0,0,1,1.414,0L4,2.586,6.293.293A1,1,0,0,1,7.707,1.707L5.414,4,7.707,6.293A1,1,0,0,1,6.293,7.707L4,5.414,1.707,7.707A1,1,0,0,1,.293,6.293L2.586,4,.293,1.707A1,1,0,0,1,.293.293Z'
				transform='translate(6 6)'
				fill='#ff554e'
			/>
		</svg>
	);
}
