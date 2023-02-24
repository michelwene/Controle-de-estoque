import { createContext, useContext, useMemo, useState } from "react";
import {
	Product,
	ProductsContextProps,
	ProductsProviderType,
} from "types/ProductsProvider";

const ProductsContext = createContext({} as ProductsProviderType);

export function ProductsProvider({ children }: ProductsContextProps) {
	const [products, setProducts] = useState<Product[]>([]);

	function addProduct(product: Product) {
		setProducts((prev) => [...prev, product]);
	}

	function removeProduct(id: string) {
		setProducts((prev) => prev.filter((product) => product.id !== id));
	}

	function updateProduct(product: Product) {
		setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)));
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
