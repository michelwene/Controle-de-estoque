import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function Counter() {
	const navigate = useNavigate();
	return (
		<S.Container>
			<S.Description>Total de produtos cadastrados:</S.Description>
			<S.Counter onClick={() => navigate("/produtos")}>0</S.Counter>
		</S.Container>
	);
}
