import ModalLayout from "components/ModalLayout";
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
		<ModalLayout
			isShow={isShow}
			handleClose={handleClose}
			title="Criar Produto"
		>
			<h1>Modal</h1>
		</ModalLayout>
	);
}
