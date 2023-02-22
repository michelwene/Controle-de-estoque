import Input from "components/Input";
import ModalLayout from "components/ModalLayout";
import { FormProvider, useForm } from "react-hook-form";
import * as S from "./styles";

interface ModalCreateCategoryProps {
	isShow: boolean;
	handleClose: () => void;
}

export default function ModalCreateCategory({
	isShow,
	handleClose,
}: ModalCreateCategoryProps) {
	const methods = useForm({
		defaultValues: {
			category: "",
		},
	});

	const { handleSubmit } = methods;

	const onSubmit = (data: { category: string }) => {
		console.log(data);
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
					<S.Wrapper>
						<S.Button onClick={handleSubmit(onSubmit)}>Criar</S.Button>
					</S.Wrapper>
				</S.Container>
			</ModalLayout>
		</FormProvider>
	);
}
