export type Report = {
	id: string;
	type: "delete" | "update" | "create_product" | "create_category";
	data: {
		[key: string]: string | number;
	};
};
