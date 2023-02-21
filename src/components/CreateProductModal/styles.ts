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

export const Container = styled.div<ModalProps>`
	position: fixed;
	background: antiquewhite;
	width: 33%;
	height: auto;

	top: 50%;

	left: 50%;

	transform: "translate(-50%,-50%)";

	border-radius: 10px;
	padding: 0.75rem;
	color: rgba(0, 0, 139, 0.7);
`;
