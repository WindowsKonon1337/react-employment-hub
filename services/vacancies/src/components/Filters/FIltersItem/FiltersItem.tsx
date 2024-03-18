import { FC } from "react";

import { FiltersType } from "../types";
import { ComponentsProps } from "./types";
import { CheckBox, Range } from "./UI";

export const FiltersItem: FC<ComponentsProps> = ({ data, handleCheck }) => {
	switch (data.type) {
		case FiltersType.checkBox:
			return <CheckBox data={{ ...data.data }} handleCheck={handleCheck} />;
		case FiltersType.range:
			return <Range data={{ ...data.data }} handleChangeValue={handleCheck} />;
		default:
			return null;
	}
};
