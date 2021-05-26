import styles from './Icons.module.scss';
import cx from 'classnames';
import ISvgProps from 'shared/interfaces/ISvgProps';

function Platform({ className, blue }: ISvgProps) {
	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'>
			<g transform='translate(-1544 -1547)'>
				<rect className={styles.blank} width='50' height='50' transform='translate(1544 1547)' />
				<g transform='translate(1544 1512.305)'>
					<path
						className={cx(styles.a, { [styles['a--blue']]: blue })}
						d='M173.034,316.756h-5.453a.358.358,0,0,1-.358-.358v-1.327a.359.359,0,0,0-.358-.358h-7.631a.359.359,0,0,0-.358.358V316.4a.358.358,0,0,1-.358.358h-4.1a.359.359,0,0,0-.358.358v1.536a.359.359,0,0,0,.358.358h18.614a.359.359,0,0,0,.358-.358v-1.536A.358.358,0,0,0,173.034,316.756Z'
						transform='translate(-134.641 -234.486)'
					/>
					<g transform='translate(0 46.368)'>
						<path
							className={cx(styles.a, { [styles['a--blue']]: blue })}
							d='M90.5,46.368H51.612a2.457,2.457,0,0,0-2.454,2.456v6.4c0,.847-.063.967.5.967h.973c.476,0,.379-.12.379-.982V48.824a.605.605,0,0,1,.6-.6H90.5a.605.605,0,0,1,.6.6V72.8H63.372s-.977,0-.977,1.263v3c0,1.263,1.009,1.263,1.009,1.263H90.5a2.458,2.458,0,0,0,2.454-2.455V48.824A2.458,2.458,0,0,0,90.5,46.368ZM71.056,76.2a1.106,1.106,0,1,1,1.105-1.106A1.106,1.106,0,0,1,71.056,76.2Z'
							transform='translate(-42.954 -46.368)'
						/>
						<path
							className={cx(styles.a, { [styles['a--blue']]: blue })}
							d='M15.662,141.633H1.585A1.586,1.586,0,0,0,0,143.218v23.137a1.586,1.586,0,0,0,1.585,1.585H15.662a1.587,1.587,0,0,0,1.585-1.585V143.218A1.587,1.587,0,0,0,15.662,141.633Zm-8.775,1.616H10.36a.3.3,0,1,1,0,.6H6.887a.3.3,0,0,1,0-.6ZM8.6,166.827a.82.82,0,1,1,.82-.82A.82.82,0,0,1,8.6,166.827Zm7.283-2.41a.381.381,0,0,1-.376.384H1.738a.381.381,0,0,1-.376-.384V145.19a.381.381,0,0,1,.376-.384H15.509a.381.381,0,0,1,.376.384Z'
							transform='translate(0 -129.613)'
						/>
					</g>
				</g>
			</g>
		</svg>
	);
}

export default Platform;
