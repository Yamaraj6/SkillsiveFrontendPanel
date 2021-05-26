import ISvgProps from 'shared/interfaces/ISvgProps';

function GraduationCap({ className }: ISvgProps) {
	return (
		<svg className={className} width='22.019' height='20.253' viewBox='0 0 22.019 20.253'>
			<defs>
				<style>.{'GraduationCapa{fill:rgba(60,156,222,0.3);}.GraduationCapb{fill:#3c9cde;}'}</style>
			</defs>
			<path
				className='GraduationCapa'
				d='M7.532,4.108a1.484,1.484,0,0,1-1.369,0L.342,0A7.875,7.875,0,0,0,0,2.282a6.847,6.847,0,0,0,13.695,0A7.875,7.875,0,0,0,13.352,0Z'
				transform='translate(3.752 11.123)'
			/>
			<path
				className='GraduationCapb'
				d='M9.915.167.557,6.787a1.027,1.027,0,0,0,0,1.826l9.358,6.619a1.484,1.484,0,0,0,1.369,0L17.9,10.553a1.141,1.141,0,0,1,1.826.913v4.223a1.027,1.027,0,0,0,1.141,1.141h0a1.027,1.027,0,0,0,1.141-1.141V8.27a1.369,1.369,0,0,0-.456-.913L11.284.167a1.484,1.484,0,0,0-1.369,0Z'
			/>
		</svg>
	);
}

export default GraduationCap;
