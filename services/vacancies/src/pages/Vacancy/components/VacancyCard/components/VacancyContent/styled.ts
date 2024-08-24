import styled, { css } from "styled-components";

export const ContentBlock = styled("div")(({ theme }) =>
	css({
		display: "flex",
		flexDirection: "column",
		borderRight: "1px solid",
		borderColor: theme.colors.secondary,
		[`${theme.media.small}`]: {
			border: "none",
		},
	}),
);

export const TitleBlock = styled("div")(({ theme }) =>
	css({
		display: "flex",
		justifyContent: "space-between",
		flexWrap: "wrap",
		alignItems: "center",
		borderBottom: "1px solid",
		padding: "10px 10px 20px 10px",
		borderColor: theme.colors.secondary,
	}),
);

export const VacancyDescription = styled("div")(({ theme }) =>
	css({
		padding: 10,
		fontSize: 20,
		color: theme.colors.secondary,
	}),
);
