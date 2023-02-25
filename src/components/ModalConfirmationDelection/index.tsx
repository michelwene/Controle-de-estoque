import ModalLayout from "components/ModalLayout";
import * as S from "./styles";

interface ModalConfirmationDelectionProps {
	text: string;
	onConfirm: () => void;
	onCancel: () => void;
	isOpen: boolean;
	isLoading?: boolean;
}

export default function ModalConfirmationDelection({
	onCancel,
	onConfirm,
	isOpen,
	text,
	isLoading,
}: ModalConfirmationDelectionProps) {
	return (
		<ModalLayout
			title=""
			isShow={isOpen}
			handleClose={isLoading ? undefined : onCancel}
		>
			<S.Text>{text}</S.Text>
			<S.WrapperButtons>
				<S.ButtonCancel onClick={onCancel} isLoading={isLoading}>
					{isLoading && <S.LoadingIcon />}
					Cancelar
				</S.ButtonCancel>
				<S.ButtonConfirm onClick={onConfirm} isLoading={isLoading}>
					{isLoading && <S.LoadingIcon />}
					Confirmar
				</S.ButtonConfirm>
			</S.WrapperButtons>
		</ModalLayout>
	);
}
