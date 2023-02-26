export type SidebarProviderType = {
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
	closeSidebar: () => void;
};

export interface SidebarContextProps {
	children: React.ReactNode;
}
