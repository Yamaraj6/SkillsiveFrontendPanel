import ClientPanelLayout from 'layouts/ClientPanelLayout';
import styles from './Support.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

function Support() {
	const { t } = useTranslation(['support']);

	return (
		<div className={styles.main}>
			<h1>Describe your problem</h1>

			<Form requiredMark={false} layout='vertical' onFinish={console.log} className={styles['form-content']}>
				<Form.Item
					className={styles['orm-item']}
					name={'Title'}
					label={'Title'}
					rules={[{ required: true, message: 'This field is required' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name='Description'
					label={'Description'}
					className={styles['form-item']}
					rules={[{ required: true, message: 'This field is required' }]}
				>
					<TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
				</Form.Item>

				<Form.Item className={styles['button-container']}>
					<Button type='primary' htmlType='submit'>
						{t('send')}
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

Support.Layout = ClientPanelLayout;

export default Support;
