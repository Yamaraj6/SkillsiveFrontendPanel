import styles from './Collapse.module.scss';
import { Plus } from 'assets/images/icons/newIcons';
import { useState, ReactNode, useRef, useEffect } from 'react';
import cx from 'classnames';

interface ICollapseProps {
	header: string;
	children: ReactNode;
}

function Collapse({ header, children }: ICollapseProps) {
	const collapseRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(true);
	const [contentHeight, setContentHeight] = useState(0);

	useEffect(() => {
		setContentHeight(collapseRef?.current?.clientHeight + 100);
	}, [collapseRef?.current?.clientHeight]);

	return (
		<div className={styles.collapse}>
			<div className={styles['collapse__header']} onClick={() => setIsOpen(!isOpen)}>
				<h1>{header}</h1> <Plus className={cx({ [styles['collapse__header--open']]: isOpen })} />
			</div>

			<div
				style={{ maxHeight: isOpen ? contentHeight : 0 }}
				className={cx(styles['collapse__panel'], { [styles['collapse__panel--open']]: isOpen })}
			>
				<div ref={collapseRef}>{children}</div>
			</div>
		</div>
	);
}

export default Collapse;
