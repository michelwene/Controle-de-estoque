import Input from "components/Input";
import * as S from "./styles";
import { useFormContext } from "react-hook-form";
import { StepBasicInformationProps } from "./types";

export default function StepBasicInformation({
	goToNextStep,
}: StepBasicInformationProps) {
	const { handleSubmit } = useFormContext();

	function onSubmit() {
		goToNextStep();
	}
	return (
		<S.Container>
			<Input name="name" id="name" label="Nome*" />
			<Input name="description" id="description" label="Descrição" />
			<S.Wrapper>
				<S.ButtonNext onClick={handleSubmit(onSubmit)}>Próximo</S.ButtonNext>
			</S.Wrapper>
		</S.Container>
	);
}
