import * as S from "./styles";

interface StepperProps {
	steps: Array<{
		id: string;
		title: string;
		description: string;
		component: React.FC<{
			goToNextStep: () => void;
			goToPreviousStep: () => void;
		}>;
	}>;
	goToNextStep: () => void;
	goToPreviousStep: () => void;
	currentStep: number;
	setStep: (step: number) => void;
	handleSubmit?: () => void;
}

export default function Stepper({
	currentStep,
	goToNextStep,
	goToPreviousStep,
	steps,
}: StepperProps) {
	return (
		<S.StepperContainer>
			{steps.map((step, index) => {
				return (
					<S.StepperWrapper key={step.id}>
						<S.WrapperDot active={index === currentStep}>
							<S.StepperDot>{index + 1}</S.StepperDot>
						</S.WrapperDot>
						<S.StepperHeader>
							<S.Title>{step.title}</S.Title>
							<S.Subtitle>{step.description}</S.Subtitle>
						</S.StepperHeader>
						<S.StepperContent active={index === currentStep}>
							<step.component
								goToNextStep={goToNextStep}
								goToPreviousStep={goToPreviousStep}
							/>
						</S.StepperContent>
					</S.StepperWrapper>
				);
			})}
		</S.StepperContainer>
	);
}
