import { createContext, useContext, useMemo, useState } from "react";
export type SidebarProviderType = {
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
	closeSidebar: () => void;
};

export interface SidebarContextProps {
	children: React.ReactNode;
}

const SidebarContext = createContext({} as SidebarProviderType);

export function SidebarProvider({ children }: SidebarContextProps) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const closeSidebar = () => setIsSidebarOpen(false);
	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	const value = useMemo(
		() => ({
			isSidebarOpen,
			toggleSidebar,
			closeSidebar,
		}),
		[isSidebarOpen]
	);

	return (
		<SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
	);
}

export const useSidebarContext = () => useContext(SidebarContext);
