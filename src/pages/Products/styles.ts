import styled from "styled-components";

export const Container = styled.div`
	max-width: 620px;
	margin: 0 auto;

	height: 100%;

	margin-top: 2rem;
`;

export const PageTitle = styled.h1`
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 500;
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const ProductsList = styled.ul`
	margin-top: 1.5rem;

	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
`;

export const ProductItem = styled.li`
	display: flex;
	justify-content: space-between;
`;

export const ProductInfo = styled.div``;

export const ProductName = styled.h2`
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 500;
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const ProductDescription = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.sm};
	font-weight: 400;
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.primary};

	margin-top: 0.5rem;
`;

export const ProductCategory = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.xs};
	font-weight: 400;
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const WrapperPrice = styled.div``;

export const ProductPrice = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 500;
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.primary};
`;
