interface ISvgProps {
	className?: string;
}

export function FbIcon({ className }: ISvgProps) {
	return (
		<svg viewBox='0 0 9 18' xmlns='http://www.w3.org/2000/svg' className={className}>
			<path
				d='M9 0V3.6H7.2C6.579 3.6 6.3 4.329 6.3 4.95V7.2H9V10.8H6.3V18H2.7V10.8H0V7.2H2.7V3.6C2.7 2.64522 3.07928 1.72955 3.75442 1.05442C4.42955 0.379285 5.34522 0 6.3 0L9 0Z'
				fill='white'
			/>
		</svg>
	);
}
