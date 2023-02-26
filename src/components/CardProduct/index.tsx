import Paper from "components/Paper";
import { maskMoney } from "utils/maskOutputs";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import IconButton from "components/IconButton";
import { ICardProductProps } from "./types";

export default function CardProduct({ product }: ICardProductProps) {
	const navigate = useNavigate();
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
					<IconButton onClick={() => navigate(`/produto/${product.id}`)}>
						<S.IconEdit />
					</IconButton>
				</S.WrapperPrice>
			</S.ProductItem>
		</Paper>
	);
}
