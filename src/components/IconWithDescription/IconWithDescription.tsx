import { ReactNode } from 'react';
import styles from './IconWithDescription.module.scss';

interface IIconWithDescriptionProps {
	label: string;
	value: string;
	icon: ReactNode;
}

function IconWithDescription({ label, value, icon }: IIconWithDescriptionProps) {
	return (
		<div className={styles.item}>
			{icon}
			<div className={styles['item__label']}>{label}</div>
			<div className={styles['item__value']}>{value}</div>
		</div>
	);
}

export default IconWithDescription;
