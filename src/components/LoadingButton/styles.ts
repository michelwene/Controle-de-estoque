import styled from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

interface IButtonProps {
	isLoading?: boolean;
}

export const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	column-gap: 1rem;
`;

export const Button = styled.button<IButtonProps>`
	background-color: ${({ theme, isLoading }) =>
		isLoading ? "#ccc" : theme.background.bgButton};

	border: none;
	border-radius: 4px;

	cursor: pointer;
	padding: 0.5rem 1rem;

	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes.sm};

	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: 1rem;

	pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};
	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.8);
	}

	&:active {
		filter: brightness(0.6);
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
