import * as S from "./styles";

interface EmptyMessageProps {
	text: string;
}

export default function EmptyMessage({ text }: EmptyMessageProps) {
	return (
		<S.EmptyList>
			<S.EmptyListText>{text}</S.EmptyListText>
		</S.EmptyList>
	);
}
