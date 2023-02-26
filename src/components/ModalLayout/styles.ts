import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

interface ModalProps {
	isShow: boolean;
}

export const Backdrop = styled.div<ModalProps>`
	z-index: 999;
	display: ${({ isShow }) => (isShow ? "flex" : "none")};
	position: fixed;
	top: 0;
	left: 0;
	min-height: 100vh;
	width: 100vw;
	background: rgba(0, 0, 0, 0.5);

	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	background: ${({ theme }) => theme.background.primary};
	min-width: 33%;
	height: auto;
	max-height: 50vh;

	transition: transform 0.5s ease-in-out;

	transform: "translate(-50%,-50%)";

	border-radius: 10px;
	padding: 0.75rem;

	overflow-y: auto;

	::-webkit-scrollbar {
		width: 0.5rem;
	}

	@media (max-width: 768px) {
		min-width: 80%;
	}
`;

export const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ModalTitle = styled.h3`
	font-size: ${({ theme }) => theme.fontSizes.xs};
	font-weight: 600;
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const CloseButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	padding: 0.5rem;

	transition: filter 0.2s;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		filter: brightness(0.8);
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 50%;
	}

	&:active {
		filter: brightness(0.6);
	}
`;

export const CloseIcon = styled(RiCloseLine)`
	font-size: ${({ theme }) => theme.fontSizes.md};
`;
