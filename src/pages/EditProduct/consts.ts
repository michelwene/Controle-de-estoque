import * as Yup from "yup";

export const schema = Yup.object().shape({
	name: Yup.string().required("Nome é obrigatório"),
	description: Yup.string(),
	price: Yup.string(),
	stock: Yup.string(),
	category: Yup.string(),
});
