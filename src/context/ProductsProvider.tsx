import { createContext, useContext, useMemo, useState } from "react";
import {
	Product,
	ProductsContextProps,
	ProductsProviderType,
} from "types/ProductsProvider";

const ProductsContext = createContext({} as ProductsProviderType);

const initialState: Product[] = localStorage.getItem("products")
	? JSON.parse(localStorage.getItem("products")!)
	: [];

export function ProductsProvider({ children }: ProductsContextProps) {
	const [products, setProducts] = useState<Product[]>(initialState);

	function addProduct(product: Product) {
		const productFromLocalStorage = localStorage.getItem("products");
		if (productFromLocalStorage) {
			const parsedProducts = JSON.parse(productFromLocalStorage);
			localStorage.setItem(
				"products",
				JSON.stringify([...parsedProducts, product])
			);
			setProducts((prev) => [...prev, product]);
		} else {
			localStorage.setItem("products", JSON.stringify([product]));
			setProducts((prev) => [...prev, product]);
		}
	}

	function removeProduct(id: string) {
		const productFromLocalStorage = localStorage.getItem("products");
		if (productFromLocalStorage) {
			const parsedProducts = JSON.parse(productFromLocalStorage);
			const filteredProducts = parsedProducts.filter(
				(product: Product) => product.id !== id
			);
			localStorage.setItem("products", JSON.stringify(filteredProducts));
			setProducts((prev) => prev.filter((product) => product.id !== id));
		} else {
			setProducts((prev) => prev.filter((product) => product.id !== id));
		}
	}

	function updateProduct(product: Product) {
		const productFromLocalStorage = localStorage.getItem("products");
		if (productFromLocalStorage) {
			const parsedProducts = JSON.parse(productFromLocalStorage);
			const updatedProducts = parsedProducts.map((p: Product) =>
				p.id === product.id ? product : p
			);
			localStorage.setItem("products", JSON.stringify(updatedProducts));
			setProducts((prev) =>
				prev.map((p) => (p.id === product.id ? product : p))
			);
		} else {
			setProducts((prev) =>
				prev.map((p) => (p.id === product.id ? product : p))
			);
		}
	}

	const value = useMemo(
		() => ({
			products,
			addProduct,
			removeProduct,
			updateProduct,
		}),

		[products]
	);

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
}

export const useProductsContext = () => useContext(ProductsContext);
