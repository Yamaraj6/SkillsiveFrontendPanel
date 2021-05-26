import styles from './SocialButtons.module.scss';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { FbIcon } from 'assets/images/icons/FbIcon';
import { AppleIcon } from 'assets/images/icons/AppleIcon';
import { GoogleIcon } from 'assets/images/icons/GoogleIcon';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import { GoogleLoginResponse } from 'react-google-login';
import cx from 'classnames';

interface ISocialProps {
	handleFbLogin({ id, email }: ReactFacebookLoginInfo): void;
	handleGoogleLogin({ profileObj }: GoogleLoginResponse): void;
}

function SocialButtons({ handleFbLogin, handleGoogleLogin }: ISocialProps): React.ReactElement {
	const facebookAppId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
	const googleAppId = process.env.NEXT_PUBLIC_GOOGLE_APP_ID;

	return (
		<>
			<FacebookLogin
				appId={facebookAppId}
				autoLoad={false}
				fields='name,email,picture'
				callback={handleFbLogin}
				render={renderProps => (
					<button className={cx(styles['social-button'], styles.fb)} onClick={renderProps.onClick}>
						<FbIcon />
					</button>
				)}
			/>

			<button className={cx(styles['social-button'], styles.apple)}>
				<AppleIcon />
			</button>

			<GoogleLogin
				clientId={googleAppId}
				render={renderProps => (
					<button className={cx(styles['social-button'], styles.google)} onClick={renderProps.onClick}>
						<GoogleIcon />
					</button>
				)}
				onSuccess={handleGoogleLogin}
				prompt='select_account'
			/>
		</>
	);
}

export default SocialButtons;
