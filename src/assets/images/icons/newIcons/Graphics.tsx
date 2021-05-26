import styles from './Icons.module.scss';
import cx from 'classnames';
import ISvgProps from 'shared/interfaces/ISvgProps';

function Graphics({ className, blue }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'>
			<g transform='translate(-1672 -1705)'>
				<rect className={styles.blank} width='50' height='50' transform='translate(1672 1705)' />
				<g transform='translate(1672 1670.666)'>
					<g transform='translate(0 42.667)'>
						<path
							className={cx(styles.a, { [styles['a--blue']]: blue })}
							d='M45.833,51H6.25V45.792a3.128,3.128,0,0,0-3.125-3.125H1.042a1.042,1.042,0,1,0,0,2.083H3.125a1.043,1.043,0,0,1,1.042,1.042v7.292H1.042A1.041,1.041,0,0,0,0,54.125v8.333A1.041,1.041,0,0,0,1.042,63.5H4.167v2.083H1.042A1.041,1.041,0,0,0,0,66.625v8.333A1.041,1.041,0,0,0,1.042,76H4.167v7.292a1.042,1.042,0,0,0,2.083,0V78.084h4.167v3.125a1.041,1.041,0,0,0,1.042,1.042h18.75a1.041,1.041,0,0,0,1.042-1.042V78.084h2.083v3.125a1.041,1.041,0,0,0,1.042,1.042H44.792a1.041,1.041,0,0,0,1.042-1.042V78.084A4.171,4.171,0,0,0,50,73.917V55.167A4.172,4.172,0,0,0,45.833,51ZM43.75,72.875a1.041,1.041,0,0,1-1.042,1.042H19.792a9.375,9.375,0,1,1,0-18.75H42.709a1.041,1.041,0,0,1,1.042,1.042V72.875Z'
							transform='translate(0 -42.667)'
						/>
						<circle
							className={cx(styles.a, { [styles['a--blue']]: blue })}
							cx='5.208'
							cy='5.208'
							r='5.208'
							transform='translate(14.583 16.667)'
						/>
						<path
							className={cx(styles.a, { [styles['a--blue']]: blue })}
							d='M308.042,213.333h-8.333a1.042,1.042,0,0,0,0,2.083h8.333a1.042,1.042,0,1,0,0-2.083Z'
							transform='translate(-269.5 -196.666)'
						/>
						<path
							className={cx(styles.a, { [styles['a--blue']]: blue })}
							d='M308.042,256h-8.333a1.042,1.042,0,0,0,0,2.083h8.333a1.042,1.042,0,1,0,0-2.083Z'
							transform='translate(-269.5 -235.167)'
						/>
						<path
							className={cx(styles.a, { [styles['a--blue']]: blue })}
							d='M308.042,298.667h-8.333a1.042,1.042,0,0,0,0,2.083h8.333a1.042,1.042,0,1,0,0-2.083Z'
							transform='translate(-269.5 -273.667)'
						/>
					</g>
				</g>
			</g>
		</svg>
	);
}

export default Graphics;
