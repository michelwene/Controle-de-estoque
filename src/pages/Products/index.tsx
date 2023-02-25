import ButtonFab from "components/ButtonFab";
import CreateProductModal from "pages/Products/CreateProductModal";
import useToggle from "hooks/useToggle";
import { useProductsContext } from "context/ProductsProvider";
import * as S from "./styles";

import CardProduct from "components/CardProduct";
import EmptyMessage from "components/EmptyMessage";

export default function Products() {
	const [value, toggle] = useToggle(false);
	const { products } = useProductsContext();
	console.log("products:", products);
	return (
		<>
			<S.Container>
				<S.PageTitle>Lista de produtos</S.PageTitle>

				<S.ProductsList>
					{products.length === 0 && (
						<EmptyMessage text="Não foi encontrado produtos cadastrados 😥" />
					)}
					{products.map((product) => (
						<CardProduct product={product} key={product.id} />
					))}
				</S.ProductsList>
			</S.Container>
			<ButtonFab onClick={toggle} />
			{value && <CreateProductModal isShow={value} handleClose={toggle} />}
		</>
	);
}
