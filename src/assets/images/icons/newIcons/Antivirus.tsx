import styles from './Icons.module.scss';
import cx from 'classnames';
import ISvgProps from 'shared/interfaces/ISvgProps';

function Antivirus({ className, blue }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='29.189' height='34.42' viewBox='0 0 29.189 34.42'>
			<defs>
				<style>{'.a,.b{fill:none;stroke:#1f1f1f;}.a{stroke-miterlimit:10;}.b{stroke-linecap:round;stroke-linejoin:round;}'}</style>
			</defs>

			<g className={cx({ [styles['a--hover']]: blue })} transform='translate(-295.905 -101.628)'>
				<path
					className={blue ? styles['a--stroke-line-blue'] : 'a'}
					d='M309.734,102.487a44.494,44.494,0,0,1-12.6,7.386,1.149,1.149,0,0,0-.732,1.072v1.864c0,13.824,10.542,21.176,13.392,22.565a1.6,1.6,0,0,0,1.4,0c2.85-1.389,13.392-8.928,13.392-22.565v-1.864a1.149,1.149,0,0,0-.732-1.072,44.494,44.494,0,0,1-12.6-7.386A1.148,1.148,0,0,0,309.734,102.487Z'
				/>
				<path
					className={blue ? styles['a--stroke-line-blue'] : 'a'}
					d='M310.491,132.321c-2.422-1.477-11.086-7.6-11.086-19.512v-.615a48.543,48.543,0,0,0,11.1-6.435,48.536,48.536,0,0,0,11.094,6.435v.615C321.594,124.555,312.888,130.822,310.491,132.321Z'
				/>
				<path
					className={blue ? styles['a--stroke-line-blue'] : 'b'}
					d='M303.986,117.5l3.958,3.606a1.454,1.454,0,0,0,1.964,0l8.239-7.587'
				/>
			</g>
		</svg>
	);
}

export default Antivirus;
