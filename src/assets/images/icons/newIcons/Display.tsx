import styles from './Icons.module.scss';
import cx from 'classnames';
import ISvgProps from 'shared/interfaces/ISvgProps';

function Display({ className, blue }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'>
			<g transform='translate(-1619 -1711)'>
				<rect className={styles.blank} width='50' height='50' transform='translate(1619 1711)' />
				<g transform='translate(1619 1659.5)'>
					<g transform='translate(0 64)'>
						<path
							className={cx(styles.a, { [styles['a--blue']]: blue })}
							width='6.952'
							height='6.886'
							d='M45.834,64H4.167A4.171,4.171,0,0,0,0,68.167v25a4.172,4.172,0,0,0,4.167,4.167H21.875v2.083h-6.25a1.042,1.042,0,0,0,0,2.083h18.75a1.042,1.042,0,0,0,0-2.083h-6.25V97.334H45.834A4.171,4.171,0,0,0,50,93.167v-25A4.171,4.171,0,0,0,45.834,64Zm0,29.167H4.167v-25H45.834v25Z'
							transform='translate(0 -64)'
						/>
					</g>
				</g>
			</g>
		</svg>
	);
}

export default Display;
