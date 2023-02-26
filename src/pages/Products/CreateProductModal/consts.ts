import * as yup from "yup";

export const schema = yup.object().shape({
	name: yup.string().required("Nome é obrigatório"),
	description: yup.string(),
	price: yup.string(),
	stock: yup.string(),
	category: yup.string(),
});
