import React, { FC, forwardRef, ForwardedRef, useState } from "react";

import { TextInputProps } from "./types";
import { ErrorText, ErrorWrapper, Input, InputWrapper, Label, VisibleTextBtn } from "./styled";

// @ts-ignore
import Eye from "../../assets/input/eye.svg";
// @ts-ignore
import SlashEye from "../../assets/input/eye-slash.svg";

export const TextInput: FC<TextInputProps> = forwardRef(
	(
		{ value, label, errorText, isNotValid, type = "text", placeholder = "text", ...props },
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const [currentType, setCurrentType] = useState(type);

		console.log(type);

		const handleChangeType = () => {
			if (currentType === "text") {
				setCurrentType("password");
			} else {
				setCurrentType("text");
			}
		};

		return (
			<InputWrapper>
				<Label>{label}</Label>
				<Input
					defaultValue={value}
					placeholder={placeholder}
					$isError={isNotValid}
					type={currentType}
					ref={ref}
					{...props}
				/>
				{type === "password" && (
					<VisibleTextBtn onClick={handleChangeType}>
						{currentType === "text" ? <SlashEye /> : <Eye />}
					</VisibleTextBtn>
				)}
				{isNotValid && errorText && (
					<ErrorWrapper>
						<ErrorText>{errorText}</ErrorText>
					</ErrorWrapper>
				)}
			</InputWrapper>
		);
	},
);
