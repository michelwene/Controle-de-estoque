import styled from "styled-components";

interface ModalProps {
	isShow: boolean;
}

export const Backdrop = styled.div<ModalProps>`
	z-index: auto;
	display: ${({ isShow }) => (isShow ? "block" : "none")};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: rgba(0, 0, 0, 0.5);
`;
