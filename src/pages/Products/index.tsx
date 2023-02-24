import ButtonFab from "components/ButtonFab";
import CreateProductModal from "pages/Products/CreateProductModal";
import useToggle from "hooks/useToggle";
import { useProductsContext } from "context/ProductsProvider";

export default function Products() {
	const [value, toggle] = useToggle(false);
	const { products } = useProductsContext();
	console.log("products:", products);
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
