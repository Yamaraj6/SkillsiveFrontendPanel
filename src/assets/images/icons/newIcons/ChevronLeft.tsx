import ISvgProps from 'shared/interfaces/ISvgProps';

function ChevronLeft({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='14.121' height='7.811' viewBox='0 0 14.121 7.811'>
			<defs>
				<style>{'.chevron-left{fill:none;stroke:#2e77ff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}'}</style>
			</defs>
			<path className='chevron-left' stroke='#2e77ff' d='M1402.778,509.23l6,6,6-6' transform='translate(-1401.717 -508.17)' />
		</svg>
	);
}

export default ChevronLeft;
