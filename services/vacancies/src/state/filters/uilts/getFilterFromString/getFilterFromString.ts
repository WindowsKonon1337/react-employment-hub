import { FiltersType } from "@/state";

export const getFilterFromString = (param: string) => {
	const currentParam = param.split("=");
	if (currentParam[0].indexOf("_") > -1) {
		currentParam[0] = currentParam[0].replace("_", " ");
	}

	if (currentParam[0] === "Search") {
		return {
			title: currentParam[0],
			filters: [
				{
					type: FiltersType.search,
					data: currentParam[1],
				},
			],
		};
	}

	if (currentParam[0] === "Location") {
		return {
			title: currentParam[0],
			filters: [
				{
					type: FiltersType.location,
					data: currentParam[1],
				},
			],
		};
	}

	if (currentParam[1].indexOf("%2C") > -1) {
		const result = currentParam[1].split("%2C");
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
