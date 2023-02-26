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

export const Card = styled.div`
	background: ${({ theme }) => theme.background.shape};
	border-radius: 0.5rem;
	padding: 1.5rem 2rem;

	margin-top: 1.5rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
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
`;

export const CardBody = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	gap: 0.5rem;
	margin-top: 1rem;

	max-height: 500px;
	overflow-y: auto;
	width: 100%;
`;

export const CardWrapper = styled.li`
	border-bottom: 1px solid #d7d8da;

	padding-bottom: 0.5rem;

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
