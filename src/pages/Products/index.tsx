import ButtonFab from "components/ButtonFab";
import CreateProductModal from "pages/Products/CreateProductModal";
import useToggle from "hooks/useToggle";
import { useProductsContext } from "context/ProductsProvider";
import * as S from "./styles";

import CardProduct from "components/CardProduct";
import EmptyMessage from "components/EmptyMessage";
import { Pagination } from "components/Pagination";
import { useState } from "react";
import useDebounce from "utils/useDebounce";
import Input from "components/Input";
import { removeSpecialCharacters } from "utils/removeSpecialCharacters";

export default function Products() {
	const [search, setSearch] = useState("");
	const debouncedSearch = useDebounce(search, 700);

	const [page, setPage] = useState(1);
	const [value, toggle] = useToggle(false);
	const { products } = useProductsContext();

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

	const filteredProducts = products.filter((product) => {
		const categoryWithoutAccent = removeSpecialCharacters(product.category!);
		return (
			product.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
			categoryWithoutAccent
				.toLowerCase()
				.includes(removeSpecialCharacters(debouncedSearch).toLowerCase()) ||
			product.price!.toString().includes(debouncedSearch.toLowerCase())
		);
	});

	const productsPerPage = products.slice((page - 1) * 10, page * 10);
	const productsFilteredPerPage = filteredProducts.slice(
		(page - 1) * 10,
		page * 10
	);
	const productsToRender = debouncedSearch
		? productsFilteredPerPage
		: productsPerPage;

	const totalPages = debouncedSearch
		? Math.ceil(filteredProducts.length / 10)
		: Math.ceil(products.length / 10);

	const handleSearch = (text: string) => {
		setPage(1);
		setSearch(text);
	};

	return (
		<>
			<S.Container>
				<S.PageTitle>Lista de produtos</S.PageTitle>
				<Input
					name="search"
					id="search"
					label="Pesquisar"
					value={search}
					onChange={handleSearch}
				/>
				<S.ProductsList>
					{productsToRender.length === 0 && (
						<EmptyMessage text="Não foi encontrado produtos cadastrados 😥" />
					)}
					{productsToRender.map((product) => (
						<CardProduct product={product} key={product.id} />
					))}
				</S.ProductsList>
				{totalPages > 1 && (
					<Pagination
						currentPage={page}
						totalPages={totalPages}
						nextPage={() => handleNextPage()}
						prevPage={() => handlePrevPage()}
					/>
				)}
			</S.Container>
			<ButtonFab onClick={toggle} />
			{value && <CreateProductModal isShow={value} handleClose={toggle} />}
		</>
	);
}
