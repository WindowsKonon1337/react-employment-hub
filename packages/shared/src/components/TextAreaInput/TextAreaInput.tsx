import React, { FC, forwardRef, ForwardedRef } from "react";

import { ErrorText, ErrorWrapper, InputWrapper, Label } from "../TextInput/styled";
import { TextArea } from "./styled";
import { TextAreaInputProps } from "./types";

export const TexAreaInput: FC<TextAreaInputProps> = forwardRef(
	(
		{ value, label, errorText, isNotValid, placeholder = "text", className, ...props },
		ref: ForwardedRef<HTMLTextAreaElement>,
	) => {
		return (
			<InputWrapper className={className}>
				<Label>{label}</Label>
				<TextArea
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
