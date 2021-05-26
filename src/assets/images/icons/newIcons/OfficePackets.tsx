import styles from './Icons.module.scss';
import cx from 'classnames';
import ISvgProps from 'shared/interfaces/ISvgProps';

function OfficePackets({ className, blue }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='30.012' height='34.151' viewBox='0 0 30.012 34.151'>
			<defs>
				<style>{'.a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;}'}</style>
			</defs>

			<g className={cx({ [styles['a--hover']]: blue })} transform='translate(-201.791 -103.106)'>
				<path
					className={blue ? styles['a--stroke-line-blue'] : 'a'}
					d='M220.938,103.606l-18.647,7.253v19.682l6.215-2.072V111.894l12.432-2.072v22.883l-18.647-2.164,18.647,6.216,10.365-3.108V106.714Z'
				/>
			</g>
		</svg>
	);
}

export default OfficePackets;
