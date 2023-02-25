import { HTMLInputTypeAttribute } from "react";

export interface InputFormProps {
	name: string;
	id: string;
	label: string;
	isRequired?: boolean;
	isMoney?: boolean;
	type?: HTMLInputTypeAttribute;
}
