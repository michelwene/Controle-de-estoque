/* eslint-disable no-mixed-spaces-and-tabs */
import {
	forwardRef,
	ForwardRefRenderFunction,
	HTMLInputTypeAttribute,
} from "react";
import * as S from "./styles";

interface InputProps {
	name: string;
	id: string;
	label: string;
	isRequired?: boolean;
	isMoney?: boolean;
	type?: HTMLInputTypeAttribute;
}
import { Controller, useFormContext } from "react-hook-form";
import { maskMoney } from "utils/maskOutputs";
import FormHelperError from "components/FormHelperError";

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, id, label, isRequired, isMoney, type = "text", ...rest },
	ref
) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue=""
			rules={{
				required: isRequired ? "Campo obrigatório" : false,
			}}
			render={(inputProps) => (
				<>
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
									inputProps.field.onChange(onlyNumbersWithoutTrace);
								} else if (isMoney) {
									inputProps.field.onChange(maskMoney(e.target.value));
								} else {
									inputProps.field.onChange(e.target.value);
								}
							}}
							min={type === "number" ? 0 : undefined}
							value={
								isMoney
									? maskMoney(inputProps.field.value ?? "")
									: inputProps.field.value
							}
							isError={inputProps.fieldState.error && true}
						/>
						<S.Label
							htmlFor={id}
							isActive={!!inputProps.field.value || (isMoney && true)}
						>
							{label}
						</S.Label>
					</S.Container>
					{inputProps.fieldState.error && (
						<FormHelperError text={inputProps.fieldState.error.message + ""} />
					)}
				</>
			)}
		/>
	);
};

export default forwardRef(Input);
