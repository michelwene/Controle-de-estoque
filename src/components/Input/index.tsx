import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import * as S from "./styles";
interface InputProps {
	name: string;
	id: string;
	label: string;
	isRequired?: boolean;
}
import { Controller, useFormContext } from "react-hook-form";

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, id, label, isRequired, ...rest },
	ref
) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			rules={{
				required: isRequired ? "Campo obrigatório" : false,
			}}
			render={(inputProps) => (
				<S.Container>
					<S.Input
						ref={ref}
						name={name}
						{...rest}
						type="text"
						id={id}
						onChange={(e) => {
							inputProps.field.onChange(e);
						}}
						value={inputProps.field.value}
					/>
					<S.Label htmlFor={id} isActive={!!inputProps.field.value}>
						{label}
					</S.Label>
				</S.Container>
			)}
		/>
	);
};

export default forwardRef(Input);
