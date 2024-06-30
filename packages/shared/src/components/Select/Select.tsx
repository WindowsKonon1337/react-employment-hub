import React, { FC, forwardRef, ForwardedRef } from "react";
import ReactSelect from "react-select/creatable";

import { SelectProps } from "./types";
import { Label, SelectWrapper } from "./styled";

export const Select: FC<SelectProps> = forwardRef(
	({ data, className, placeholder, label, isMulti = false, onChange }, ref: ForwardedRef<any>) => {
		return (
			<SelectWrapper ref={ref}>
				{label && <Label>{label}</Label>}
				<ReactSelect
					options={data}
					isMulti={isMulti}
					className={className}
					placeholder={placeholder}
					onChange={onChange}
					styles={{
						control: (baseStyles) => ({
							...baseStyles,
							borderColor: "black",
							borderRadius: 10,
							":hover": {
								borderColor: "black",
							},
						}),
					}}
				/>
			</SelectWrapper>
		);
	},
);
