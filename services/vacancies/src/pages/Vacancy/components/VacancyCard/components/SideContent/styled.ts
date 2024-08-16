import styled, { css } from "styled-components";

export const SideContentBlock = styled("div")({
	display: "flex",
	justifyContent: "space-between",
	flexDirection: "column",
});

export const InfoCompanyBlock = styled("div")(({ theme }) =>
	css({
		padding: 8,
		display: "flex",
		flexDirection: "column",
		gap: 15,
		borderBottom: "1px solid",
		borderColor: theme.colors.secondary,
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

export const SalaryBlock = styled(InfoCompanyBlock)({
	padding: 0,
	border: "none",
});

export const ComponentInfoBlock = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: 8,
});
