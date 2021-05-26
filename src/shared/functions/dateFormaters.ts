import i18n from 'i18n/i18n';
import moment from 'moment';

export const formatDate = date => moment(date).format('ll');

export const formatDateWithTime = (date: Date): string =>
	!date ? i18n.t('status:notUsed') : moment(date).locale(i18n.language).format('DD.MM.YYYY / h:mm a ');
