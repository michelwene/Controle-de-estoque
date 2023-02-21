import { FaBars, FaTimes } from "react-icons/fa";
import * as S from "./styles";
import { sidebar } from "routes/sidebar";
import { useSidebarContext } from "context/SidebarProvider";

export default function Sidebar() {
	const { isSidebarOpen, closeSidebar, toggleSidebar } = useSidebarContext();
	return (
		<>
			<S.Navbar>
				<S.MenuIconOpen to="#" onClick={toggleSidebar}>
					<FaBars />
				</S.MenuIconOpen>
			</S.Navbar>
			<S.SidebarMenu close={isSidebarOpen}>
				<S.MenuIconClose to="#" onClick={closeSidebar}>
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
