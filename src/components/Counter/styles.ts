import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	column-gap: 1rem;
	align-items: center;
`;

export const Description = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.sm};
	color: ${({ theme }) => theme.colors.white};
	font-weight: 500;
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Counter = styled.button`
	font-size: ${({ theme }) => theme.fontSizes.md};
	color: ${({ theme }) => theme.colors.white};
	font-weight: 600;
	font-family: ${({ theme }) => theme.fonts.primary};

	background-color: transparent;
	border: none;

	padding: 0.5rem 1rem;

	transition: filter 0.2s;

	&:hover {
		cursor: pointer;
		filter: brightness(0.8);
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 50%;
	}

	&:active {
		filter: brightness(0.9);
	}
`;
