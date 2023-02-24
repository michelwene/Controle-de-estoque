import * as S from "./styles";
import { LoadingButtonProps } from "./types";

export default function LoadingButton({
	onClick,
	isLoading,
	text,
}: LoadingButtonProps) {
	return (
		<S.Wrapper>
			<S.Button onClick={onClick} isLoading={isLoading}>
				{isLoading && <S.LoadingIcon />}
				{text}
			</S.Button>
		</S.Wrapper>
	);
}
