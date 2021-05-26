import styles from './Icons.module.scss';
import cx from 'classnames';
import ISvgProps from 'shared/interfaces/ISvgProps';

function Servers({ className, blue }: ISvgProps) {
	return (
		<svg
			className={cx(className, { [styles['a--hover']]: blue })}
			xmlns='http://www.w3.org/2000/svg'
			width='27.453'
			height='27.453'
			viewBox='0 0 27.453 27.453'
		>
			<path
				className={blue ? styles['a--blue'] : styles.a}
				d='M16.016,9.014H7.437a.423.423,0,0,0,0,.846h8.579a.423.423,0,0,0,0-.846Z'
				transform='translate(-4.005 -5.147)'
			/>
			<circle className={blue ? styles['a--blue'] : styles.a} cx='1.35' cy='1.35' r='1.35' transform='translate(21.603 3.15)' />
			<path
				className={blue ? styles['a--blue'] : styles.a}
				d='M25.737,0H1.716A1.716,1.716,0,0,0,0,1.716V6.863A1.716,1.716,0,0,0,1.716,8.579H25.737a1.716,1.716,0,0,0,1.716-1.716V1.716A1.716,1.716,0,0,0,25.737,0ZM26.6,6.863a.859.859,0,0,1-.858.858H1.716a.859.859,0,0,1-.858-.858V1.716A.859.859,0,0,1,1.716.858H25.737a.859.859,0,0,1,.858.858Z'
				transform='translate(0)'
			/>
			<path
				className={blue ? styles['a--blue'] : styles.a}
				d='M16.016,31.014H7.437a.423.423,0,0,0,0,.846h8.579a.423.423,0,0,0,0-.846Z'
				transform='translate(-4.005 -17.71)'
			/>
			<circle className={blue ? styles['a--blue'] : styles.a} cx='1.35' cy='1.35' r='1.35' transform='translate(21.603 12.151)' />
			<path
				className={blue ? styles['a--blue'] : styles.a}
				d='M25.737,22H1.716A1.716,1.716,0,0,0,0,23.716v5.147a1.716,1.716,0,0,0,1.716,1.716H25.737a1.716,1.716,0,0,0,1.716-1.716V23.716A1.716,1.716,0,0,0,25.737,22Zm.858,6.863a.859.859,0,0,1-.858.858H1.716a.859.859,0,0,1-.858-.858V23.716a.859.859,0,0,1,.858-.858H25.737a.859.859,0,0,1,.858.858Z'
				transform='translate(0 -12.563)'
			/>
			<path
				className={blue ? styles['a--blue'] : styles.a}
				d='M16.016,53.014H7.437a.423.423,0,0,0,0,.846h8.579a.423.423,0,0,0,0-.846Z'
				transform='translate(-4.005 -30.273)'
			/>
			<circle className={blue ? styles['a--blue'] : styles.a} cx='1.35' cy='1.35' r='1.35' transform='translate(21.603 22.052)' />
			<path
				className={blue ? styles['a--blue'] : styles.a}
				d='M25.737,44H1.716A1.716,1.716,0,0,0,0,45.716v5.147a1.716,1.716,0,0,0,1.716,1.716H25.737a1.716,1.716,0,0,0,1.716-1.716V45.716A1.716,1.716,0,0,0,25.737,44Zm.858,6.863a.859.859,0,0,1-.858.858H1.716a.859.859,0,0,1-.858-.858V45.716a.859.859,0,0,1,.858-.858H25.737a.859.859,0,0,1,.858.858Z'
				transform='translate(0 -25.126)'
			/>
		</svg>
	);
}

export default Servers;
