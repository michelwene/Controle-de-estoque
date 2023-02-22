import ModalLayout from "components/ModalLayout";
import Stepper from "components/Stepper";
import useStep from "hooks/useStep";
import StepBasicInformation from "./Steps/StepBasicInformation";
import StepOtherInformation from "./Steps/StepOtherInformation";
import * as S from "./styles";

interface CreateProductModalProps {
	isShow: boolean;
	handleClose: () => void;
}

const steps = [
	{
		id: "1",
		title: "Informações",
		description: "Informações básicas do produto",
		component: StepBasicInformation,
	},
	{
		id: "2",
		title: "Outras Informações",
		description: "Informações adicionais do produto",
		component: StepOtherInformation,
	},
];

export default function CreateProductModal({
	isShow,
	handleClose,
}: CreateProductModalProps) {
	const [currentStep, { goToNextStep, goToPrevStep }] = useStep(steps.length);
	return (
		<ModalLayout
			isShow={isShow}
			handleClose={handleClose}
			title="Criar Produto"
		>
			<Stepper
				steps={steps}
				currentStep={currentStep}
				goToNextStep={goToNextStep}
				goToPreviousStep={goToPrevStep}
			/>
		</ModalLayout>
	);
}
