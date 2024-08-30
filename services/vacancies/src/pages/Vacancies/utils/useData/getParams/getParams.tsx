import { PageInfoState } from "@/reducer";

export const getParams = (pageInfo: PageInfoState) => {
	const { page, size, sorts } = pageInfo.pageInfo || {};

	let sortsParams = "sorts=";
	sorts?.forEach((sort) => {
		sortsParams += `[${Object.values(sort)}]`;
	});

	const paramsObj = {
		page: page.toString(),
		size: size.toString(),
	};

	const searchParams =
		new URLSearchParams([...Object.entries(paramsObj)]).toString() + "&" + sortsParams;

	return searchParams;
};
