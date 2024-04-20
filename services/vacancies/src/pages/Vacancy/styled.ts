import styled, { css } from "styled-components";

import { VacancyCard } from "@/components";
import { Button } from "@packages/shared/src/components";

export const VacancyContainer = styled("div")({
	display: "grid",
	padding: "20px 20px 0 20px",
	gridTemplateColumns: "270px 1fr",
	gap: 20,
});

export const VacanciesContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	overflowY: "scroll",
	height: "85vh",
	gap: 15,
	"&::-webkit-scrollbar": {
		height: 8,
		width: 8,
		borderRadius: 8,
	},
	"&::-webkit-scrollbar-thumb": {
		background: "gray",
		borderRadius: 8,
	},
});

export const EmptyBlock = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});

export const VacancyInfoConainer = styled("div")(({ theme }) =>
	css({
		minHeight: "85vh",
		height: "max-content",
		display: "grid",
		marginTop: 20,
		gridTemplateColumns: "1fr 0.3fr",
		background: theme.colors.main,
		boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
		borderRadius: 15,
	}),
);

export const LeftContentBlock = styled("div")(({ theme }) =>
	css({
		display: "flex",
		flexDirection: "column",
		borderRight: "1px solid",
		borderColor: theme.colors.secondary,
	}),
);

export const RightContentBlock = styled("div")({
	display: "flex",
	justifyContent: "space-between",
	flexDirection: "column",
});

export const TitleBlock = styled("div")(({ theme }) =>
	css({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottom: "1px solid",
		padding: "10px 10px 20px 10px",
		borderColor: theme.colors.secondary,
	}),
);

export const InfoCompanyBlock = styled("div")(({ theme }) =>
	css({
		padding: "20px 10px",
		display: "flex",
		flexDirection: "column",
		gap: 15,
		borderBottom: "1px solid",
		borderColor: theme.colors.secondary,
	}),
);

export const SalaryBlock = styled(InfoCompanyBlock)({
	border: "none",
});

export const ApplyBtnBlock = styled("div")({
	padding: 10,
});

export const ApplyBtn = styled(Button)({
	width: "100%",
});

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

export const ComponentInfoBlock = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: 8,
});

export const CompanyInfoText = styled(InfoTitle)({
	padding: 0,
	fontWeight: "normal",
	fontSize: 18,
});

export const VacancyDescription = styled("div")(({ theme }) =>
	css({
		padding: 10,
		fontSize: 20,
		color: theme.colors.secondary,
	}),
);

export const VacancyCardItem = styled(VacancyCard)<{ $isCheck: boolean }>(({ $isCheck, theme }) =>
	css({
		border: "2px solid",
		borderColor: $isCheck ? theme.colors.active : theme.colors.secondary,
	}),
);
