import React, { FC, useState, ChangeEvent, useEffect } from "react";

import { FileInput, ImgBlock, InputFileBlock } from "./styled";
import { InputImageFileProps } from "./types";

export const InputImageFile: FC<InputImageFileProps> = ({
	imgPath,
	setFile,
	fileType,
	className,
}) => {
	const [currentImgPath, setCurrentImgPath] = useState<string | null>(null);
	const [currentInputFile, setCurrentInputFile] = useState<string>("");

	useEffect(() => {
		setCurrentImgPath(imgPath ?? null);
		setCurrentInputFile("");
	}, [imgPath]);

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target?.files?.[0];

		setCurrentInputFile(e?.target?.value);

		if (file) {
			const reader = new FileReader();
			reader.onload = (e: any) => {
				console.log(e?.target?.result);
				setCurrentImgPath(e?.target?.result);
				setFile?.({
					filePath: e?.target?.result ?? "",
					file: file,
				});
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<InputFileBlock className={className}>
			{currentImgPath && <ImgBlock src={currentImgPath} alt="profile_img" />}
			<FileInput
				type="file"
				value={currentInputFile}
				accept={fileType && fileType}
				onChange={handleOnChange}
			/>
		</InputFileBlock>
	);
};
