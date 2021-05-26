import styles from './Stepper.module.scss';
import { Steps } from 'antd';
import cx from 'classnames';

const { Step } = Steps;

interface IStepperProps {
	setCurrentStep: (currentStep: number) => void;
	currentStep: number;
	children: JSX.Element[];
	className?: string;
	steps: IStepperStep[];
}

interface IStepperStep {
	label: string;
	isAllowed: boolean;
}

function Stepper({ setCurrentStep, currentStep, steps, children, className }: IStepperProps) {
	return (
		<>
			<Steps
				current={currentStep}
				onChange={(current: number) => {
					setCurrentStep(current);
				}}
				className={cx(className, styles.mobile)}
				labelPlacement='vertical'
			>
				{steps.map(({ label, isAllowed }: IStepperStep) => (
					<Step title={label} key={label} disabled={!isAllowed} />
				))}
			</Steps>

			{children[currentStep]}
		</>
	);
}

Stepper.defaultProps = {
	className: ''
};

export default Stepper;
