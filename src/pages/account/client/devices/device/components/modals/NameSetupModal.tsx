import styles from './Modals.module.scss';
import { Input, Modal, Form } from 'antd';
import { Checkmark } from 'assets/images/icons/Skills';

interface INameSetupModal {
	setModalClose: () => void;
	setValues: (values) => any;
}

function NameSetupModal({ setModalClose, setValues }: INameSetupModal) {
	return (
		<Modal
			className={styles.modal}
			visible={true}
			onCancel={setModalClose}
			cancelText={'BACK'}
			okText={'DONE'}
			cancelButtonProps={{
				icon: <img className={styles.backIcon} src={require('assets/images/icons/Device/modals/arrow.svg')} alt='Check' />
			}}
			okButtonProps={{ form: 'nameSetupModal', htmlType: 'submit', icon: <Checkmark className={styles.checkmark} /> }}
		>
			<p>Wybierz nazwe do urządzenia</p>

			<Form id='nameSetupModal' onFinish={values => setValues(values)}>
				<Form.Item className={styles['modal__input']} name={'Input'}>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	);
}

NameSetupModal.defaultProps = {
	setModalClose: () => {
		return;
	}
};

export default NameSetupModal;
