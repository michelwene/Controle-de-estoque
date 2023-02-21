import * as S from "./styles";

interface ModalLayoutProps {
	isShow: boolean;
	handleClose: () => void;
	children: React.ReactNode;
	title: string;
}

export default function ModalLayout({
	isShow,
	handleClose,
	children,
	title,
}: ModalLayoutProps) {
	return (
		<S.Backdrop isShow={isShow}>
			<S.Container>
				<S.ModalHeader>
					<S.ModalTitle>{title}</S.ModalTitle>
					<S.CloseButton onClick={handleClose}>
						<S.CloseIcon />
					</S.CloseButton>
				</S.ModalHeader>
				{children}
			</S.Container>
		</S.Backdrop>
	);
}
