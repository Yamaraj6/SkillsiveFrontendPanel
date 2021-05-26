import styles from './ButtonBack.module.scss';

interface ISvgProps {
	className?: string;
}

export function ButtonBack({ className }: ISvgProps) {
	return (
		<svg className={className} width='42' height='42' viewBox='0 0 42 42'>
			<defs>
				<clipPath id='a'>
					<path
						className={styles.a}
						d='M5.369-68.458a4.811,4.811,0,0,1,4.173-4.173A42.09,42.09,0,0,1,15-73a42.092,42.092,0,0,1,5.458.369,4.811,4.811,0,0,1,4.173,4.173A42.082,42.082,0,0,1,25-63a42.084,42.084,0,0,1-.369,5.458,4.811,4.811,0,0,1-4.173,4.173A42.083,42.083,0,0,1,15-53a42.081,42.081,0,0,1-5.458-.369,4.811,4.811,0,0,1-4.173-4.173A42.091,42.091,0,0,1,5-63,42.089,42.089,0,0,1,5.369-68.458Z'
						transform='translate(-5 73)'
					/>
				</clipPath>
				<clipPath id='b'>
					<path
						className={styles.b}
						d='M17.207-67.207a1,1,0,0,1,0,1.414L14.414-63l2.793,2.793a1,1,0,0,1,0,1.414,1,1,0,0,1-1.414,0l-3.5-3.5a1,1,0,0,1,0-1.414l3.5-3.5A1,1,0,0,1,17.207-67.207Z'
						transform='translate(-12 67.5)'
					/>
				</clipPath>
			</defs>
			<rect className={styles.c} width='42' height='42' rx='8' />
			<g transform='translate(11 11.478)'>
				<g className={styles.d}>
					<path className={styles.e} d='M0-78H30v30H0Z' transform='translate(-5 73)' />
				</g>
				<g className={styles.f} transform='translate(7 5.5)'>
					<path className={styles.g} d='M7-72.5H22.5v19H7Z' transform='translate(-12 67.5)' />
				</g>
			</g>
		</svg>
	);
}
