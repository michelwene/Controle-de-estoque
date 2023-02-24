export interface StepperProps {
	steps: Array<{
		id: string;
		title: string;
		description: string;
		component: React.FC<{
			goToNextStep: () => void;
			goToPreviousStep: () => void;
			handleClose: () => void;
		}>;
	}>;
	goToNextStep: () => void;
	goToPreviousStep: () => void;
	handleClose: () => void;
	currentStep: number;
	handleSubmit?: () => void;
}
