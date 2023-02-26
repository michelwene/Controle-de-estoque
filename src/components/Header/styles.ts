import styled from "styled-components";

export const Container = styled.header`
	background: ${({ theme }) => theme.colors.blue};

	padding: 0.5rem 2rem;

	border: none;

	box-shadow: 0px 00px 20px rgba(0, 0, 0, 0.4);

	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
`;

export const Content = styled.div`
	min-height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const WrapperMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: 1rem;
`;

export const ToolBar = styled.div`
	height: 70px;
`;
