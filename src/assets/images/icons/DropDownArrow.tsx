interface ISvgProps {
	className?: string;
}

export function DropDownArrow({ className }: ISvgProps) {
	return (
		<svg version='1.1' id='arrow_1_' x='0px' y='0px' viewBox='0 0 512 512' className={className}>
			<path
				id='arrow'
				d='M212.8,414.4L15.3,184c-31.7-36.9-5.4-94,43.2-94h395c48.7,0,74.9,57.1,43.2,94L299.2,414.4
        C276.5,440.9,235.5,440.9,212.8,414.4z'
			/>
		</svg>
	);
}
