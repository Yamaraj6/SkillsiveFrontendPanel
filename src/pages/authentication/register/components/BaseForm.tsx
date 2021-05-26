import { Input, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { ICountry } from 'services/api/apiModels/app/countries';
import { RegisterRequestType } from 'services/api/apiModels/client/register';
import Select from 'components/Select/Select';
import { PASSWORD_CONFIRMATION_PATTERN } from 'shared/regexp';

export interface IBaseFormProps {
	countries: ICountry[];
}

function BaseForm({ countries }: IBaseFormProps): React.ReactElement {
	const { t } = useTranslation(['authentication', 'register', 'app']);

	return (
		<>
			<Form.Item name={RegisterRequestType.CNAME} label={t('companyNameLabel')}>
				<Input placeholder={t('companyName')} />
			</Form.Item>

			<Form.Item
				name={RegisterRequestType.EMAIL}
				label={t('emailLabel')}
				rules={[
					{
						type: 'email',
						message: t('emailNotValid')
					},
					{
						required: true,
						message: t('emailRequired')
					}
				]}
			>
				<Input placeholder={t('emailPlaceholder')} />
			</Form.Item>

			<Form.Item
				name={RegisterRequestType.PASSWORD}
				label={t('passwordLabel')}
				rules={[
					{
						required: true,
						message: t('passwordRequired')
					},
					{ pattern: PASSWORD_CONFIRMATION_PATTERN, message: t('formValidation:validPassword') }
				]}
				hasFeedback
			>
				<Input.Password placeholder={t('passwordPlaceholder')} />
			</Form.Item>

			<Form.Item
				name={RegisterRequestType.CONFIRM}
				label={t('passwordConfirmationLabel')}
				dependencies={[RegisterRequestType.PASSWORD]}
				hasFeedback
				rules={[
					{
						required: true,
						message: t('passwordConfirmationRequired')
					},
					({ getFieldValue }) => ({
						validator(_: any, value: string) {
							if (!value || getFieldValue(RegisterRequestType.PASSWORD) === value) {
								return Promise.resolve();
							}
							return Promise.reject(t('passwordConfirmError'));
						}
					})
				]}
			>
				<Input.Password placeholder={t('passwordConfirmationPlaceholder')} />
			</Form.Item>

			<Form.Item
				name={RegisterRequestType?.COUNTRY_ID}
				label={t('register:chooseYourCountryLabel')}
				rules={[
					{
						required: true,
						message: t('app:chooseYourCountryError')
					}
				]}
			>
				<Select data={countries} placeholder={t('register:chooseYourCountryPlaceholder')} translationKey={'countries'} />
			</Form.Item>
		</>
	);
}

export default BaseForm;
