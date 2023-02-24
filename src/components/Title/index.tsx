import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { Props } from "./types";

export default function Title({ title }: Props) {
	const navigate = useNavigate();
	return (
		<S.Container>
			<S.Title onClick={() => navigate("/")}>{title}</S.Title>
		</S.Container>
	);
}
