import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useProductsContext } from "context/ProductsProvider";

export default function Counter() {
	const { products } = useProductsContext();
	const navigate = useNavigate();
	return (
		<S.Container>
			<S.Description>Total de produtos cadastrados:</S.Description>
			<S.Counter onClick={() => navigate("/produtos")}>
				{products.length > 99 ? "99+" : products.length}
			</S.Counter>
		</S.Container>
	);
}
