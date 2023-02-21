import * as S from "./styles";
import { useNavigate } from "react-router-dom";

type Props = {
	title: string;
};

export default function Title({ title }: Props) {
	const navigate = useNavigate();
	return (
		<S.Container>
			<S.Title onClick={() => navigate("/")}>{title}</S.Title>
		</S.Container>
	);
}
