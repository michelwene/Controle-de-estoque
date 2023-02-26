import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { Report } from "./types";

function createReportMessage(report: Report) {
	const { type, data } = report;
	switch (type) {
		case "create_product":
			return `Você cadastrou um produto com o nome "${data.name}", preço: R$ ${data.price}, categoria: ${data.category}, data: ${data.created_at}.`;
		case "create_category":
			return `Você cadastrou uma categoria com o nome "${data.name}", data: ${data.created_at}.`;
		case "delete":
			return `Você deletou o produto "${data.name}", data: ${data.created_at}.`;
		case "update":
			return `Você atualizou o produto "${data.name}", data: ${data.created_at}.`;
	}
}

function saveToLocalStorage(state: Report) {
	const getReports = localStorage.getItem("reports");
	const reports = getReports ? JSON.parse(getReports) : [];
	reports.unshift(state);
	localStorage.setItem("reports", JSON.stringify(reports));
}

const initialState: Report[] = localStorage.getItem("reports")
	? JSON.parse(localStorage.getItem("reports") as string)
	: [];

export const reportsSlice = createSlice({
	name: "reports",
	initialState,
	reducers: {
		addReport: (state, { payload }: { payload: Report }) => {
			saveToLocalStorage(payload);
			state.unshift(payload);
		},
	},
});

export const { addReport } = reportsSlice.actions;

export const selectReports = (state: RootState) =>
	state.reports.map((report) => createReportMessage(report));

export default reportsSlice.reducer;
