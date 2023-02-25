import styled from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

interface IModalProps {
	isLoading?: boolean;
}

export const Text = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-family: ${({ theme }) => theme.fonts.primary};
	font-weight: 500;
`;

export const WrapperButtons = styled.div`
	align-items: center;
	column-gap: 1rem;
	display: flex;
	justify-content: flex-end;

	margin-top: 1rem;
`;

export const ButtonCancel = styled.button<IModalProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 1rem;

	background-color: ${({ theme, isLoading }) =>
		isLoading ? "#ccc" : theme.colors.white};
	border: none;
	border-radius: 0.5rem;

	color: ${({ theme }) => theme.colors.black};
	cursor: pointer;
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 500;

	padding: 0.5rem 1rem;
	outline: none;
	transition: filter 0.2s;

	pointer-events: ${({ isLoading }) => isLoading && "none"};

	opacity: ${({ isLoading }) => isLoading && "0.5"};

	&:hover {
		filter: brightness(0.9);
	}

	&:active {
		filter: brightness(0.8);
	}
`;

export const ButtonConfirm = styled.button<IModalProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 1rem;

	background-color: ${({ theme, isLoading }) =>
		isLoading ? "#ccc" : theme.background.bgButton};
	border: none;
	border-radius: 0.5rem;

	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 500;

	padding: 0.5rem 1rem;
	outline: none;
	transition: filter 0.2s;

	pointer-events: ${({ isLoading }) => isLoading && "none"};

	opacity: ${({ isLoading }) => isLoading && "0.5"};

	&:hover {
		filter: brightness(0.9);
	}

	&:active {
		filter: brightness(0.8);
	}
`;

export const LoadingIcon = styled(AiOutlineLoading)`
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
