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
					<S.StepperWrapper key={step.id} active={index + 1 === currentStep}>
						<S.WrapperDot>
							<S.StepperDot active={index + 1 === currentStep}>
								<S.StepperNumber>{index + 1}</S.StepperNumber>
							</S.StepperDot>
							<S.StepperLine lastIndex={steps.length === index + 1} />
						</S.WrapperDot>
						<S.StepperBody>
							<S.WrapperStepperBody>
								<S.StepperHeader>
									<S.Title>{step.title}</S.Title>
									<S.Subtitle>{step.description}</S.Subtitle>
								</S.StepperHeader>
								{currentStep === index + 1 && (
									<S.StepperContent
										active={index + 1 === currentStep}
										id="teste"
									>
										<step.component
											goToNextStep={goToNextStep}
											goToPreviousStep={goToPreviousStep}
										/>
									</S.StepperContent>
								)}
							</S.WrapperStepperBody>
						</S.StepperBody>
					</S.StepperWrapper>
				);
			})}
		</S.StepperContainer>
	);
}
