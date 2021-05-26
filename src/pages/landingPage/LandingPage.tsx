import PublicLayout from 'layouts/PublicLayout/PublicLayout';
import { BuilderComponent } from '@builder.io/react';
import { BuilderIo } from 'shared/enums';
import { builderInit } from 'shared/functions/builderInit';

function LandingPage() {
	builderInit();

	return <BuilderComponent model='page' entry={BuilderIo.LANDING_PAGE} />;
}

LandingPage.Layout = PublicLayout;

export default LandingPage;
