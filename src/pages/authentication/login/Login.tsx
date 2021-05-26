import styles from './Login.module.scss';
import { useEffect, useState } from 'react';
import { clientOperations, clientSelectors } from 'state/ducks/client';
import { useDispatch, useSelector } from 'react-redux';
import { AuthenticateRequestType, IAuthenticateRequest } from 'services/api/apiModels/client';
import { useTranslation } from 'react-i18next';
import { Button, Input, Form, Checkbox, Alert } from 'antd';
import Link from 'next/link';
import AuthLayout from 'layouts/AuthLayout';
import routing from 'shared/routing';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import { GoogleLoginResponse } from 'react-google-login';
import { useRouter } from 'next/router';
import { apiCallOperations } from 'state/ducks/apiCall';
import { SocialLoginType } from 'shared/enums/social';
import userTypes from 'state/ducks/client/types';
import SocialButtons from 'components/SocialButtons';
import { ISocialLoginRequest } from 'services/api/apiModels/client/socialAuthenticate';
import cx from 'classnames';

interface ILoginProps {
	isOrderPending?: boolean;
	className?: string;
}
function Login({ isOrderPending, className }: ILoginProps) {
	const router = useRouter();
	const dispatch = useDispatch();
	const { t } = useTranslation(['login', 'app', 'authentication', 'formValidation']);
	const [, loginError] = useSelector(clientSelectors.getLoginApiCall());
	const [, socialLoginError] = useSelector(clientSelectors.getLoginWithSocialApiCall());
	const [socialData, setSocialData] = useState({});

	const handleFbLogin = ({ id, email, name }: ReactFacebookLoginInfo): void => {
		const data: ISocialLoginRequest = {
			clientIdentification: id,
			clientSocialEmail: email,
			name: name,
			type: SocialLoginType.FACEBOOK
		};

		setSocialData(data);
		dispatch(clientOperations.loginWithSocial(data));
	};

	const handleGoogleLogin = ({ profileObj }: GoogleLoginResponse): void => {
		const data: ISocialLoginRequest = {
			clientIdentification: profileObj.googleId,
			clientSocialEmail: profileObj.email,
			name: profileObj.name,
			type: SocialLoginType.GOOGLE
		};

		setSocialData(data);
		dispatch(clientOperations.loginWithSocial(data));
	};

	useEffect(() => {
		console.log(socialLoginError);
		if (socialLoginError) {
			dispatch(apiCallOperations.deleteApiCallError(userTypes.POST_CALLS.LOGIN_WITH_SOCIAL.REGULAR));

			isOrderPending
				? router.push({ pathname: '/buy-product', query: { ...socialData } })
				: router.push({
						pathname: routing.authentication.register,
						query: { ...socialData }
				  });
		}
	}, [socialLoginError]);

	return (
		<>
			<div className={cx(styles.box, className, { [styles['box--in-payment']]: isOrderPending })}>
				<div className={styles.header}>
					<h3>{t('headline')}</h3>
					<p>{t('paragraph')}</p>
				</div>

				{loginError && (
					<div className={styles.alert}>
						<Alert message='' description={t('formValidation:loginNotValid')} type='error' showIcon />
					</div>
				)}

				<Form
					layout='vertical'
					onFinish={(values: IAuthenticateRequest) => dispatch(clientOperations.login(values, isOrderPending))}
					requiredMark={false}
				>
					<Form.Item
						name={AuthenticateRequestType.EMAIL}
						label={!isOrderPending && t('authentication:emailLabel')}
						rules={[
							{ required: true, message: t('formValidation:required', { field: t('authentication:email') }) },
							{
								type: 'email',
								message: t('formValidation:valid', { field: t('authentication:email') })
							}
						]}
						hasFeedback
					>
						<Input placeholder={t('authentication:emailLabel')} />
					</Form.Item>

					<Form.Item
						name={AuthenticateRequestType.PASSWORD}
						label={!isOrderPending && t('authentication:passwordLabel')}
						rules={[{ required: true, message: t('formValidation:required', { field: t('authentication:passwordLabel') }) }]}
						hasFeedback
					>
						<Input.Password placeholder={t('authentication:passwordLabel')} />
					</Form.Item>

					<div className={styles.options}>
						<Checkbox>{t('rememberMe')}</Checkbox>
						<Link href={routing.authentication.reset_password}>{t('forgotPassword')}</Link>
					</div>

					<Form.Item>
						<Button className={styles['submit-button']} type='primary' htmlType='submit'>
							{isOrderPending ? t('logIn') : t('headline')}
						</Button>
					</Form.Item>
				</Form>

				<div className={styles.socials}>
					<div className={styles['socials__header']}>
						<div className={styles['h-line']}></div>

						<span>{t('socialHeader')}</span>

						<div className={styles['h-line']}></div>
					</div>

					<div className={styles['buttons-container']}>
						<SocialButtons handleFbLogin={handleFbLogin} handleGoogleLogin={handleGoogleLogin} />
					</div>
				</div>
			</div>

			<div className={styles['redirect-container']}>
				<span>{t('noAccount')} </span> <Link href={routing.authentication.register}>{t('registerRedirect')}</Link>
			</div>
		</>
	);
}

Login.defaultProps = {
	isOrderPending: false,
	className: ''
};

Login.Layout = AuthLayout;

export default Login;
