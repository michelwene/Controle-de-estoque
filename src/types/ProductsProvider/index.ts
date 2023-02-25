export type Product = {
	id: string;
	name: string;
	description?: string;
	price?: number;
	stock?: number;
	category?: string;
	created_at?: Date;
	updated_at?: Date;
};

export type ProductsProviderType = {
	products: Product[];
	addProduct: (product: Product) => void;
	removeProduct: (id: string) => void;
	updateProduct: (product: Product) => void;
};

export interface ProductsContextProps {
	children: React.ReactNode;
}
