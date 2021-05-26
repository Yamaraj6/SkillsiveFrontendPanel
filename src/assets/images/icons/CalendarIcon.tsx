interface ISvgProps {
	className?: string;
}

export function CalendarIcon({ className }: ISvgProps) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' className={className}>
			<defs></defs>
			<g transform='translate(-5 -5)'>
				<path
					d='M4,1A1,1,0,0,1,6,1V2h8V1a1,1,0,0,1,2,0V2h1a3,3,0,0,1,3,3V17a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V5A3,3,0,0,1,3,2H4Z'
					transform='translate(5 5)'
					fill='#a7b4cb'
					opacity='0.4'
				/>
				<path d='M16,21H10a1,1,0,1,1,0-2h6a1,1,0,0,1,0,2Zm4-4H13a1,1,0,1,1,0-2h7a1,1,0,0,1,0,2Z' />
			</g>
		</svg>
	);
}
