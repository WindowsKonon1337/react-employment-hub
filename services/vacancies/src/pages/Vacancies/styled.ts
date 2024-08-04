import { Header } from "@/components";
import styled, { css } from "styled-components";

export const ContentBlock = styled("div")({
	padding: "0 20px",
});

export const HeaderBlock = styled(Header)({
	marginBottom: 20,
});

export const TopBlock = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

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
