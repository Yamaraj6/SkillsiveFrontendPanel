interface ISvgProps {
	className?: string;
}

export function FilterIcon({ className }: ISvgProps) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
			<defs></defs>
			<path
				d='M15,25a1,1,0,0,1-.994-.884L14,24V9a1,1,0,0,1,1.993-.117L16,9V24A1,1,0,0,1,15,25Zm8-2a1,1,0,0,1-1-1V6a1,1,0,0,1,2,0V22A1,1,0,0,1,23,23ZM7,23a1,1,0,0,1-.994-.884L6,22V6a1,1,0,0,1,1.993-.117L8,6V22A1,1,0,0,1,7,23Z'
				transform='translate(-5 -5)'
				fill='#2e77ff'
				opacity='0.6'
			/>
			<path
				d='M16,19H14a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v3A1,1,0,0,1,16,19Zm8-2H22a1,1,0,0,1-.993-.884L21,16V12a1,1,0,0,1,.884-.993L22,11h2a1,1,0,0,1,.993.884L25,12v4a1,1,0,0,1-.884.993ZM8,17H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8a1,1,0,0,1,1,1v4A1,1,0,0,1,8,17Z'
				transform='translate(-5 -5)'
				fill='#2e77ff'
			/>
		</svg>
	);
}
