import styles from './InfoBox.module.scss';
import cx from 'classnames';

interface IInfoBox {
	placeholder: string;
	value: number;
	icon: JSX.Element;
	className?: string;
}

function InfoBox({ placeholder, value, icon, className }: IInfoBox) {
	return (
		<div className={cx(styles['info-box'], className)}>
			<div className={styles['info-box__inner-left']}>
				<span>{placeholder}</span>

				<p>{value}</p>
			</div>

			<div className={styles['info-box__inner-right']}>{icon}</div>
		</div>
	);
}

export default InfoBox;
