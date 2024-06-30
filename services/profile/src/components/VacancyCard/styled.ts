import { Button } from "@packages/shared/src/components";
import styled, { css } from "styled-components";

const CARD_WIDTH = 760;
const BTN_WIDTH = 180;

export const Container = styled("div")(({ theme }) =>
	css({
		width: "100%",
		maxWidth: CARD_WIDTH,
		padding: 10,
		display: "flex",
		flexDirection: "column",
		gap: 15,
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
