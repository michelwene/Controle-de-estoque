import Input from "components/InputForm";
import ModalCreateCategory from "components/ModalCreateCategory";
import Select from "components/Select";
import useToggle from "hooks/useToggle";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "redux/categoriesSlice";
import * as S from "./styles";
import { useFormContext } from "react-hook-form";
import { maskMoney, unMaskMoney } from "utils/maskOutputs";
import { useState } from "react";
import LoadingButton from "components/LoadingButton";
import { useProductsContext } from "context/ProductsProvider";
import { v4 as uuid } from "uuid";
import { StepOtherInformationProps } from "./types";
import { addReport } from "redux/reportsSlice";
import { format } from "date-fns";
import { FormData } from "../../types";

export default function StepOtherInformation({
	goToPreviousStep,
	handleClose,
}: StepOtherInformationProps) {
	const dispatch = useDispatch();
	const { addProduct } = useProductsContext();
	const [isLoading, setIsLoading] = useState(false);
	const { handleSubmit } = useFormContext();
	const categories = useSelector(selectCategories);
	const [value, toggle] = useToggle();

	function onSubmit(data: FormData) {
		setIsLoading(true);
		const dataFormatted = {
			id: uuid(),
			name: data.name!,
			description: data.description,
			price: data.price ? unMaskMoney(data.price) : 0,
			stock: data.stock ? Number(data.stock) : 0,
			category: data.category,
			created_at: new Date(),
		};

		setTimeout(() => {
			addProduct(dataFormatted);
			setIsLoading(false);
			handleClose();
		}, 3000);

		dispatch(
			addReport({
				id: uuid(),
				type: "create_product",
				data: {
					name: dataFormatted.name,
					created_at: format(dataFormatted.created_at, "dd/MM/yyyy HH:mm"),
					price: maskMoney(dataFormatted.price),
					category: dataFormatted.category || "N/C",
				},
			})
		);
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
