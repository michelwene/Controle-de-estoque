import styled from "styled-components";

export const Container = styled.div`
	min-height: 100px;
	width: 100%;

	background-color: ${({ theme }) => theme.background.shape};
	border-radius: 5px;
	padding: 1rem;

	box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
`;
