import styles from './Icons.module.scss';
import ISvgProps from 'shared/interfaces/ISvgProps';

function SignOut({ className, blue }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='18.528' height='21.5' viewBox='0 0 18.528 21.5'>
			<g transform='translate(413.316 254.479) rotate(180)'>
				<path
					className={blue ? styles['a--blue'] : styles.b}
					d='M399.816,233.729a.75.75,0,0,0,.75.75h8a3.254,3.254,0,0,1,3.25,3.25v12a3.254,3.254,0,0,1-3.25,3.25h-8a.75.75,0,0,0,0,1.5h8a4.756,4.756,0,0,0,4.75-4.75v-12a4.755,4.755,0,0,0-4.75-4.75h-8A.75.75,0,0,0,399.816,233.729Z'
				/>
				<path
					className={blue ? styles['a--blue'] : styles.b}
					d='M402.057,239.521l3.4,3.458h-9.916a.75.75,0,0,0,0,1.5h9.949l-3.457,3.458a.75.75,0,1,0,1.06,1.06l4.184-4.185a1.552,1.552,0,0,0,0-2.195l-4.157-4.157a.75.75,0,0,0-1.06,1.061Z'
				/>
			</g>
		</svg>
	);
}

export default SignOut;
