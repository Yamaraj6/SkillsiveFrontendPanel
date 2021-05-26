import styles from './ArrowButton.module.scss';
import { ArrowRightLong } from 'assets/images/icons/ArrowRightLong';
import cx from 'classnames';
import { ArrowDirection } from 'shared/enums';

interface IArrowButtonProps {
	direction: 'back' | 'next';
	active?: boolean;
	handlePagination?: (direction: string) => void;
	className?: string;
}

function ArrowButton({ direction, active, handlePagination, className }: IArrowButtonProps) {
	return (
		<button
			className={cx(
				styles['arrow-btn'],
				{ [styles.back]: direction === ArrowDirection.BACK, className },
				{ [styles.active]: active }
			)}
			onClick={() => handlePagination(direction)}
		>
			<ArrowRightLong />
		</button>
	);
}

ArrowButton.defaultProps = {
	direction: ArrowDirection.NEXT,
	active: false
};

export default ArrowButton;
