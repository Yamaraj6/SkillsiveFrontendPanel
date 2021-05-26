import { RoleType } from 'shared/enums';
import { ClientMenu, AdminMenu, DeveloperMenu, DistributorMenu } from '../components/Menus';
import { Dispatch, SetStateAction } from 'react';

const getMenuBasedOnClientRole = (role: RoleType, isCollapsed: boolean, setIsDrawerOpen: Dispatch<SetStateAction<boolean>>) => {
	switch (role) {
		case RoleType.BASIC:
			return <ClientMenu isCollapsed={isCollapsed} setIsDrawerOpen={setIsDrawerOpen} />;
		case RoleType.ADMIN:
			return <AdminMenu isCollapsed={isCollapsed} setIsDrawerOpen={setIsDrawerOpen} />;
		case RoleType.DEVELOPER:
			return <DeveloperMenu isCollapsed={isCollapsed} setIsDrawerOpen={setIsDrawerOpen} />;
		case RoleType.DISTRIBUTOR:
			return <DistributorMenu isCollapsed={isCollapsed} setIsDrawerOpen={setIsDrawerOpen} />;
		default:
			return;
	}
};

export default getMenuBasedOnClientRole;
