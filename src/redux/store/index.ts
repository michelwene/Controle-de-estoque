import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "redux/categoriesSlice";
import reportsSlice from "redux/reportsSlice";

const store = configureStore({
	reducer: {
		categories: categoriesSlice,
		reports: reportsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
