import styled from "styled-components";
import { IoAdd } from "react-icons/io5";

export const Container = styled.button`
	background: ${({ theme }) => theme.colors.blue};
	padding: 1rem 1rem;

	display: flex;
	align-items: center;
	justify-content: center;

	border: none;
	border-radius: 50%;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

	position: fixed;
	bottom: 2rem;
	right: 2rem;

	transition: filter 0.2s;

	&:hover {
		cursor: pointer;
		filter: brightness(0.9);
	}

	&:active {
		filter: brightness(0.8);
	}
`;

export const Icon = styled(IoAdd)`
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.white};
`;
