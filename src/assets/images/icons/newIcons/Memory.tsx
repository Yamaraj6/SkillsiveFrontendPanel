import styles from './Icons.module.scss';
import cx from 'classnames';
import ISvgProps from 'shared/interfaces/ISvgProps';

function Memory({ className, blue }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'>
			<g transform='translate(9640 -984)'>
				<rect className={styles.blank} width='50' height='50' transform='translate(-9640 984)' />
				<g transform='translate(-9640 886.44)'>
					<g transform='translate(21.525 128.87)'>
						<g transform='translate(0 0)'>
							<rect className={cx(styles.a, { [styles['a--blue']]: blue })} width='6.952' height='6.886' />
						</g>
					</g>
					<g transform='translate(11.705 128.87)'>
						<g transform='translate(0 0)'>
							<rect className={cx(styles.a, { [styles['a--blue']]: blue })} width='6.952' height='6.886' />
						</g>
					</g>
					<g transform='translate(31.343 128.87)'>
						<g transform='translate(0 0)'>
							<rect className={cx(styles.a, { [styles['a--blue']]: blue })} width='6.952' height='6.886' />
						</g>
					</g>
					<g transform='translate(0 121)'>
						<g transform='translate(0 0)'>
							<path
								className={cx(styles.a, { [styles['a--blue']]: blue })}
								d='M48.535,131.821A1.47,1.47,0,0,0,50,130.345v-7.87A1.47,1.47,0,0,0,48.535,121H1.465A1.47,1.47,0,0,0,0,122.476v7.87a1.47,1.47,0,0,0,1.465,1.476,2.459,2.459,0,0,1,0,4.918A1.47,1.47,0,0,0,0,138.215v7.869a1.47,1.47,0,0,0,1.465,1.476h4.3v-5.41a1.465,1.465,0,1,1,2.93,0v5.41H12.3a1.47,1.47,0,0,0,1.465-1.476v-2.459H16.7v2.459a1.47,1.47,0,0,0,1.465,1.476h3.6v-5.41a1.465,1.465,0,1,1,2.93,0v5.41h2.132v-5.41a1.465,1.465,0,1,1,2.93,0v5.41h2.132v-5.41a1.465,1.465,0,1,1,2.93,0v5.41h2.132v-5.41a1.465,1.465,0,1,1,2.93,0v5.41h2.132v-5.41a1.465,1.465,0,1,1,2.93,0v5.41h3.6A1.47,1.47,0,0,0,50,146.084v-7.869a1.47,1.47,0,0,0-1.465-1.476,2.459,2.459,0,0,1,0-4.918Zm-7.324,5.41a1.47,1.47,0,0,1-1.465,1.476H10.254a1.47,1.47,0,0,1-1.465-1.476v-9.837a1.47,1.47,0,0,1,1.465-1.476H39.746a1.47,1.47,0,0,1,1.465,1.476Z'
								transform='translate(0 -121)'
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

export default Memory;
