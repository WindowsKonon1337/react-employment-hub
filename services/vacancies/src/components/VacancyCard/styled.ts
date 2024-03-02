import styled, { css } from "styled-components";

export const VacnacyCardWrapper = styled("div")(() =>
	css({
		display: "flex",
		flexDirection: "column",
		gap: 10,
		width: 250,
		height: 180,
		boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
		borderRadius: 15,
		padding: 15,
	}),
);

export const Container = styled("div")({
	display: "flex",
	justifyContent: "space-between",
});

export const TagsWrapper = styled("div")({
	display: "flex",
	gap: "0 5px",
});

export const BottomContent = styled(Container)(({ theme }) => ({
	marginTop: 30,
	position: "relative",
	"&:after": {
		content: "''",
		position: "absolute",
		height: 1,
		width: "100%",
		top: "-10px",
		background: theme.colors.secondary,
	},
}));

export const TitleBlock = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: "4px 0",
});

export const Title = styled("div")(({ theme }) =>
	css({
		fontSize: 16,
		color: theme.colors.secondary,
	}),
);

export const Subtitle = styled("div")(({ theme }) =>
	css({
		fontSize: 15,
		color: theme.colors.secondaryLight,
	}),
);

export const LikedBtn = styled("button")({
	cursor: "pointer",
	border: "none",
	background: "transparent",
});

export const Amount = styled("span")({
	fontWeight: "bold",
});
