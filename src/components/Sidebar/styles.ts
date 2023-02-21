import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
	display: flex;
	justify-content: start;
	align-items: center;
`;
export const SidebarMenu = styled.div<{ close: boolean }>`
	width: 250px;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.background.primary};
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	position: fixed;
	top: 0;
	left: ${({ close }) => (close ? "0" : "-100%")};
	transition: 0.6s;

	z-index: 10000;
`;

export const MenuIconOpen = styled(Link)`
	display: flex;
	justify-content: start;
	font-size: 1.5rem;
	color: #ffffff;

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.8);
	}

	&:active {
		color: rgba(0, 0, 0, 0.5);
	}
`;

export const MenuIconClose = styled(Link)`
	display: flex;
	justify-content: end;
	font-size: 1.5rem;
	margin-top: 0.75rem;
	margin-right: 1rem;
	color: ${({ theme }) => theme.colors.black};

	&:active {
		color: rgba(0, 0, 0, 0.5);
	}
`;

export const MenuItems = styled.li`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: start;
	width: 100%;
	height: 90px;
	padding: 1rem 0 1.25rem;
`;

export const MenuItemLinks = styled(Link)`
	display: flex;
	align-items: center;
	padding: 0 2rem;
	font-size: 20px;
	text-decoration: none;

	transition: text-decoration 0.2s;

	&:hover {
		text-decoration: underline;
	}
`;

export const MenuTitle = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 600;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.primary};
	color: ${({ theme }) => theme.colors.black};
`;
