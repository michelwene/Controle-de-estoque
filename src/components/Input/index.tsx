import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import * as S from "./styles";
interface InputProps {
	name: string;
	id: string;
	label: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, id, label, ...rest },
	ref
) => {
	const [isActive, setIsActive] = useState(false);
	const [value, setValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		setIsActive(!!e.target.value);
	};
	return (
		<S.Container>
			<S.Input
				ref={ref}
				name={name}
				{...rest}
				type="text"
				id={id}
				onChange={handleChange}
				value={value}
			/>
			<S.Label htmlFor={id} isActive={isActive}>
				{label}
			</S.Label>
		</S.Container>
	);
};

export default forwardRef(Input);
