import styles from './Icons.module.scss';
import cx from 'classnames';
import ISvgProps from 'shared/interfaces/ISvgProps';

function HardDisk({ className, blue }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='50.001' height='50' viewBox='0 0 50.001 50'>
			<g transform='translate(-1577 -1711)'>
				<rect className={styles.blank} width='50' height='50' transform='translate(1577 1711)' />
				<g transform='translate(1627.001 1659.682) rotate(90)'>
					<g transform='translate(64)'>
						<g transform='translate(0)'>
							<path
								className={cx(styles.a, { [styles['a--blue']]: blue })}
								d='M224.429,277.54a1.041,1.041,0,0,0-.34,1.258s4.114,9.425,5.424,12.595a4.268,4.268,0,0,0,.918,1.393,4.166,4.166,0,1,0,5.843-5.939L225.731,277.6A1.046,1.046,0,0,0,224.429,277.54Z'
								transform='translate(-208.495 -250.256)'
							/>
							<circle
								className={cx(styles.a, { [styles['a--blue']]: blue })}
								cx='4.167'
								cy='4.167'
								r='4.167'
								transform='translate(14.492 16.667)'
							/>
							<path
								className={cx(styles.a, { [styles['a--blue']]: blue })}
								d='M97.172,0H68.147A4.161,4.161,0,0,0,64,4.167V45.834A4.161,4.161,0,0,0,68.147,50H97.172a4.161,4.161,0,0,0,4.146-4.167V4.167A4.161,4.161,0,0,0,97.172,0ZM72.293,43.751a2.083,2.083,0,1,1,2.073-2.083A2.08,2.08,0,0,1,72.293,43.751ZM91.718,32.18a1.035,1.035,0,0,0-.025,1.58l1.435,1.265.148.138A6.19,6.19,0,0,1,87.982,45.7a6,6,0,0,1-4.861-3.762C82.564,40.588,81.5,38.1,80.468,35.7a1.035,1.035,0,0,0-.748-.6,14.573,14.573,0,1,1,12-2.919Z'
								transform='translate(-64)'
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

export default HardDisk;
