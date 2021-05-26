import AuthLayout from 'layouts/AuthLayout';
import BaseForm from './components/BaseForm';
import { ICountry } from 'services/api/apiModels/app/countries';
import { Form, Checkbox, Button } from 'antd';
import Link from 'next/link';
import * as React from 'react';
import styles from './Register.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { RegisterRequestType, IRegisterRequest } from 'services/api/apiModels/client/register';
import { useDispatch, useSelector } from 'react-redux';
import { clientOperations } from 'state/ducks/client';
import routing from 'shared/routing';
import { appOperations, appSelectors } from 'state/ducks/app';

function Register(): React.ReactElement {
	const { t } = useTranslation(['register', 'authentication, app']);
	const router = useRouter();
	const { UserIdentification, UserSocialEmail, Type } = router.query;
	const countries: ICountry[] = useSelector(appSelectors.getCountries);
	const dispatch = useDispatch();

	const onSubmit = (values: IRegisterRequest) => {
		const data = UserSocialEmail
			? {
					...values,
					IsSocialRegister: true,
					UserIdentificationNumber: UserIdentification.toString(),
					Type: Number(Type)
			  }
			: values;

		dispatch(clientOperations.register(data));
	};

	useEffect(() => {
		dispatch(appOperations.getCountries());
	}, []);

	return (
		<>
			<div className={styles.box}>
				<div>
					<h3> {t('createYourAccount')} </h3>
					<p>{t('paragraph')}</p>
				</div>

				<Form
					requiredMark={false}
					layout='vertical'
					onFinish={onSubmit}
					className={styles['box__form-content']}
					initialValues={{
						[RegisterRequestType.EMAIL]: UserSocialEmail
					}}
				>
					<div className={styles.scrollbar}>
						<BaseForm countries={countries} />
					</div>

					<Form.Item className={styles['register-form-button']}>
						<Button type='primary' htmlType='submit'>
							{t('createAccount')}
						</Button>
					</Form.Item>

					<Form.Item
						name={RegisterRequestType.AGREEMENT}
						valuePropName='checked'
						className={styles['register-form-checkbox']}
						rules={[
							{
								validator: (_: any, value: string) =>
									value ? Promise.resolve() : Promise.reject(t('app:termsAndConditionsError'))
							}
						]}
					>
						<Checkbox>
							{t('app:iAccept')} <a href={`${routing.dashboard}`}>{t('app:termsAndConditions')}</a>
						</Checkbox>
					</Form.Item>
				</Form>
			</div>

			<div className={styles['back-to-account']}>
				<p>
					{t('app:backTo')} <Link href={`${routing.authentication.login}`}>{t('authentication:backToLogin')}</Link>
				</p>
			</div>
		</>
	);
}

Register.Layout = AuthLayout;

export default Register;
