import { Button } from "@packages/shared/src/components";
import styled, { css } from "styled-components";

export const Container = styled("div")({
	display: "flex",
	gap: 15,
	flexDirection: "column",
});

export const Title = styled("span")({
	fontSize: 18,
	fontWeight: "bold",
});

export const Text = styled("div")(({ theme }) =>
	css({
		fontSize: 18,
		color: theme.colors.secondary,
	}),
);

export const DeleteBtn = styled(Button)({
	marginTop: 10,
});
