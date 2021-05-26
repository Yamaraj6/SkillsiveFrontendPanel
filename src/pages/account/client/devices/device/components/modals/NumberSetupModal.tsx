import styles from './Modals.module.scss';
import { Input, Modal, Form } from 'antd';
import { Checkmark } from 'assets/images/icons/Skills';
import { useEffect, useState } from 'react';

interface INameSetupModal {
	setModalClose: () => void;
	setValues: (values) => any;
}

function NumberSetupModal({ setModalClose, setValues }: INameSetupModal) {
	const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const [numberValue, setValue] = useState<number>(0);
	const [form] = Form.useForm();

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

			<Form id='nameSetupModal' form={form} onFinish={values => setValues(values)}>
				<Form.Item initialValue className={styles['modal__input']} name={'Input'}>
					<Input type='number' maxLength={20} />
				</Form.Item>
			</Form>

			<div className={styles['numbers-container']}>
				{boxes.map((value, key) => {
					return (
						<div
							key={key}
							onClick={() => {
								form.setFieldsValue({
									Input: Number(`${numberValue}${value}`)
								});
								setValue(Number(`${numberValue}${value}`));
							}}
							className={styles['numbers-container__box']}
						>
							{value}
						</div>
					);
				})}
			</div>
		</Modal>
	);
}

NumberSetupModal.defaultProps = {
	setModalClose: () => {
		return;
	}
};

export default NumberSetupModal;
