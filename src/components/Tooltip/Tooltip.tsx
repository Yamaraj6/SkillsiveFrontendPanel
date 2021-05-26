import { Tooltip as AntTooltip } from 'antd';
import { ReactNode } from 'react';

interface ITooltipProps {
	children: ReactNode;
	className?: string;
	title: string;
}

function Tooltip({ children, className, title }: ITooltipProps) {
	return (
		<AntTooltip overlayClassName={className} placement='topLeft' title={title} arrowPointAtCenter>
			<span>{children}</span>
		</AntTooltip>
	);
}

export default Tooltip;
