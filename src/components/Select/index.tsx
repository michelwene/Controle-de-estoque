import * as S from "./styles";

interface SelectProps {
	options: Array<{
		id: string;
		name: string;
	}>;
	label: string;
}

export default function Select({ options, label }: SelectProps) {
	return (
		<S.SelectWrapper>
			<S.Select>
				<S.Option value="" disabled selected>
					{label}
				</S.Option>
				{options.map((category) => (
					<S.Option key={category.id} value={category.id}>
						{category.name}
					</S.Option>
				))}
			</S.Select>
		</S.SelectWrapper>
	);
}
