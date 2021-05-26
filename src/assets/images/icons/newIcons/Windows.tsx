import styles from './Icons.module.scss';
import cx from 'classnames';
import ISvgProps from 'shared/interfaces/ISvgProps';

function Windows({ className, blue, grey }: ISvgProps) {
	return grey ? (
		<svg xmlns='http://www.w3.org/2000/svg' width='19.595' height='18.37' viewBox='0 0 19.595 18.37' className={className}>
			<g className={styles['a--grey']}>
				<g transform='translate(0 1.378)'>
					<g transform='translate(0 0)'>
						<path className={styles.b} d='M0,53.072v6.123H8.573V52Z' transform='translate(0 -52)' />
					</g>
				</g>
				<g transform='translate(9.797)'>
					<g transform='translate(0 0)'>
						<path className={styles.b} d='M256,17.225v7.348h9.8V16Z' transform='translate(-256 -16)' />
					</g>
				</g>
				<g transform='translate(9.797 9.797)'>
					<path className={styles.b} d='M256,272v7.348l9.8,1.225V272Z' transform='translate(-256 -272)' />
				</g>
				<g transform='translate(0 9.797)'>
					<path className={styles.b} d='M0,272v6.123l8.573,1.072V272Z' transform='translate(0 -272)' />
				</g>
			</g>
		</svg>
	) : (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='27.357' height='28.512' viewBox='0 0 27.357 28.512'>
			<g className={cx({ [styles['a--hover']]: blue })} transform='translate(482.048 75)'>
				<g transform='translate(-482.048 -75)'>
					<path
						className={blue ? styles['a--blue'] : styles.a}
						d='M37.149.151a.607.607,0,0,0-.48-.145L24.478,1.637a.606.606,0,0,0-.526.6V12.91a.607.607,0,0,0,.607.607H36.75a.607.607,0,0,0,.607-.607V.607A.6.6,0,0,0,37.149.151ZM36.143,12.3H25.165V2.769L36.143,1.3Z'
						transform='translate(-9.999 0)'
					/>
					<path
						className={blue ? styles['a--blue'] : styles.a}
						d='M13.122,24.336h0L1.653,24.36a.607.607,0,0,0-.605.607v9.1a.607.607,0,0,0,.53.6l11.468,1.46a.666.666,0,0,0,.077,0,.607.607,0,0,0,.607-.607V24.943a.607.607,0,0,0-.607-.607Zm-.607,10.5L2.261,33.532v-7.96l10.255-.021Z'
						transform='translate(-0.99 -9.573)'
					/>
					<path
						className={blue ? styles['a--blue'] : styles.a}
						d='M13.007,3.184,1.481,4.667a.607.607,0,0,0-.529.6v8.892a.607.607,0,0,0,.607.607H13.085a.607.607,0,0,0,.607-.607V3.786a.606.606,0,0,0-.684-.6Zm-.529,10.37H2.165V5.8L12.478,4.475Z'
						transform='translate(-0.952 -1.251)'
					/>
					<path
						className={blue ? styles['a--blue'] : styles.a}
						d='M36.752,24.364l-12.191-.017h0a.606.606,0,0,0-.606.607v10.88a.607.607,0,0,0,.525.6L36.67,38.084a.584.584,0,0,0,.08.005.607.607,0,0,0,.607-.607V24.971A.607.607,0,0,0,36.752,24.364Zm-.608,12.424L25.166,35.3V25.561l10.978.015Z'
						transform='translate(-10 -9.577)'
					/>
				</g>
			</g>
		</svg>
	);
}

export default Windows;
