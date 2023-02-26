/* eslint-disable no-mixed-spaces-and-tabs */
import { forwardRef, ForwardRefRenderFunction } from "react";

import { Controller, useFormContext } from "react-hook-form";
import FormHelperError from "components/FormHelperError";
import { InputFormProps } from "./types";
import Input from "components/Input";

const InputForm: ForwardRefRenderFunction<HTMLInputElement, InputFormProps> = (
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
					<Input
						ref={ref}
						id={id}
						name={name}
						onChange={(value) => inputProps.field.onChange(value)}
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

export default forwardRef(InputForm);
