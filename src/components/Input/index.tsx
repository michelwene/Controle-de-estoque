/* eslint-disable no-mixed-spaces-and-tabs */
import { forwardRef, ForwardRefRenderFunction } from "react";
import * as S from "./styles";

import { Controller, useFormContext } from "react-hook-form";
import { maskMoney } from "utils/maskOutputs";
import FormHelperError from "components/FormHelperError";
import { InputProps } from "./types";
import InputForm from "components/InputForm";

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
					<InputForm
						id={id}
						name={name}
						onChange={inputProps.field.onChange}
						value={inputProps.field.value}
						error={inputProps.fieldState.error && true}
						isMoney={isMoney}
						label={label}
						type={type}
					/>
					{inputProps.fieldState.error && (
						<FormHelperError text={inputProps.fieldState.error.message + ""} />
					)}
				</>
			)}
		/>
	);
};

export default forwardRef(Input);
