import ISvgProps from 'shared/interfaces/ISvgProps';

function Funt({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='42' height='42' viewBox='0 0 42 42'>
			<defs>
				<style>{'.FuntA{fill:rgba(113,124,142,0.1);}.FuntB{fill:none;}.FuntC{isolation:isolate;}.FuntD{fill:#737c8b;}'}</style>
			</defs>
			<g transform='translate(-848 -1110)'>
				<g transform='translate(-500 -3790)'>
					<rect className='FuntA' width='42' height='42' rx='21' transform='translate(1348 4900)' />
				</g>
				<g transform='translate(141 61.09)'>
					<g transform='translate(719 1060.911)'>
						<rect className='FuntB' width='18' height='18' transform='translate(0 0)' />
						<g className='FuntC' transform='translate(2.95)'>
							<path
								className='FuntD'
								d='M1170.715-113.607l.094,2.684a5.422,5.422,0,0,1-.723,2.988h8.553l-.012,1.914h-12.042v-1.914h.9q.467-.11.759-.908a6.168,6.168,0,0,0,.314-1.969v-.1l-.093-2.7h-1.925v-1.914h1.867l-.105-3.171a5.289,5.289,0,0,1,1.429-3.878,5.046,5.046,0,0,1,3.764-1.451,4.752,4.752,0,0,1,3.513,1.293,4.658,4.658,0,0,1,1.295,3.451h-2.229a2.836,2.836,0,0,0-.742-2.069,2.709,2.709,0,0,0-2.036-.76,2.426,2.426,0,0,0-1.984.941,3.805,3.805,0,0,0-.759,2.468l.105,3.176h3.722v1.914Z'
								transform='translate(-1166.538 124.021)'
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

export default Funt;
