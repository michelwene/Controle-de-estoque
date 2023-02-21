import Header from "components/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import * as S from "./styles";

export default class Layout extends React.Component {
	render() {
		return (
			<S.Container>
				<Header />
				<Outlet />
			</S.Container>
		);
	}
}
