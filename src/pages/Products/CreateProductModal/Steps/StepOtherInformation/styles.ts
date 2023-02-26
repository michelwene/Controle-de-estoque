import styled from "styled-components";
import { IoAdd } from "react-icons/io5";

interface IProps {
	isPrevious?: boolean;
	disabled?: boolean;
}

export const Container = styled.div``;

export const Wrapper = styled.div`
	margin-top: 2rem;

	display: flex;
	column-gap: 1rem;
`;

export const Button = styled.button<IProps>`
	background-color: ${({ isPrevious }) => (isPrevious ? "#999" : "#4a90e2")};

	color: #fff;
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: 1rem;
	font-weight: 600;

	border: none;
	border-radius: 4px;
	padding: 0.5rem 1rem;

	outline: none;
	cursor: pointer;

	pointer-events: ${({ disabled }) => (disabled ? "none" : "initial")};
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.9);
	}

	&:active {
		filter: brightness(0.8);
	}
`;

export const CategoryWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;

	margin-top: 1rem;
`;

export const ButtonCreateCategory = styled.button`
	background-color: #4a90e2;

	border: none;
	border-radius: 4px;
	padding: 0.3rem 0.8rem;
	outline: none;

	cursor: pointer;

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.9);
	}

	&:active {
		filter: brightness(0.8);
	}
`;

export const Icon = styled(IoAdd)`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.white};
`;
