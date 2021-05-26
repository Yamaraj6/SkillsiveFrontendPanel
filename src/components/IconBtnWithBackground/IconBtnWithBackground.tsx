import { ReactNode, useState, MouseEvent } from 'react';
import cx from 'classnames';
import styles from './IconBtnWithBackground.module.scss';

interface IIconBtnWithBackgroundProps {
	value?: number | string;
	icon: ReactNode;
	iconHovered: ReactNode;
	alwaysHovered?: boolean;
	className?: string;
	onClick?: (e: MouseEvent) => void;
}

function IconBtnWithBackground({ value, icon, iconHovered, alwaysHovered, className, onClick }: IIconBtnWithBackgroundProps) {
	const [isIconHovered, setIsIconHovered] = useState(false);

	return (
		<div
			className={cx(className, styles.box, { [styles['box--hovered']]: alwaysHovered })}
			onMouseEnter={() => setIsIconHovered(true)}
			onMouseLeave={() => setIsIconHovered(false)}
			onClick={onClick}
		>
			{(value || value === 0) && <span>{value}</span>}
			{isIconHovered || alwaysHovered ? iconHovered : icon}
		</div>
	);
}

export default IconBtnWithBackground;
