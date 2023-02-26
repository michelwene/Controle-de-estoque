import * as S from "./styles";
import { PaperProps } from "./types";

export default function Paper({ children }: PaperProps) {
	return <S.Container>{children}</S.Container>;
}
