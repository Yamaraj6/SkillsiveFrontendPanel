interface ISvgProps {
	className?: string;
}

function Checkmark({ className }: ISvgProps) {
	return (
		<svg className={className} width='20.145' height='16.116' viewBox='0 0 20.145 16.116'>
			<defs>
				<style>{'.Checkmarka{fill:#fff;}'}</style>
			</defs>
			<path
				className='Checkmarka'
				d='M2.366,15.643A1.343,1.343,0,1,1,.32,13.9L11.735.473A1.343,1.343,0,0,1,13.651.339l6.043,5.372a1.343,1.343,0,1,1-1.784,2.008l-5.017-4.46Z'
				transform='translate(20.145 16.116) rotate(180)'
			/>
		</svg>
	);
}

export default Checkmark;
