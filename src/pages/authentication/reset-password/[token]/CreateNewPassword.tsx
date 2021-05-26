import styles from './CreateNewPassword.module.scss';
import { Button, Input, Form } from 'antd';
import { useDispatch } from 'react-redux';
import { clientOperations } from 'state/ducks/client';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import AuthLayout from 'layouts/AuthLayout';
import { ResetPasswordRequestType, IPasswordFormModel } from 'services/api/apiModels/client/resetPassword';
import { PASSWORD_CONFIRMATION_PATTERN } from 'shared/regexp';

function CreateNewPassword() {
	const { t } = useTranslation(['resetPassword', 'app', 'formValidation', 'authentication']);
	const router = useRouter();
	const dispatch = useDispatch();
	const { token } = router.query;

	const handleSubmit = ({ NewPassword }: IPasswordFormModel) => {
		const payload = { newPassword: NewPassword, resetToken: token.toString() };
		dispatch(clientOperations.resetPassword(payload));
	};

	return (
		<div className={styles.box}>
			<div>
				<h3>
					{t('app:create')}
					<br />
					{t('authentication:newPasswordLabel')}
				</h3>
			</div>

			<Form layout='vertical' onFinish={handleSubmit} requiredMark={false}>
				<Form.Item
					name={ResetPasswordRequestType.NEW_PASSWORD}
					label={t('authentication:newPasswordLabel')}
					rules={[
						{ required: true, message: t('formValidation:required', { field: t('authentication:passwordLabel') }) },
						{ pattern: PASSWORD_CONFIRMATION_PATTERN, message: t('formValidation:validPassword') }
					]}
					hasFeedback
				>
					<Input.Password placeholder={t('authentication:passwordLabel')} />
				</Form.Item>

				<Form.Item
					name={ResetPasswordRequestType.CONFIRM_PASSWORD}
					label={t('authentication:passwordConfirmationLabel')}
					rules={[
						{ required: true, message: t('formValidation:required', { field: t('authentication:passwordConfirmationLabel') }) },
						({ getFieldValue }) => ({
							validator(_: any, value: string) {
								if (!value || getFieldValue(ResetPasswordRequestType.NEW_PASSWORD) === value) {
									return Promise.resolve();
								}
								return Promise.reject(t('formValidation:passwordConfirm'));
							}
						})
					]}
					hasFeedback
				>
					<Input.Password placeholder={t('authentication:passwordConfirmationLabel')} />
				</Form.Item>

				<Button type='primary' htmlType='submit'>
					{t('app:continue')}
				</Button>
			</Form>
		</div>
	);
}

CreateNewPassword.Layout = AuthLayout;

export default CreateNewPassword;
