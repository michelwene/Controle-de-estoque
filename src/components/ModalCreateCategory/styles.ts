import styled from "styled-components";

export const Container = styled.div`
	margin: 1rem 0;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	margin-top: 1rem;
`;

export const Button = styled.button`
	background-color: ${({ theme }) => theme.background.bgButton};
	border: none;
	border-radius: 4px;

	cursor: pointer;
	padding: 0.5rem 1rem;

	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes.sm};

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.8);
	}

	&:active {
		filter: brightness(0.6);
	}
`;

export const WrapperLoading = styled.div`
	margin-top: 1rem;
`;
