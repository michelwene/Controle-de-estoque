import {
	forwardRef,
	ForwardRefRenderFunction,
	HTMLInputTypeAttribute,
} from "react";
import { maskMoney } from "utils/maskOutputs";
import * as S from "./styles";

interface InputProps {
	value: string;
	onChange: (value: string) => void;
	name: string;
	type?: HTMLInputTypeAttribute;
	error?: boolean;
	label?: string;
	id: string;
	isMoney?: boolean;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ value, onChange, name, type, id, error, label, isMoney, ...rest },
	ref
) => {
	return (
		<S.Container>
			<S.Input
				ref={ref}
				name={name}
				{...rest}
				type={type}
				id={id}
				onChange={(e) => {
					if (type === "number") {
						const onlyNumbersWithoutTrace = e.target.value.replace(
							/[^0-9]/g,
							""
						);
						onChange(onlyNumbersWithoutTrace);
					} else if (isMoney) {
						onChange(maskMoney(e.target.value));
					} else {
						onChange(e.target.value);
					}
				}}
				min={type === "number" ? 0 : undefined}
				value={isMoney ? maskMoney(value ?? "") : value}
				isError={error}
			/>
			<S.Label htmlFor={id} isActive={!!value || (isMoney && true)}>
				{label}
			</S.Label>
		</S.Container>
	);
};

export default forwardRef(Input);
