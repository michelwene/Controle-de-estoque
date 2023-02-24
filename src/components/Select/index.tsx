import * as S from "./styles";
import { Controller, useFormContext } from "react-hook-form";

interface SelectProps {
	options: Array<{
		id: string;
		name: string;
	}>;
	name: string;
	label: string;
}

export default function Select({ name, options, label }: SelectProps) {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			defaultValue=""
			control={control}
			render={(inputProps) => (
				<S.SelectWrapper>
					<S.Select
						value={inputProps.field.value}
						onChange={(e) => inputProps.field.onChange(e.target.value)}
					>
						<S.Option value="" selected>
							{label}
						</S.Option>
						{options.map((category) => (
							<S.Option key={category.id} value={category.name}>
								{category.name}
							</S.Option>
						))}
					</S.Select>
				</S.SelectWrapper>
			)}
		/>
	);
}
