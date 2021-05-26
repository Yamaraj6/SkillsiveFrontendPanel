import { Dispatch, SetStateAction } from 'react';

export interface IMenuProps {
	isCollapsed: boolean;
	setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}
