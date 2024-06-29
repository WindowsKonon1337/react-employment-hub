import styled, { css } from "styled-components";

export const MenuWrapper = styled("div")(({ theme }) =>
	css({
		display: "flex",
		flexDirection: "column",
		height: "100%",
		paddingTop: 20,
		justifyContent: "space-between",
		borderRight: "1px solid",
		borderColor: theme.colors.secondary,
	}),
);

export const LinksBlock = styled("div")({
	display: "flex",
	gap: 20,
	marginBottom: 35,
	flexDirection: "column",
});
