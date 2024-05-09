import { FiltersType } from "@/components/Filters/types";

export const getFilterFromString = (param: string) => {
	const currentParam = param.split("=");
	if (currentParam[0].indexOf("_") > -1) {
		currentParam[0] = currentParam[0].replace("_", " ");
		console.log("зашел сюда");
	}
	if (currentParam[1].indexOf("%2C") > -1) {
		const result = currentParam[1].split("%2C");
		console.log(result);
		return {
			title: currentParam[0],
			filters: [
				{
					type: FiltersType.range,
					data: {
						from: (result && result[0]?.toString()) ?? "0",
						to: (result && result[1]?.toString()) ?? "100000000000",
					},
				},
			],
		};
	}
	if (currentParam[1].indexOf("{") === -1) {
		const checkBoxValues = currentParam[1].split("%3B");
		return {
			title: currentParam[0],
			filters: [
				{
					type: FiltersType.checkBox,
					data: checkBoxValues.map((checkBox) => ({
						title: checkBox,
						isCheck: true,
					})),
				},
			],
		};
	}
};
