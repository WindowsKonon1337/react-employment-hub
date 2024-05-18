import styled, { css } from "styled-components";

export const Container = styled("div")({
	position: "relative",
	width: "100%",
	display: "flex",
	flexDirection: "column",
});

export const InputContainer = styled("div")({
	display: "flex",
	alignItems: "center",
	gap: 10,
});

export const AdditionalVarintsContainer = styled("div")<{ $isOpen?: boolean }>(
	({ theme: { colors }, $isOpen }) =>
		css({
			display: $isOpen ? "flex" : "none",
			position: "absolute",
			width: "100%",
			top: 50,
			flexDirection: "column",
			gap: 10,
			borderRadius: 8,
			padding: 10,
			background: colors.main,
		}),
);

export const ValueBlock = styled("div")(({ theme: { colors } }) =>
	css({
		cursor: "pointer",
		fontSize: 16,
		color: colors.secondary,
		padding: 5,
		borderRadius: 8,
		"&:hover": {
			color: colors.main,
			background: colors.active,
		},
	}),
);
