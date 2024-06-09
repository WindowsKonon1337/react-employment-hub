import { FC } from "react";
import { Button } from "@packages/shared/src/components";

import { NotificationProps } from "./types";
import { BtnBlock, NotificationBlock, TitleBlock } from "./styled";

export const Notification: FC<NotificationProps> = ({
	title,
	applySettings,
	resetSettings,
	className,
}) => {
	const { appyTitle, handleApply } = applySettings || {};
	const { handleReset, resetTitle } = resetSettings || {};
	return (
		<NotificationBlock className={className}>
			<TitleBlock size="m">{title}</TitleBlock>
			<BtnBlock>
				{applySettings && <Button clickFuntcion={handleApply}>{appyTitle}</Button>}
				{resetSettings && <Button clickFuntcion={handleReset}>{resetTitle}</Button>}
			</BtnBlock>
		</NotificationBlock>
	);
};
