import * as S from "./styles";

interface CreateProductModalProps {
	isShow: boolean;
	handleClose: () => void;
}

export default function CreateProductModal({
	isShow,
	handleClose,
}: CreateProductModalProps) {
	return (
		<S.Backdrop isShow={isShow}>
			<S.Container>
				<S.ModalHeader>
					<S.ModalTitle>Criar Produto</S.ModalTitle>
					<S.CloseButton onClick={handleClose}>
						<S.CloseIcon />
					</S.CloseButton>
				</S.ModalHeader>
			</S.Container>
		</S.Backdrop>
	);
}
