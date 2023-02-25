import { forwardRef, ForwardRefRenderFunction } from "react";
import * as S from "./styles";
import { ButtonFabProps } from "./types";

const ButtonFab: ForwardRefRenderFunction<HTMLButtonElement, ButtonFabProps> = (
	{ onClick, icon, isLoading, ...rest },
	ref
) => {
	return (
		<S.Container ref={ref} onClick={onClick} {...rest} isLoading={isLoading}>
			{isLoading ? <S.LoadingIcon /> : <>{icon ?? <S.Icon />}</>}
		</S.Container>
	);
};

export default forwardRef(ButtonFab);
