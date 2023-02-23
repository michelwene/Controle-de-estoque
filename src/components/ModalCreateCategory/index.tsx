import Input from "components/Input";
import ModalLayout from "components/ModalLayout";
import { FormProvider, useForm } from "react-hook-form";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { addCategories } from "redux/categoriesSlice";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import LoadingButton from "components/LoadingButton";

interface ModalCreateCategoryProps {
	isShow: boolean;
	handleClose: () => void;
}

export default function ModalCreateCategory({
	isShow,
	handleClose,
}: ModalCreateCategoryProps) {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);

	const methods = useForm({
		defaultValues: {
			category: "",
		},
	});

	const { handleSubmit } = methods;

	const onSubmit = (data: { category: string }) => {
		setIsLoading(true);
		const id = uuid();

		const formData = {
			name: data.category,
			id,
		};

		setTimeout(() => {
			dispatch(addCategories(formData));
			setIsLoading(false);
			handleClose();
		}, 3000);
	};

	return (
		<FormProvider {...methods}>
			<ModalLayout
				isShow={isShow}
				handleClose={handleClose}
				title="Criar categoria"
			>
				<S.Container>
					<Input name="category" label="Categoria" id="category" isRequired />
					<LoadingButton
						onClick={handleSubmit(onSubmit)}
						isLoading={isLoading}
						text="Criar"
					/>
				</S.Container>
			</ModalLayout>
		</FormProvider>
	);
}
