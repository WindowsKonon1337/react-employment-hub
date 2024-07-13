import styled from "styled-components";

const CONTAINER_WIDTH = 500;

export const Container = styled("div")({
	maxWidth: CONTAINER_WIDTH,
	width: "100%",
	display: "flex",
	flexDirection: "column",
});

export const FormBlock = styled("form")({
	display: "flex",
	gap: 20,
	flexDirection: "column",
});

export const ContentContainer = styled("div")({
	display: "flex",
	gap: 20,
});

export const ImageContainer = styled(ContentContainer)({
	justifyContent: "center",
});
