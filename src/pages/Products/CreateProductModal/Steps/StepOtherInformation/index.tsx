import Input from "components/Input";
import ModalCreateCategory from "components/ModalCreateCategory";
import Select from "components/Select";
import useToggle from "hooks/useToggle";
import { useSelector } from "react-redux";
import { selectCategories } from "redux/categoriesSlice";
import * as S from "./styles";
import { useFormContext } from "react-hook-form";
import { FormData } from "../..";
import { unMaskMoney } from "utils/maskOutputs";
import { useState } from "react";
import LoadingButton from "components/LoadingButton";

interface StepOtherInformationProps {
	goToPreviousStep: () => void;
}

export default function StepOtherInformation({
	goToPreviousStep,
}: StepOtherInformationProps) {
	const [isLoading, setIsLoading] = useState(false);
	const { handleSubmit } = useFormContext();
	const categories = useSelector(selectCategories);
	const [value, toggle] = useToggle();

	function onSubmit(data: FormData) {
		setIsLoading(true);
		const dataFormatted = {
			name: data.name,
			description: data.description,
			price: data.price ? unMaskMoney(data.price) : 0,
			stock: data.stock ? Number(data.stock) : 0,
			category: data.category,
			created_at: new Date(),
		};

		setTimeout(() => {
			console.log(dataFormatted);
			setIsLoading(false);
		}, 3000);
	}

	return (
		<>
			<S.Container>
				<Input name="price" id="price" label="Preço do produto" isMoney />
				<Input name="stock" id="stock" label="Estoque inicial" type="number" />
				<S.CategoryWrapper>
					<Select options={categories} label="Categorias" name="category" />
					<S.ButtonCreateCategory onClick={toggle}>
						<S.Icon />
					</S.ButtonCreateCategory>
				</S.CategoryWrapper>

				<S.Wrapper>
					<S.Button onClick={goToPreviousStep} isPrevious disabled={isLoading}>
						Voltar
					</S.Button>
					<LoadingButton
						text="Salvar"
						isLoading={isLoading}
						onClick={handleSubmit(onSubmit)}
					/>
				</S.Wrapper>
			</S.Container>
			{value && <ModalCreateCategory isShow={value} handleClose={toggle} />}
		</>
	);
}
