import { Button } from "@packages/shared/src/components";
import styled, { css } from "styled-components";

import { BTN_WIDTH, CARD_WIDTH, GAP } from "./constants";

export const Container = styled("div")(({ theme }) =>
	css({
		// width: "100%",
		width: CARD_WIDTH,
		padding: 10,
		display: "flex",
		flexDirection: "column",
		gap: GAP,
		border: "1px solid",
		borderRadius: 8,
		borderColor: theme.colors.secondary,
	}),
);

export const ContentBlock = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

export const Text = styled("div")(({ theme }) =>
	css({
		fontSize: 18,
		color: theme.colors.secondary,
	}),
);

export const DeleteBtn = styled("button")({
	cursor: "pointer",
	textDecoration: "none",
	border: "none",
});

export const UpdatedBtn = styled(Button)({
	width: BTN_WIDTH,
});
