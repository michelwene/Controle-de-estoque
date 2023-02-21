import styled from "styled-components";

export const Container = styled.header`
	background: ${({ theme }) => theme.colors.blue};

	padding: 1rem 2rem;

	border: none;

	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
	min-height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
