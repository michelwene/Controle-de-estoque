import * as S from "./styles";

interface LoadingButtonProps {
	onClick: () => void;
	isLoading?: boolean;
	text: string;
}

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
