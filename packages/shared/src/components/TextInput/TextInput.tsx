import React, { FC, forwardRef, ForwardedRef } from "react";

import { TextInputProps } from "./types";
import { ErrorText, ErrorWrapper, Input, InputWrapper, Label } from "./styled";

export const TextInput: FC<TextInputProps> = forwardRef(
	(
		{ value, label, errorText, isNotValid, placeholder = "text", ...props },
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		return (
			<InputWrapper>
				<Label>{label}</Label>
				<Input
					defaultValue={value}
					placeholder={placeholder}
					$isError={isNotValid}
					ref={ref}
					{...props}
				/>
				{isNotValid && errorText && (
					<ErrorWrapper>
						<ErrorText>{errorText}</ErrorText>
					</ErrorWrapper>
				)}
			</InputWrapper>
		);
	},
);
