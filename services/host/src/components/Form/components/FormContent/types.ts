import { HTMLAttributes } from "react";

export interface FormContentProps extends HTMLAttributes<HTMLDivElement> {
	titleValue: string;
	subtitleValue: string;
	leftSideContentBlock: string;
	underFormText: string;
	underFormLink: {
		value: string;
		path: string;
	};
}
