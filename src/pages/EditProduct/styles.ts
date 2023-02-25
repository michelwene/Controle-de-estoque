import styled from "styled-components";
import { MdChevronLeft, MdOutlineSave, MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

export const Container = styled.div`
	max-width: 620px;
	margin: 0 auto;

	height: 100%;

	margin-top: 2rem;
`;

export const ContentHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const WrapperHeader = styled.div`
	display: flex;
	align-items: center;

	column-gap: 1rem;
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

export const CategoryWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;

	margin-top: 1rem;
`;

export const IconBack = styled(MdChevronLeft)`
	font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const IconSave = styled(MdOutlineSave)`
	font-size: ${({ theme }) => theme.fontSizes.md};
	color: ${({ theme }) => theme.colors.white};
`;

export const IconDelete = styled(MdDelete)`
	font-size: ${({ theme }) => theme.fontSizes.md};
	color: #f00;
`;

export const Icon = styled(IoAdd)`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.white};
`;

export const ButtonCreateCategory = styled.button`
	background-color: #4a90e2;

	border: none;
	border-radius: 4px;
	padding: 0.3rem 0.8rem;
	outline: none;

	cursor: pointer;

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.9);
	}

	&:active {
		filter: brightness(0.8);
	}
`;

export const WrapperInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Info = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.xs};
	font-weight: 500;
	font-family: ${({ theme }) => theme.fonts.primary};

	margin-top: 1rem;
`;
