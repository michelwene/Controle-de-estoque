import Counter from "components/Counter";
import Sidebar from "components/Sidebar";
import Title from "components/Title";
import React from "react";
import * as S from "./styles";

export default class Header extends React.Component {
	render() {
		return (
			<S.Container>
				<S.Content>
					<S.WrapperMenu>
						<Sidebar />
						<Title title="Controle de estoque" />
					</S.WrapperMenu>
					<Counter />
				</S.Content>
			</S.Container>
		);
	}
}
