import React, { FC, forwardRef, ForwardedRef } from "react";
import ReactSelect from "react-select/creatable";

import { SelectProps } from "./types";
import { Label, SelectWrapper } from "./styled";

export const Select: FC<SelectProps> = forwardRef(
	({ data, className, placeholder, label, isMulti = false, ...props }, ref: ForwardedRef<any>) => {
		return (
			<SelectWrapper ref={ref}>
				{label && <Label>{label}</Label>}
				<ReactSelect
					options={data}
					isMulti={isMulti}
					placeholder={placeholder}
					isClearable={false}
					styles={{
						control: (baseStyles) => ({
							...baseStyles,
							maxWidth: 350,
							display: "flex",
							borderColor: "black",
							borderRadius: 10,
							":hover": {
								borderColor: "black",
							},
						}),
					}}
					className={className}
					{...props}
				/>
			</SelectWrapper>
		);
	},
);
