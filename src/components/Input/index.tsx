import { forwardRef, ForwardRefRenderFunction } from "react";
import { maskMoney } from "utils/maskOutputs";
import * as S from "./styles";
import { InputProps } from "./types";

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
			<S.Label
				htmlFor={id}
				isActive={value === 0 || !!value || (isMoney && true)}
			>
				{label}
			</S.Label>
		</S.Container>
	);
};

export default forwardRef(Input);
