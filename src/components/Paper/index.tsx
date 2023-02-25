import * as S from "./styles";

interface PaperProps {
	children: React.ReactNode;
}

export default function Paper({ children }: PaperProps) {
	return <S.Container>{children}</S.Container>;
}
