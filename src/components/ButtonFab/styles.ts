import styled from "styled-components";
import { IoAdd } from "react-icons/io5";
import { AiOutlineLoading } from "react-icons/ai";

interface ButtonFabProps {
	isLoading?: boolean;
}

export const Container = styled.button<ButtonFabProps>`
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

	pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};

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

export const LoadingIcon = styled(AiOutlineLoading)`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes.md};

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	animation: spin 1s linear infinite;
`;
