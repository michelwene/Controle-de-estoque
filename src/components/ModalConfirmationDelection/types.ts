export interface ModalConfirmationDelectionProps {
	text: string;
	onConfirm: () => void;
	onCancel: () => void;
	isOpen: boolean;
	isLoading?: boolean;
}
