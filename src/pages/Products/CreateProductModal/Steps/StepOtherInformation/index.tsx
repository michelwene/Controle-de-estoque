/* eslint-disable @typescript-eslint/ban-ts-comment */
import Input from "components/Input";
import ModalCreateCategory from "components/ModalCreateCategory";
import Select from "components/Select";
import useToggle from "hooks/useToggle";
import { useSelector } from "react-redux";
import { selectCategories } from "redux/categoriesSlice";
import * as S from "./styles";

interface StepOtherInformationProps {
	goToPreviousStep: () => void;
}

export default function StepOtherInformation({
	goToPreviousStep,
}: StepOtherInformationProps) {
	const categories = useSelector(selectCategories);
	const [value, toggle] = useToggle();

	console.log(categories);
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
