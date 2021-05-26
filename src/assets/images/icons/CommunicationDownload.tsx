interface ISvgProps {
	className?: string;
}

export function CommunicationDownload({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='20' height='18' viewBox='0 0 20 18'>
			<defs>
				<style>{`.a{fill:#a7b4cb;opacity:0.6;}.b{fill:#16161f;}`}</style>
			</defs>
			<g transform='translate(-5 -6)'>
				<rect className='a' width='20' height='4' rx='1' transform='translate(5 20)' />
				<path
					className='b'
					d='M6.286,12.306l4.6-4.6a1,1,0,0,0-.7-1.7h-2.6v-5a.9.9,0,0,0-1-1h-2a.9.9,0,0,0-1,1v5H.986a1,1,0,0,0-.7,1.7l4.6,4.6A1,1,0,0,0,6.286,12.306Z'
					transform='translate(9.414 6)'
				/>
			</g>
		</svg>
	);
}
