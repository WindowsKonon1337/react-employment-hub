import React, { FC } from "react";

import { TextInputProps } from "./types";
import { ErrorText, ErrorWrapper, Input, InputWrapper, Label } from "./styled";

export const TextInput: FC<TextInputProps> = ({
	value,
	label,
	errorText,
	isNotValid,
	placeholder = "text",
	onChange,
}) => {
	return (
		<InputWrapper>
			<Label>{label}</Label>
			<Input value={value} onChange={onChange} placeholder={placeholder} isError={isNotValid} />
			{isNotValid && errorText && (
				<ErrorWrapper>
					<ErrorText>{errorText}</ErrorText>
				</ErrorWrapper>
			)}
		</InputWrapper>
	);
};
