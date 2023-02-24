import { createContext, useContext, useMemo, useState } from "react";

type Product = {
	id: string;
	name: string;
	description?: string;
	price?: number;
	stock?: number;
	category?: string;
	created_at: Date;
};

export type ProductsProviderType = {
	products: Product[];
	addProduct: (product: Product) => void;
	removeProduct: (id: string) => void;
	updateProduct: (product: Product) => void;
};

export interface SidebarContextProps {
	children: React.ReactNode;
}

const ProductsContext = createContext({} as ProductsProviderType);

export function ProductsProvider({ children }: SidebarContextProps) {
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
