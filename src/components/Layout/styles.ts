import styled from "styled-components";

export const Container = styled.div`
	display: "flex";
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	background-color: ${({ theme }) => theme.background.primary};
`;
