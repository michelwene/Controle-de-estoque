import * as S from "./styles";

interface CreateProductModalProps {
	isShow: boolean;
}

export default function CreateProductModal({
	isShow,
}: CreateProductModalProps) {
	return (
		<S.Backdrop isShow={isShow}>
			<h1>Create Product</h1>
		</S.Backdrop>
	);
}
