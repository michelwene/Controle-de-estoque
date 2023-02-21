import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import * as S from "./styles";
import { sidebar } from "routes/sidebar";
import { useState } from "react";

export default function Sidebar() {
	const [close, setClose] = useState(false);
	const showSidebar = () => setClose(!close);
	return (
		<>
			<S.Navbar>
				<S.MenuIconOpen to="#" onClick={showSidebar}>
					<FaBars />
				</S.MenuIconOpen>
			</S.Navbar>
			<S.SidebarMenu close={close}>
				<S.MenuIconClose to="#" onClick={showSidebar}>
					<FaTimes />
				</S.MenuIconClose>

				{sidebar.map((item, index) => {
					return (
						<S.MenuItems key={index}>
							<S.MenuItemLinks to={item.path}>
								<>
									{item.icon}
									<S.MenuTitle>{item.title}</S.MenuTitle>
								</>
							</S.MenuItemLinks>
						</S.MenuItems>
					);
				})}
			</S.SidebarMenu>
		</>
	);
}
