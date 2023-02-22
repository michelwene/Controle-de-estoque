import Input from "components/Input";
import ModalCreateCategory from "components/ModalCreateCategory";
import Select from "components/Select";
import useToggle from "hooks/useToggle";
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
	const [value, toggle] = useToggle();
	const [categories, setCategories] = useState<Category[]>([
		{ id: "1", name: "Categoria 1" },
	]);
	return (
		<>
			<S.Container>
				<Input name="price" id="price" label="Preço do produto" isMoney />
				<Input name="stock" id="stock" label="Estoque inicial" />
				<S.CategoryWrapper>
					<Select options={categories} label="Categorias" />
					<S.ButtonCreateCategory onClick={toggle}>
						<S.Icon />
					</S.ButtonCreateCategory>
				</S.CategoryWrapper>

				<S.Wrapper>
					<S.Button onClick={goToPreviousStep} isPrevious>
						Voltar
					</S.Button>
					<S.Button onClick={goToPreviousStep}>Salvar</S.Button>
				</S.Wrapper>
			</S.Container>
			{value && <ModalCreateCategory isShow={value} handleClose={toggle} />}
		</>
	);
}
