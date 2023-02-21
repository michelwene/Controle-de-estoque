import ButtonFab from "components/ButtonFab";
import CreateProductModal from "components/CreateProductModal";
import useToggle from "hooks/useToggle";

export default function Products() {
	const [value, toggle] = useToggle(false);
	return (
		<>
			<div>
				<h1>Products</h1>
			</div>
			<ButtonFab onClick={toggle} />
			{value && <CreateProductModal isShow={value} handleClose={toggle} />}
		</>
	);
}
