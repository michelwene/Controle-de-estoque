import * as S from "./styles";

interface FormHelperErrorProps {
	text: string;
}

export default function FormHelperError({ text }: FormHelperErrorProps) {
	return (
		<S.Container>
			<S.Text>{text}</S.Text>
		</S.Container>
	);
}
