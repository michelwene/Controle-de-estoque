import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.button`
	font-size: ${({ theme }) => theme.fontSizes.sm};
	color: ${({ theme }) => theme.colors.white};
	font-weight: 500;

	font-family: ${({ theme }) => theme.fonts.primary};

	background-color: transparent;
	border: none;

	transition: filter 0.2s;

	&:hover {
		cursor: pointer;
		filter: brightness(0.8);
	}

	&:active {
		filter: brightness(0.9);
	}
`;
