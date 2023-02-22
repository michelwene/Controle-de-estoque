import styled from "styled-components";

export const Container = styled.div`
	margin: 0.5rem 0;
`;

export const Text = styled.p`
	font-size: 0.75rem;
	color: #f00;

	font-family: ${({ theme }) => theme.fonts.primary};
	font-weight: 400;
`;
