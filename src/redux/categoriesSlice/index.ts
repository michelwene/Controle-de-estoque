import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { Category } from "./types";

function addCategoriesToLocalStorage(categories: Category) {
	const categoriesFromLocalStorage = localStorage.getItem("categories");
	if (categoriesFromLocalStorage) {
		const parsedCategories = JSON.parse(categoriesFromLocalStorage);
		const newCategories = [...parsedCategories, categories];
		localStorage.setItem("categories", JSON.stringify(newCategories));
		return;
	} else {
		localStorage.setItem("categories", JSON.stringify([categories]));
	}
}

function deleteCategoryFromLocalStorage(id: string) {
	const categoriesFromLocalStorage = localStorage.getItem("categories");
	if (categoriesFromLocalStorage) {
		const parsedCategories = JSON.parse(categoriesFromLocalStorage);
		const newCategories = parsedCategories.filter(
			(category: Category) => category.id !== id
		);
		localStorage.setItem("categories", JSON.stringify(newCategories));
	}
}

function editCategoryFromLocalStorage(payload: Category) {
	const categoriesFromLocalStorage = localStorage.getItem("categories");
	if (categoriesFromLocalStorage) {
		const parsedCategories = JSON.parse(categoriesFromLocalStorage);
		const newCategories = parsedCategories.map(
			(categoryLocalStorage: Category) => {
				if (categoryLocalStorage.id === payload.id) {
					return payload;
				}
				return categoryLocalStorage;
			}
		);
		localStorage.setItem("categories", JSON.stringify(newCategories));
	}
}

const initialState: Category[] = localStorage.getItem("categories")
	? JSON.parse(localStorage.getItem("categories") as string)
	: [];

export const categoriesSlice = createSlice({
	name: "categories",
	initialState: {
		categories: initialState,
	},
	reducers: {
		addCategories: (state, { payload }: { payload: Category }) => {
			const isExistCategory = state.categories.find((category) => {
				return category.name === payload.name;
			});

			if (isExistCategory) {
				return state;
			}
			addCategoriesToLocalStorage(payload);
			state.categories = [...state.categories, payload];
			return state;
		},
		deleteCategory: (state, { payload }) => {
			deleteCategoryFromLocalStorage(payload.id);
			const newCategories = state.categories.filter(
				(category) => category.id !== payload.id
			);
			state.categories = newCategories;
			return state;
		},
		editCategory: (state, { payload }) => {
			editCategoryFromLocalStorage(payload);
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
