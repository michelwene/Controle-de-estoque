import { forwardRef, ForwardRefRenderFunction } from "react";
import * as S from "./styles";

interface ButtonFabProps {
	onClick?: () => void;
}

const ButtonFab: ForwardRefRenderFunction<HTMLButtonElement, ButtonFabProps> = (
	{ onClick, ...rest },
	ref
) => {
	return (
		<S.Container ref={ref} onClick={onClick} {...rest}>
			<S.Icon />
		</S.Container>
	);
};

export default forwardRef(ButtonFab);
