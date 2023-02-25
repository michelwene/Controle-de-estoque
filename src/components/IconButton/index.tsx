import { forwardRef, ForwardRefRenderFunction } from "react";
import * as S from "./styles";

interface IconButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
}

const IconButton: ForwardRefRenderFunction<
	HTMLButtonElement,
	IconButtonProps
> = ({ children, onClick }, ref) => {
	return (
		<S.ButtonBack onClick={onClick} ref={ref}>
			{children}
		</S.ButtonBack>
	);
};

export default forwardRef(IconButton);
