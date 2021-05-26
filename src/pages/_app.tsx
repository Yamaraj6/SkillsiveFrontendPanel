import '../i18n/i18n';
import 'antd/dist/antd.css';
import '../assets/global-styles.scss';
import '../assets/skillsive-antd-theme.css';
import 'layouts/ClientPanelLayout/components/DropDownIcon/DropDownIcon.scss';
import { PersistGate } from 'redux-persist/integration/react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store, persistor } from 'state/store';
import PageWithLayoutType from 'layouts/PageWithLayoutType';
import * as React from 'react';
import AuthWrapper from 'components/utilities/AuthWrapper';

interface IAppLayoutProps {
	Component: PageWithLayoutType;
	pageProps: any;
}

function MyApp({ Component, pageProps }: IAppLayoutProps) {
	const Layout = Component.Layout || React.Fragment;

	return (
		<>
			<Head>
				<title>Skillsive</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
			</Head>

			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthWrapper>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</AuthWrapper>
				</PersistGate>
			</Provider>
		</>
	);
}

export default MyApp;
