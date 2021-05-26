import PublicLayout from 'layouts/PublicLayout/PublicLayout';
import styles from './Webinars.module.scss';
import { BuilderComponent } from '@builder.io/react';
import { BuilderIo } from 'shared/enums';
import { builderInit } from 'shared/functions/builderInit';

function Webinars() {
	builderInit();

	return <BuilderComponent model='page' entry={BuilderIo.WEBINARS} />;
}

Webinars.Layout = PublicLayout;

export default Webinars;
