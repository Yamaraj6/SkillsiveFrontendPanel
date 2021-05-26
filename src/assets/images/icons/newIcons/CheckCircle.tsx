import styles from './Icons.module.scss';
import ISvgProps from 'shared/interfaces/ISvgProps';

function CheckCircle({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='16.5' height='16.5' viewBox='0 0 16.5 16.5'>
			<g transform='translate(-354.777 -295.689)'>
				<path className={styles['check-circle']} d='M358.46,301.982l4.314,4.266,7.4-7.87' />
				<path className={styles['check-circle']} d='M363.027,296.439a7.464,7.464,0,0,1,4.329,1.375' />
				<path className={styles['check-circle']} d='M355.527,303.939a7.5,7.5,0,0,1,7.5-7.5' />
				<path className={styles['check-circle']} d='M370.3,302.08a7.5,7.5,0,1,1-14.768,1.859' />
			</g>
		</svg>
	);
}

export default CheckCircle;
