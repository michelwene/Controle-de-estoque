import styled from "styled-components";
import { MdModeEditOutline } from "react-icons/md";

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

export const WrapperPrice = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;

export const ProductPrice = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 500;
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const IconEdit = styled(MdModeEditOutline)`
	font-size: ${({ theme }) => theme.fontSizes.xl};
`;
