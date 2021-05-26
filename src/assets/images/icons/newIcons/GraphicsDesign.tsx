import styles from './Icons.module.scss';
import cx from 'classnames';
import ISvgProps from 'shared/interfaces/ISvgProps';

function GraphicsDesign({ className, blue }: ISvgProps) {
	return (
		<svg
			className={cx(className, { [styles['a--hover']]: blue })}
			xmlns='http://www.w3.org/2000/svg'
			width='30.01'
			height='29.556'
			viewBox='0 0 30.01 29.556'
		>
			<defs>
				<style>
					{
						'.a,.b,.e{fill:none;}.a,.b{stroke:#1f1f1f;}.a{stroke-miterlimit:10;}.b{stroke-linecap:round;stroke-linejoin:round;}.c{fill:#1f1f1f;}.d{stroke:none;}'
					}
				</style>
			</defs>
			<g transform='translate(-539.562 1241.393)'>
				<g className={blue ? styles['a--stroke-line-blue'] : 'a'} transform='translate(539.562 -1241.393)'>
					<rect className='d' width='30' height='21.99' rx='2.046' />
					<rect className='e' x='0.5' y='0.5' width='29' height='20.99' rx='1.546' />
				</g>
				<line className={blue ? styles['a--stroke-blue'] : 'a'} x2='30' transform='translate(539.572 -1223.862)' />
				<g transform='translate(199.203 -1348.195)'>
					<line className={blue ? styles['a--stroke-blue'] : 'b'} y2='4.361' transform='translate(354.161 128.792)' />
					<line className={blue ? styles['a--stroke-blue'] : 'b'} y2='4.361' transform='translate(356.557 128.792)' />
				</g>
				<path
					className={blue ? styles['a--stroke-blue'] : 'b'}
					d='M365.975,135.858H344.743a.622.622,0,0,1-.478-1.021l.789-.947a1.2,1.2,0,0,1,.922-.432h18.767a1.2,1.2,0,0,1,.922.432l.788.947A.622.622,0,0,1,365.975,135.858Z'
					transform='translate(199.203 -1348.195)'
				/>
				<path
					className={blue ? styles['a--stroke-blue'] : 'b'}
					d='M341.724,123.811l6.931-5.921a1.559,1.559,0,0,1,1.8-.159l2.677,1.573a1.56,1.56,0,0,0,1.879-.229l5.339-5.214a1.559,1.559,0,0,1,2.382.244l6.539,9.706'
					transform='translate(199.203 -1348.195)'
				/>
				<circle
					className={blue ? styles['a--blue'] : 'c'}
					cx='1.384'
					cy='1.384'
					r='1.384'
					transform='translate(546.162 -1238.067)'
				/>
			</g>
		</svg>
	);
}

export default GraphicsDesign;
