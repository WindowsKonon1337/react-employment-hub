import { Header } from "@/components";
import { PlugSection } from "@packages/shared/src/components";
import styled, { css } from "styled-components";

export const ContentBlock = styled("div")({
	padding: "0 20px",
});

export const HeaderBlock = styled(Header)({
	marginBottom: 20,
});

export const TopBlock = styled("div")(({ theme }) =>
	css({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		[`${theme.media.medium}`]: {
			gap: 10,
			textAlign: "center",
			flexDirection: "column",
			alignItems: "center",
		},
	}),
);

export const ContentWrapper = styled("div")(({ theme }) =>
	css({
		position: "relative",
		display: "grid",
		marginTop: 20,
		gridTemplateColumns: "300px 1fr",
		[`${theme.media.medium}`]: {
			gridTemplateColumns: "1fr",
		},
	}),
);

export const VacanciesBlock = styled("div")({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	flexWrap: "wrap",
	gap: 10,
});

export const EmptyDataSection = styled(PlugSection)({
	marginTop: 70,
});
