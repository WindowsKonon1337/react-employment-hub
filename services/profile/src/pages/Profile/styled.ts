import { Loader } from "@packages/shared/src/components";
import styled, { css } from "styled-components";

export const Container = styled("div")<{ $isLoading: boolean }>(({ $isLoading }) =>
	css({
		padding: 20,
		display: "flex",
		position: "relative",
		flexDirection: "column",
		overflow: $isLoading ? "hidden" : "auto",
	}),
);

export const LoaderWrapper = styled("div")({
	top: 0,
	left: 0,
	zIndex: 100,
	position: "fixed",
	width: "100%",
	height: "110vh",
	background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
});

export const LoaderItem = styled(Loader)({
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: "translate(-50%, -50%)",
});
