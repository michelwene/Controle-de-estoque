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

export const WrapperTotalPrice = styled.div`
	margin: 1rem 0;
`;

export const TitleWrapperTotalPrice = styled.h2`
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 500;
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const TotalPrice = styled.h2`
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 600;
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Card = styled.div`
	background: ${({ theme }) => theme.background.shape};
	border-radius: 0.5rem;

	margin-top: 1.5rem;

	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
	max-height: 500px;
	overflow-y: auto;
`;

export const CardHeader = styled.div`
	width: 100%;
`;

export const CardTitle = styled.h2`
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 500;
	color: ${({ theme }) => theme.colors.black};
	font-family: ${({ theme }) => theme.fonts.primary};

	text-align: center;
	padding-top: 1rem;
`;

export const CardBody = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	gap: 0.5rem;
	margin-top: 1rem;

	width: 100%;
`;
