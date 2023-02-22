import styled from "styled-components";

export const SelectWrapper = styled.div`
	flex: 1;
`;

export const Select = styled.select`
	width: 100%;
	height: 2.5rem;
	outline: none;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 0 0.5rem;
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Option = styled.option`
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fonts.primary};

	padding: 0.5rem;

	&:first-child {
		color: #999;
	}
`;
