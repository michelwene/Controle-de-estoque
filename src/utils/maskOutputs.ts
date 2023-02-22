export const maskMoney = (text: any) => {
	if (text === null) return "";

	if (typeof text === "number") text = text.toFixed(2).toString();

	let sig = "";

	if (text < 0) sig = "-";

	text = text.replace(/[\D]+/g, "").replace(/\b0+/g, "").padStart(3, "0");
	const unformatted = text.replace(/([0-9]{2})$/g, ".$1");
	const number = unformatted.split(".");
	number[0] = number[0].split(/(?=(?:...)*$)/).join(".");

	return `R$${sig}${number.join(",")}`;
};

export const unMaskMoney = (text: string) => {
	return text
		? parseFloat(text.replace("R$", "").replace(".", "").replace(",", "."))
		: 0;
};
