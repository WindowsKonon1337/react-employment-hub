import styled, { css } from "styled-components";

export const SelectWrapper = styled("div")({
	display: "flex",
	flexDirection: "column",
});

export const Label = styled("div")(({ theme }) =>
	css({
		fontSize: 15,
		marginBottom: 8,
		color: theme.colors.secondary,
	}),
);
