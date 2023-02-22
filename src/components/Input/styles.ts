import styled from "styled-components";

interface IProps {
	isActive: boolean;
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	position: relative;
	transform-origin: top left;
	transition: all 0.5s ease-out;

	&:focus-within label {
		transform: translate(0, 26px) scale(1);
	}
`;

export const Input = styled.input`
	width: 100%;
	height: 56px;
	outline: none;

	position: absolute;
	transform: translate(0, 26px) scale(1);

	padding: 12px 16px 0px 12px;

	background-color: ${({ theme }) => theme.background.primary};
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 1rem;

	&:focus {
		border: 1px solid #4a90e2;
	}
`;

export const Label = styled.label<IProps>`
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: 1rem;
	color: #999;

	padding: 0px 12px;
	pointer-events: none;

	position: absolute;
	transform: translate(0, 46px) scale(1);
	${({ isActive }) => isActive && "transform: translate(0, 26px) scale(1);"}
`;
