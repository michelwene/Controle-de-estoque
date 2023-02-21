import Counter from "components/Counter";
import Title from "components/Title";
import React from "react";
import * as S from "./styles";

export default class Header extends React.Component {
	render() {
		return (
			<S.Container>
				<S.Content>
					<Title title="Controle de estoque" />
					<Counter />
				</S.Content>
			</S.Container>
		);
	}
}
