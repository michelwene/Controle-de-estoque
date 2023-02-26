import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useProductsContext } from "context/ProductsProvider";
import IconButton from "components/IconButton";
import { useNavigate } from "react-router-dom";
import Input from "components/InputForm";
import { useForm, FormProvider } from "react-hook-form";
import Select from "components/Select";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "redux/categoriesSlice";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonFab from "components/ButtonFab";
import { useState } from "react";
import { unMaskMoney } from "utils/maskOutputs";
import useToggle from "hooks/useToggle";
import ModalCreateCategory from "components/ModalCreateCategory";
import ModalConfirmationDelection from "components/ModalConfirmationDelection";
import { format } from "date-fns";
import { addReport } from "redux/reportsSlice";
import { v4 as uuid } from "uuid";

export const schema = Yup.object().shape({
	name: Yup.string().required("Nome é obrigatório"),
	description: Yup.string(),
	price: Yup.string(),
	stock: Yup.string(),
	category: Yup.string(),
});

export type FormData = {
	name?: string;
	description?: string;
	price?: string | number;
	stock?: string | number;
	category?: string;
};

export default function EditProduct() {
	const { id } = useParams<{ id: string }>();
	const { products, updateProduct, removeProduct } = useProductsContext();
	const categories = useSelector(selectCategories);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingDelete, setIsLoadingDelete] = useState(false);
	const [isOpenModalDelection, setIsOpenModalDelection] = useState(false);
	const [value, toggle] = useToggle();
	const dispatch = useDispatch();

	const product = products.find((product) => product.id === id);
	if (!product) {
		return (
			<S.Container>
				<h1>Produto não encontrado</h1>
			</S.Container>
		);
	}

	const navigate = useNavigate();
	const methods = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			name: product.name,
			description: product.description,
			price: product.price,
			stock: product.stock,
			category: product.category,
		},
	});

	const { handleSubmit } = methods;

	const onSubmit = (data: FormData) => {
		setIsLoading(true);
		const dataFormatted = {
			...product,
			id: product.id,
			name: data.name as string,
			description: data.description as string,
			category: data.category as string,
			stock: data.stock ? Number(data.stock) : (0 as number),
			price: data.price ? unMaskMoney(data.price as string) : (0 as number),
			updated_at: new Date(),
		};
		setTimeout(() => {
			updateProduct(dataFormatted);
			setIsLoading(false);
		}, 3000);

		dispatch(
			addReport({
				id: uuid(),
				type: "update",
				data: {
					name: product.name,
					created_at: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
				},
			})
		);
	};

	const handleOpenModalDelection = () => {
		setIsOpenModalDelection(true);
	};

	const handleCloseModalDelection = () => {
		setIsOpenModalDelection(false);
	};

	const handleDelete = () => {
		setIsLoadingDelete(true);
		setTimeout(() => {
			handleCloseModalDelection();
			removeProduct(product.id);
			setIsLoadingDelete(false);

			navigate("/produtos");
		}, 3000);

		dispatch(
			addReport({
				id: uuid(),
				type: "delete",
				data: {
					name: product.name,
					created_at: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
				},
			})
		);
	};

	return (
		<FormProvider {...methods}>
			<S.Container>
				<S.ContentHeader>
					<S.WrapperHeader>
						<IconButton onClick={() => navigate(-1)}>
							<S.IconBack />
						</IconButton>
						<S.Title>Editar produto: {product.name}</S.Title>
					</S.WrapperHeader>
					<IconButton onClick={handleOpenModalDelection}>
						<S.IconDelete />
					</IconButton>
				</S.ContentHeader>
				<S.WrapperInfo>
					<S.Info>
						Criado em:{" "}
						{product.created_at
							? format(new Date(product.created_at!), "dd/MM/yyyy HH:mm:ss")
							: " - "}
					</S.Info>
					{product.updated_at && (
						<S.Info>
							Atualizado em:{" "}
							{format(new Date(product.updated_at), "dd/MM/yyyy HH:mm:ss")}
						</S.Info>
					)}
				</S.WrapperInfo>
				<S.Content>
					<Input name="name" label="Nome" id="name" isRequired />
					<Input name="description" label="Descrição" id="description" />
					<Input name="price" label="Preço" id="price" isMoney />
					<Input name="stock" label="Estoque" id="stock" type="number" />
					<S.CategoryWrapper>
						<Select name="category" label="Categorias" options={categories} />
						<S.ButtonCreateCategory onClick={toggle}>
							<S.Icon />
						</S.ButtonCreateCategory>
					</S.CategoryWrapper>
				</S.Content>
			</S.Container>
			<ButtonFab
				onClick={handleSubmit(onSubmit)}
				icon={<S.IconSave />}
				isLoading={isLoading}
			/>
			{value && <ModalCreateCategory isShow={value} handleClose={toggle} />}
			<ModalConfirmationDelection
				text="Deseja Realmente excluir este produto?"
				onConfirm={handleDelete}
				onCancel={handleCloseModalDelection}
				isOpen={isOpenModalDelection}
				isLoading={isLoadingDelete}
			/>
		</FormProvider>
	);
}
