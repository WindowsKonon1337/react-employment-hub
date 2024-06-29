import styled, { css } from "styled-components";

export const SelectWrapper = styled("div")({
	display: "flex",
	width: "100%",
	flexDirection: "column",
});

export const Label = styled("div")(({ theme }) =>
	css({
		fontSize: 15,
		marginBottom: 8,
		color: theme.colors.secondary,
	}),
);
