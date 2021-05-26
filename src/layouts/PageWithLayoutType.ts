import { NextPage } from 'next';
import AuthLayout from './AuthLayout';
import ClientPanelLayout from './ClientPanelLayout';

type PageWithAuthLayoutType = NextPage & { Layout: typeof AuthLayout };
type PageWithClientPanelLayoutType = NextPage & { Layout: typeof ClientPanelLayout };

type PageWithLayoutType = PageWithAuthLayoutType | PageWithClientPanelLayoutType;

export default PageWithLayoutType;
