import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useProductsContext } from "context/ProductsProvider";

export default function EditProduct() {
	const { id } = useParams<{ id: string }>();
	const { products } = useProductsContext();

	const product = products.find((product) => product.id === id);

	if (!product) {
		return (
			<S.Container>
				<h1>Produto não encontrado</h1>
			</S.Container>
		);
	}

	console.log("product to edit:", product);
	return (
		<S.Container>
			<h1>Editar produto {id}</h1>
		</S.Container>
	);
}
