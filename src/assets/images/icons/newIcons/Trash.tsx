import ISvgProps from 'shared/interfaces/ISvgProps';

function Trash({ className, onClick }: ISvgProps) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='42' height='42' viewBox='0 0 42 42' className={className} onClick={onClick}>
			<defs></defs>
			<rect fill='rgba(113,124,142,0.1)' width='42' height='42' rx='21' />
			<g transform='translate(12.401 10.412)'>
				<path
					fill='#717c8e'
					d='M222.894,154.7a.5.5,0,0,0-.5.5v9.373a.5.5,0,1,0,.992,0V155.2A.5.5,0,0,0,222.894,154.7Zm0,0'
					transform='translate(-212.369 -147.031)'
				/>
				<path
					fill='#717c8e'
					d='M104.894,154.7a.5.5,0,0,0-.5.5v9.373a.5.5,0,1,0,.992,0V155.2A.5.5,0,0,0,104.894,154.7Zm0,0'
					transform='translate(-98.221 -147.031)'
				/>
				<path
					fill='#717c8e'
					d='M1.405,6.3V18.522a2.736,2.736,0,0,0,.727,1.887,2.442,2.442,0,0,0,1.772.766h9.383a2.442,2.442,0,0,0,1.772-.766,2.736,2.736,0,0,0,.727-1.887V6.3A1.894,1.894,0,0,0,15.3,2.578H12.762v-.62A1.948,1.948,0,0,0,10.8,0h-4.4A1.948,1.948,0,0,0,4.43,1.958v.62H1.891A1.894,1.894,0,0,0,1.405,6.3Zm11.883,13.88H3.9A1.571,1.571,0,0,1,2.4,18.522V6.347H14.8V18.522A1.571,1.571,0,0,1,13.288,20.183ZM5.422,1.958A.955.955,0,0,1,6.394.991h4.4a.955.955,0,0,1,.972.967v.62H5.422ZM1.891,3.569H15.3a.893.893,0,1,1,0,1.785H1.891a.893.893,0,0,1,0-1.785Zm0,0'
					transform='translate(0.003 0.001)'
				/>
			</g>
		</svg>
	);
}

export default Trash;
