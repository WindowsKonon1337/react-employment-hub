import React, { FC } from "react";
import { UpalodBtn } from "./styled";
import { UploadMoreBtnProps } from "./types";

export const UplaodMoreBtn: FC<UploadMoreBtnProps> = ({ handleClick, title = "upload more" }) => {
	return <UpalodBtn onClick={handleClick}>{title}</UpalodBtn>;
};
