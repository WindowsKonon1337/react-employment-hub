import styled, { css } from "styled-components";

import { VacancyCard } from "@/components";

export const VacanciesContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	overflowY: "auto",
	overflowX: "hidden",
	height: "100vh",
	gap: 15,
	"&::-webkit-scrollbar": {
		height: 8,
		width: 8,
		borderRadius: 8,
	},
	"&::-webkit-scrollbar-thumb": {
		background: "gray",
		borderRadius: 8,
	},
});

export const VacancyCardItem = styled(VacancyCard)<{ $isCheck: boolean }>(({ $isCheck, theme }) =>
	css({
		border: "2px solid",
		height: 230,
		borderColor: $isCheck ? theme.colors.active : theme.colors.secondary,
	}),
);
