import Input from "components/Input";
import * as S from "./styles";

interface StepOtherInformationProps {
	goToPreviousStep: () => void;
}

export default function StepOtherInformation({
	goToPreviousStep,
}: StepOtherInformationProps) {
	return (
		<S.Container>
			<Input name="price" id="price" label="Preço do produto" />
			<Input name="stock" id="stock" label="Estoque inicial" />
			<Input name="category" id="category" label="Categoria" />
			<S.Wrapper>
				<S.Button onClick={goToPreviousStep} isPrevious>
					Voltar
				</S.Button>
				<S.Button onClick={goToPreviousStep}>Salvar</S.Button>
			</S.Wrapper>
		</S.Container>
	);
}
