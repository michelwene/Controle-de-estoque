import styled from "styled-components";
import { MdChevronLeft, MdOutlineSave } from "react-icons/md";

export const Container = styled.div`
	max-width: 620px;
	margin: 0 auto;

	height: 100%;

	margin-top: 2rem;
`;

export const WrapperHeader = styled.div`
	display: flex;
	align-items: center;

	column-gap: 1rem;
`;

export const IconBack = styled(MdChevronLeft)`
	font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const Title = styled.h1`
	font-size: ${({ theme }) => theme.fontSizes.xl};
	font-weight: 500;
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;

	gap: 1rem;
`;

export const IconSave = styled(MdOutlineSave)`
	font-size: ${({ theme }) => theme.fontSizes.md};
	color: ${({ theme }) => theme.colors.white};
`;
