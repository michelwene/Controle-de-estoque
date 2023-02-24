export interface ModalLayoutProps {
	isShow: boolean;
	handleClose: () => void;
	children: React.ReactNode;
	title: string;
}
