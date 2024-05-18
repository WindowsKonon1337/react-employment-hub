import styled, { css } from "styled-components";

export const DropDownContainer = styled("div")({
	position: "relative",
	display: "flex",
	flexDirection: "column",
});

export const DropDownTitle = styled("div")(({ theme: { colors } }) =>
	css({
		color: colors.secondary,
		fontSize: 16,
	}),
);

export const DropDownLists = styled("div")(({ theme: { colors } }) =>
	css({
		position: "absolute",
		top: "100%",
		display: "flex",
		flexDirection: "column",
		background: colors.main,
		zIndex: 10000,
	}),
);

export const DropDownItem = styled("div")<{ $isChecked?: boolean }>(
	({ theme: { colors }, $isChecked }) =>
		css({
			color: colors.secondary,
			background: $isChecked ? colors.blue : colors.main,
			borderRadius: 8,
			fontSize: 16,
			transition: "all 0,3s ease",
			"&:hover": {
				transition: "all 0,3s ease",
				background: colors.activeHover,
			},
		}),
);
