import Input from "components/Input";
import * as S from "./styles";

interface StepBasicInformationProps {
	goToNextStep: () => void;
}

export default function StepBasicInformation({
	goToNextStep,
}: StepBasicInformationProps) {
	return (
		<S.Container>
			<Input name="name" id="name" label="Nome*" />
			<Input name="description" id="description" label="Descrição" />
			<S.Wrapper>
				<S.ButtonNext onClick={goToNextStep}>Próximo</S.ButtonNext>
			</S.Wrapper>
		</S.Container>
	);
}
