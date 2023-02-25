import Paper from "components/Paper";
import { Product } from "types/ProductsProvider";
import { maskMoney } from "utils/maskOutputs";
import * as S from "./styles";

interface ICardProductProps {
	product: Product;
}

export default function CardProduct({ product }: ICardProductProps) {
	return (
		<Paper>
			<S.ProductItem>
				<S.ProductInfo>
					<S.ProductName>{product.name}</S.ProductName>
					<S.ProductDescription>{product.description}</S.ProductDescription>
					<S.ProductCategory>{product.category}</S.ProductCategory>
				</S.ProductInfo>
				<S.WrapperPrice>
					<S.ProductPrice>{maskMoney(product.price)}</S.ProductPrice>
				</S.WrapperPrice>
			</S.ProductItem>
		</Paper>
	);
}
