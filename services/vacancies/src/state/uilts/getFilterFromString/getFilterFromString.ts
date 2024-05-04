import { FiltersType } from "@/components/Filters/types";

export const getFilterFromString = (param: string) => {
	const currentParam = param.split("=");
	if (currentParam[1].indexOf("{") > -1) {
		const regex = /\d+/g;
		const result = currentParam[1]?.match(regex)?.map(Number);
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
		const checkBoxValues = currentParam[1].split(";");
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
