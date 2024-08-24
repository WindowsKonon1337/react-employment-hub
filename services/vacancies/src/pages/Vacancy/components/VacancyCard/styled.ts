import styled, { css } from "styled-components";
import { Button } from "@packages/shared/src/components";

export const VacancyInfoConainer = styled("div")(({ theme }) =>
	css({
		minHeight: "85vh",
		height: "max-content",
		display: "grid",
		marginTop: 20,
		gridTemplateColumns: "1fr 0.3fr",
		background: theme.colors.main,
		boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
		borderRadius: 15,
		[`${theme.media.small}`]: {
			minHeight: "100%",
			gridTemplateColumns: "1fr",
		},
	}),
);

export const SideContentBlock = styled("div")({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
});

export const ApplyBtnBlock = styled("div")({
	padding: 10,
});

export const ApplyBtn = styled(Button)({
	width: "100%",
});
