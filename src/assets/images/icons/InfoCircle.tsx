interface ISvgProps {
	className?: string;
}

export function InfoCircle({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
			<defs>
				<style>{`.a{fill:#a7b4cb;opacity:0.6;}.b{fill:#16161f;}`}</style>
			</defs>
			<g transform='translate(-5 -5)'>
				<circle className='a' cx='10' cy='10' r='10' transform='translate(5 5)' />
				<path className='b' d='M15,20a1,1,0,0,1-1-1V15a1,1,0,0,1,2,0v4A1,1,0,0,1,15,20Zm0-8a1,1,0,1,1,1-1A1,1,0,0,1,15,12Z' />
			</g>
		</svg>
	);
}
