import { message } from 'antd';
import api from '../api';
import { AxiosError } from 'axios';
import i18n from 'i18n/i18n';

const responseInterceptor = () => {
	api.interceptors.response.use(
		response => response,
		(error: AxiosError) => {
			if (error.response.status === 500) {
				message.error({
					content: i18n.t('errors:serverProblem'),
					icon: <img src={require('assets/images/icons/error.svg')} alt='error' />
				});
			}

			if (error.response.status === 400) {
				message.error(i18n.t('errors:serverProblem'));
			}

			return Promise.reject(error);
		}
	);
};

export default responseInterceptor;
