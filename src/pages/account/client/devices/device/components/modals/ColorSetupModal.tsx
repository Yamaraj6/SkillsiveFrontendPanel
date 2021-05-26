import styles from './Modals.module.scss';
import { Modal } from 'antd';
import { Checkmark } from 'assets/images/icons/Skills';
import { Color } from 'services/api/apiModels/devices/devices';
import getColor from 'shared/functions/getColor';

interface INameSetupModal {
	setModalClose: () => void;
}

function ColorSetupModal({ setModalClose }: INameSetupModal) {
	let colors = [];

	for (const item in Color) {
		if (isNaN(Number(item))) {
			colors = [...colors, getColor(Color[item])];
		}
	}

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

			<div className={styles['colors-container']}>
				{colors.map((color, key) => {
					return (
						<div
							onClick={() => console.log(key)}
							key={key}
							style={{ background: color }}
							className={styles['colors-container__box']}
						></div>
					);
				})}
			</div>
		</Modal>
	);
}

ColorSetupModal.defaultProps = {
	setModalClose: () => {
		return;
	}
};

export default ColorSetupModal;
