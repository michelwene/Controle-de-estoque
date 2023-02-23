import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

type Category = {
	id: string;
	name: string;
};

export const categoriesSlice = createSlice({
	name: "categories",
	initialState: {
		categories: [] as Category[],
	},
	reducers: {
		addCategories: (state, { payload }) => {
			state.categories = [...state.categories, payload];
			return state;
		},
		deleteCategory: (state, { payload }) => {
			const newCategories = state.categories.filter(
				(category) => category.id !== payload.id
			);
			state.categories = newCategories;
			return state;
		},
		editCategory: (state, { payload }) => {
			const newCategories = state.categories.map((category) => {
				if (category.id === payload.id) {
					return payload;
				}
				return category;
			});
			state.categories = newCategories;
			return state;
		},
	},
});

export const { addCategories, deleteCategory, editCategory } =
	categoriesSlice.actions;

export const selectCategories = (state: RootState) =>
	state.categories.categories;

export default categoriesSlice.reducer;
