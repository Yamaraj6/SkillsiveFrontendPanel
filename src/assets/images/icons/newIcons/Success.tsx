import styles from './Icons.module.scss';
import ISvgProps from 'shared/interfaces/ISvgProps';

function Success({ className, blue }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='30' height='27.349' viewBox='0 0 30 27.349'>
			<g transform='translate(-5.254 -3)'>
				<g transform='translate(5.254 3)'>
					<path
						className={blue ? styles['a--blue'] : styles.success}
						d='M0,0H6.077A1.519,1.519,0,0,1,7.6,1.519V15.193a1.519,1.519,0,0,1-1.519,1.519H0Z'
						transform='translate(22.404 10.635)'
					/>
					<path
						className={blue ? styles['a--blue'] : styles.success}
						d='M20.885,10.635c-5.773,0-6.077-6.381-6.077-7.6a3.039,3.039,0,0,0-6.077,0,16.712,16.712,0,0,0,1.823,7.6H1.59A1.519,1.519,0,0,0,.071,12.61l3.8,13.674a1.519,1.519,0,0,0,1.519,1.063H22.4V10.635Z'
						transform='translate(0)'
					/>
				</g>
			</g>
		</svg>
	);
}

export default Success;
