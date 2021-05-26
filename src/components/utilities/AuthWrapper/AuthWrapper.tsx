import { ReactNode, useEffect } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { clientOperations, clientSelectors } from 'state/ducks/client';
import { getRefreshToken } from 'shared/functions/tokenCookiesHelper';
import routes from 'shared/permissionRoutes';
import routing from 'shared/routing';
import { RoleType } from 'shared/enums';
import { requestInterceptor, responseInterceptor } from 'services/api/interceptors';

interface IAuthLayoutProps {
	children: ReactNode;
}

function AuthWrapper({ children }: IAuthLayoutProps) {
	const dispatch = useDispatch();
	const isClientAuthenticated = useSelector(clientSelectors.isClientAuthenticated);
	const clientRole = useSelector(clientSelectors.getClientRole);
	const [refreshTokenPending, refreshTokenError] = useSelector(clientSelectors.getReLoginApiCall());
	const refreshData = getRefreshToken();
	const isNotPublicPage = pathname => !routes[RoleType.PUBLIC].includes(pathname);
	const isClientOnAllowedPage = pathname => routes?.[clientRole]?.includes(pathname);

	useEffect(() => {
		requestInterceptor(dispatch);
		responseInterceptor();

		if (refreshData) {
			dispatch(clientOperations.reLogin(refreshData));
		}
	}, []);

	useEffect(() => {
		if (refreshTokenError) {
			Router.push(routing.dashboard);
		}
	}, [refreshTokenError]);

	if (typeof window !== 'undefined') {
		const { pathname } = Router;

		if (!isClientAuthenticated) {
			if (refreshData || refreshTokenPending) {
				return <></>;
			}
			console.log('isNotPublicPage: ', isNotPublicPage(pathname));
			if (isNotPublicPage(pathname)) {
				Router.push(routing.authentication.login);

				return <></>;
			}

			return <>{children}</>;
		}

		if (isClientAuthenticated) {
			if (isClientOnAllowedPage(pathname)) {
				return <>{children}</>;
			}

			Router.push(routing.dashboard);

			return <></>;
		}
	}

	return <></>;
}

export default AuthWrapper;
