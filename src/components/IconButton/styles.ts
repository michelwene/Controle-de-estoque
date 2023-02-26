import styled from "styled-components";

export const ButtonBack = styled.button`
	align-self: flex-end;

	background: ${({ theme }) => theme.background.shape};
	border: none;
	border-radius: 50%;
	cursor: pointer;

	width: 2.5rem;
	height: 2.5rem;

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.8);
	}

	&:active {
		filter: brightness(0.6);
	}
`;
