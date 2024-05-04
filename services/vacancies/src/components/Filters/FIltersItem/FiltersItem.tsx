import { FC } from "react";

import { FiltersType } from "../types";
import { ComponentsProps } from "./types";
import { CheckBox, Range } from "./UI";

export const FiltersItem: FC<ComponentsProps> = ({ data, handleCheck }) => {
	switch (data.type) {
		case FiltersType.checkBox:
			return data.data.map((checkBox, idx) => (
				<CheckBox data={{ ...checkBox }} handleCheck={handleCheck} key={`CheckBox_${idx}`} />
			));
		case FiltersType.range:
			return <Range data={{ ...data.data }} handleChangeValue={handleCheck} />;
		default:
			return null;
	}
};
