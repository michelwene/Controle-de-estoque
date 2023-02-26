import * as S from "./styles";
import { EmptyMessageProps } from "./types";

export default function EmptyMessage({ text }: EmptyMessageProps) {
	return (
		<S.EmptyList>
			<S.EmptyListText>{text}</S.EmptyListText>
		</S.EmptyList>
	);
}
