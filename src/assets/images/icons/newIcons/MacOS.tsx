import styles from './Icons.module.scss';
import ISvgProps from 'shared/interfaces/ISvgProps';

function MacOS({ className }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='14.478' height='17.781' viewBox='0 0 14.478 17.781'>
			<g className={styles['a--grey']}>
				<path
					className={styles.b}
					d='M13.374,8.488A4.021,4.021,0,0,1,15.294,5.1a4.15,4.15,0,0,0-3.252-1.76c-1.382-.142-2.7.814-3.4.814S6.853,3.362,5.7,3.382A4.356,4.356,0,0,0,2.027,5.611c-1.568,2.721-.4,6.751,1.126,8.96.747,1.08,1.639,2.292,2.807,2.249,1.126-.045,1.551-.729,2.913-.729s1.744.729,2.935.707c1.212-.023,1.979-1.1,2.72-2.184a9.9,9.9,0,0,0,1.233-2.529A3.934,3.934,0,0,1,13.374,8.488Z'
					transform='translate(-1.282 0.96)'
				/>
				<path
					className={styles.b}
					d='M9.525,2.839A3.918,3.918,0,0,0,10.45,0,3.98,3.98,0,0,0,7.831,1.346,3.727,3.727,0,0,0,6.888,4.1,3.3,3.3,0,0,0,9.525,2.839Z'
					transform='translate(0.328)'
				/>
			</g>
		</svg>
	);
}

export default MacOS;
