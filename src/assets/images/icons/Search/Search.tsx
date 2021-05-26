import styles from './Search.module.scss';

interface ISvgProps {
	className?: string;
	blue?: boolean;
}

function Search({ className, blue }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
			<path className={styles.a} d='M0,0H20V20H0Z' />
			<path
				className={blue ? styles['b--blue'] : styles.b}
				d='M15.563,16.413l-2.975-2.975A7.634,7.634,0,0,1,2.232,2.236a7.634,7.634,0,0,1,11.5,9.988l3.012,3.012a.842.842,0,0,1-.6,1.437A.815.815,0,0,1,15.563,16.413ZM3.41,3.414A5.966,5.966,0,1,0,7.63,1.666,5.975,5.975,0,0,0,3.41,3.414Z'
				transform='translate(1.67 1.667)'
			/>
		</svg>
	);
}

export default Search;
