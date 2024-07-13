import styled, { css } from "styled-components";

export const InputFileBlock = styled("div")(({ theme }) =>
	css({
		position: "relative",
		width: 150,
		height: 150,
		borderRadius: "100%",
		cursor: "pointer",
		background: "transparent",
		border: "1px solid",
		borderColor: theme.colors.secondary,
		transition: "all 0.2s ease",
		"&:hover": {
			backgroundColor: theme.colors.secondaryLight,
		},
	}),
);

export const ImgBlock = styled("img")({
	zIndex: -1,
	width: "100%",
	height: "100%",
	borderRadius: "100%",
	transition: "all 0.2s ease",
});

export const FileInput = styled("input")(({ theme }) =>
	css({
		zIndex: 10,
		position: "absolute",
		left: 0,
		top: 0,
		cursor: "pointer",
		opacity: 0,
		width: "100%",
		height: "100%",
		borderRadius: "100%",
		transition: "all 0.2s ease",
		"&:hover": {
			backgroundColor: theme.colors.secondaryLight,
		},
	}),
);
