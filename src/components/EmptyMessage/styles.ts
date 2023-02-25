import styled from "styled-components";

export const EmptyList = styled.div`
	margin-top: 2rem;
`;

export const EmptyListText = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-family: ${({ theme }) => theme.fonts.primary};
	font-weight: 500;

	text-align: center;
`;
