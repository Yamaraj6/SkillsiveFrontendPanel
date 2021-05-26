import styles from './Icons.module.scss';
import ISvgProps from 'shared/interfaces/ISvgProps';

function Plus({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='15.391' height='15.391' viewBox='0 0 15.391 15.391'>
			<g transform='translate(-253.47 13.134) rotate(-45)'>
				<g transform='translate(-0.028 0.212)'>
					<g transform='translate(-76.025 182.687) rotate(-45)'>
						<path className={styles.a} d='M195.491,186.364H181.6a.75.75,0,0,1,0-1.5h13.891a.75.75,0,0,1,0,1.5Z' />
					</g>
					<g transform='translate(179.742 -77.226) rotate(45)'>
						<path className={styles.a} d='M195.491,176.845H181.6a.75.75,0,0,1,0-1.5h13.891a.75.75,0,0,1,0,1.5Z' />
					</g>
				</g>
			</g>
		</svg>
	);
}

export default Plus;
