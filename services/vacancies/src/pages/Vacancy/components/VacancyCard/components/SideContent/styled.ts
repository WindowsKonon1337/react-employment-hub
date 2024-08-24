import styled, { css } from "styled-components";

export const SideContentBlock = styled("div")(({ theme }) =>
	css({
		position: "relative",
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "column",
		[`${theme.media.small}`]: {
			gap: 10,
			padding: 8,
			"&::before": {
				position: "absolute",
				width: "100%",
				height: 1,
				left: 0,
				background: theme.colors.secondary,
				content: '" "',
			},
		},
	}),
);

export const InfoCompanyBlock = styled("div")(({ theme }) =>
	css({
		padding: 8,
		display: "flex",
		flexDirection: "column",
		gap: 15,
		borderBottom: "1px solid",
		borderColor: theme.colors.secondary,
		[`${theme.media.small}`]: {
			padding: 0,
			border: "none",
		},
	}),
);

export const InfoTitle = styled("div")(({ theme }) =>
	css({
		fontSize: 20,
		fontWeight: "bold",
		color: theme.colors.secondary,
	}),
);

export const CompanyInfoTitle = styled(InfoTitle)({
	fontSize: 18,
});

export const SalaryBlock = styled(InfoCompanyBlock)(({ theme }) =>
	css({
		padding: 0,
		position: "relative",
		border: "none",
		[`${theme.media.small}`]: {
			padding: 8,
			"&::before": {
				position: "absolute",
				width: "100%",
				height: 1,
				left: 0,
				background: theme.colors.secondary,
				content: '" "',
			},
		},
	}),
);

export const ComponentInfoBlock = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: 8,
});
