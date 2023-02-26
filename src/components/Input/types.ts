import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
	value: string;
	onChange: (value: string) => void;
	name: string;
	type?: HTMLInputTypeAttribute;
	error?: boolean;
	label?: string;
	id: string;
	isMoney?: boolean;
}
