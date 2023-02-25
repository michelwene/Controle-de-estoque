import ButtonFab from "components/ButtonFab";
import CreateProductModal from "pages/Products/CreateProductModal";
import useToggle from "hooks/useToggle";
import { useProductsContext } from "context/ProductsProvider";
import * as S from "./styles";

import CardProduct from "components/CardProduct";
import EmptyMessage from "components/EmptyMessage";
import { Pagination } from "components/Pagination";
import { useState } from "react";

export default function Products() {
	const [page, setPage] = useState(1);
	const [value, toggle] = useToggle(false);
	const { products } = useProductsContext();
	console.log("products:", products);

	const totalPages = Math.ceil(products.length / 10);

	const handleNextPage = () => {
		if (page < totalPages) {
			setPage((prev) => prev + 1);
		}
	};

	const handlePrevPage = () => {
		if (page > 1) {
			setPage((prev) => prev - 1);
		}
	};

	const productsPerPage = products.slice((page - 1) * 10, page * 10);

	return (
		<>
			<S.Container>
				<S.PageTitle>Lista de produtos</S.PageTitle>

				<S.ProductsList>
					{products.length === 0 && (
						<EmptyMessage text="Não foi encontrado produtos cadastrados 😥" />
					)}
					{productsPerPage.map((product) => (
						<CardProduct product={product} key={product.id} />
					))}
				</S.ProductsList>
				<Pagination
					currentPage={page}
					totalPages={totalPages}
					nextPage={() => handleNextPage()}
					prevPage={() => handlePrevPage()}
				/>
			</S.Container>
			<ButtonFab onClick={toggle} />
			{value && <CreateProductModal isShow={value} handleClose={toggle} />}
		</>
	);
}
