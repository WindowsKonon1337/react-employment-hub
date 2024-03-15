import styled, { css } from "styled-components";

export const FiltersWrapper = styled("div")({
	display: "flex",
	flexDirection: "column",
});

export const FiltersTitle = styled("div")(({ theme }) =>
	css({
		marginBottom: 10,
		fontSize: 18,
		color: theme.colors.secondary,
		fontWeight: "bold",
	}),
);

export const FiltersComponents = styled(FiltersWrapper)(() =>
	css({
		gap: 8,
	}),
);
