import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
	name: string;
	id: string;
	label: string;
	isRequired?: boolean;
	isMoney?: boolean;
	type?: HTMLInputTypeAttribute;
}
