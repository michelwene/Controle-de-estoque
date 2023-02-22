import Input from "components/Input";
import Select from "components/Select";
import { useState } from "react";
import * as S from "./styles";

interface StepOtherInformationProps {
	goToPreviousStep: () => void;
}

type Category = {
	id: string;
	name: string;
};

export default function StepOtherInformation({
	goToPreviousStep,
}: StepOtherInformationProps) {
	const [categories, setCategories] = useState<Category[]>([
		{ id: "1", name: "Categoria 1" },
	]);
	return (
		<S.Container>
			<Input name="price" id="price" label="Preço do produto" isMoney />
			<Input name="stock" id="stock" label="Estoque inicial" />
			<Select options={categories} label="Categorias" />

			<S.Wrapper>
				<S.Button onClick={goToPreviousStep} isPrevious>
					Voltar
				</S.Button>
				<S.Button onClick={goToPreviousStep}>Salvar</S.Button>
			</S.Wrapper>
		</S.Container>
	);
}
