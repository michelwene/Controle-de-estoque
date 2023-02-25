import ButtonFab from "components/ButtonFab";
import CreateProductModal from "pages/Products/CreateProductModal";
import useToggle from "hooks/useToggle";
import { useProductsContext } from "context/ProductsProvider";
import * as S from "./styles";
import Paper from "components/Paper";
import { maskMoney } from "utils/maskOutputs";

export default function Products() {
	const [value, toggle] = useToggle(false);
	const { products } = useProductsContext();
	console.log("products:", products);
	return (
		<>
			<S.Container>
				<S.PageTitle>Lista de produtos</S.PageTitle>

				<S.ProductsList>
					{products.map((product) => (
						<Paper key={product.id}>
							<S.ProductItem>
								<S.ProductInfo>
									<S.ProductName>{product.name}</S.ProductName>
									<S.ProductDescription>
										{product.description}
									</S.ProductDescription>
									<S.ProductCategory>{product.category}</S.ProductCategory>
								</S.ProductInfo>
								<S.WrapperPrice>
									<S.ProductPrice>{maskMoney(product.price)}</S.ProductPrice>
								</S.WrapperPrice>
							</S.ProductItem>
						</Paper>
					))}
				</S.ProductsList>
			</S.Container>
			<ButtonFab onClick={toggle} />
			{value && <CreateProductModal isShow={value} handleClose={toggle} />}
		</>
	);
}
