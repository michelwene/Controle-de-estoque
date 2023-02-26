import styled from "styled-components";

export const Container = styled.div`
	max-width: 620px;
	margin: 0 auto;

	height: 100%;

	margin-top: 2rem;
	padding: 0 1rem;
`;

export const PageTitle = styled.h1`
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 500;
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const ProductsList = styled.ul`
	padding: 1.5rem 0;

	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
`;
