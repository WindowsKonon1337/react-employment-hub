import { Dispatch, SetStateAction } from "react";

export interface SetFileParams {
	filePath?: string | null;
	file?: File | null;
}

export interface InputImageFileProps {
	imgPath?: string | null;
	fileType?: string;
	setFile?: Dispatch<SetStateAction<SetFileParams>> | null;
	className?: string;
}
