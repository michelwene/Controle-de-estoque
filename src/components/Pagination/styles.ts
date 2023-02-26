import styled from "styled-components";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	padding-bottom: 1rem;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	column-gap: 1rem;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 2.5rem;
	height: 2.5rem;

	background-color: ${({ theme }) => theme.background.shape};

	border: none;
	border-radius: 50%;

	cursor: pointer;

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.9);
	}

	&:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	&:active {
		filter: brightness(0.8);
	}
`;

export const LeftIcon = styled(MdOutlineChevronLeft)`
	font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const RightIcon = styled(MdOutlineChevronRight)`
	font-size: ${({ theme }) => theme.fontSizes.md};
`;
