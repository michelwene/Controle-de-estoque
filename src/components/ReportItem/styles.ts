import styled from "styled-components";

export const CardWrapper = styled.li`
	border-bottom: 1px solid #d7d8da;

	padding: 1.5rem 2rem;
	width: 100%;

	&:last-child {
		border-bottom: none;
	}
`;

export const CardText = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.sm};
	font-weight: 400;
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.primary};
`;
