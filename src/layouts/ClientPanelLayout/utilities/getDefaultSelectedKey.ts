import Router from 'next/router';

const getDefaultSelectedKey = () => {
	const pathSplit = Router.pathname.split('/');

	if (Router.asPath.includes('?')) {
		return Router.asPath;
	} else {
		return `/${pathSplit?.[1]}/${pathSplit?.[2]}/${pathSplit?.[3]}`;
	}
};

export default getDefaultSelectedKey;
