import React from "react";
import * as S from "./styles";
import { FormHelperErrorProps } from "./types";

export default class FormHelperError extends React.Component<FormHelperErrorProps> {
	render() {
		return (
			<S.Container>
				<S.Text>{this.props.text}</S.Text>
			</S.Container>
		);
	}
}
