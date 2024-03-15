import { FC } from "react";

import { CheckBox } from "@/components/UI";

import { FiltersType } from "../types";
import { ComponentsProps } from "./types";

export const FiltersItem: FC<ComponentsProps> = ({ data }) => {
	switch (data.type) {
		case FiltersType.checkBox:
			return <CheckBox {...data.data} />;
		case FiltersType.range:
			return <div />;
		default:
			return null;
	}
};
