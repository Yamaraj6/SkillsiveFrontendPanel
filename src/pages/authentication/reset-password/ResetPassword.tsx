import styles from './ResetPassword.module.scss';
import { useDispatch } from 'react-redux';
import { clientOperations, clientSelectors } from 'state/ducks/client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import AuthLayout from 'layouts/AuthLayout';
import { Button, Input, Form } from 'antd';
import { ThumbUp } from 'assets/images/icons/ThumbUp';
import { useSelector } from 'react-redux';
import { IEmailFormModel } from 'services/api/apiModels/client/resetPassword';
import { ResetPasswordRequestType } from 'services/api/apiModels/client/resetPassword';
import routing from 'shared/routing';

function ResetPassword() {
	const { t } = useTranslation(['resetPassword', 'app', 'login', 'authentication', 'formValidation']);
	const dispatch = useDispatch();
	const [, , requestResetPasswordStatus] = useSelector(clientSelectors.getRequestResetPasswordApiCall());
	const userEmail = useSelector(clientSelectors.getUserEmail);

	return (
		<div className={styles.box}>
			<div>
				<h3>{t('headline')}</h3>
				<p>{t('paragraph')}</p>
			</div>

			{requestResetPasswordStatus === 200 ? (
				<div className={styles['confirmation-container']}>
					<ThumbUp className={styles['thumb-up']} />

					<span>{t('app:done')}</span>

					<p>{t('emailConfirm')}</p>
				</div>
			) : (
				<Form
					layout='vertical'
					onFinish={({ Email }: IEmailFormModel) => dispatch(clientOperations.requestResetPassword({ email: Email }))}
					requiredMark={false}
					initialValues={{
						[ResetPasswordRequestType.EMAIL]: userEmail
					}}
				>
					<Form.Item
						name={ResetPasswordRequestType.EMAIL}
						label={t('authentication:emailLabel')}
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

					<Form.Item>
						<Button type='primary' htmlType='submit'>
							{t('app:send')}
						</Button>
					</Form.Item>
				</Form>
			)}

			<div className={styles['redirect-container']}>
				{t('app:backTo')} <Link href={routing.authentication.login}>{t('login:headline')}</Link>
			</div>
		</div>
	);
}

ResetPassword.Layout = AuthLayout;

export default ResetPassword;
