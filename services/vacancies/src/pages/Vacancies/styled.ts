import { Header } from "@/components";
import styled from "styled-components";

export const ContentBlock = styled("div")({
	padding: "0 20px",
});

export const HeaderBlock = styled(Header)({
	marginBottom: 20,
});

export const ContentWrapper = styled("div")({
	display: "grid",
	marginTop: 20,
	gridTemplateColumns: "300px 1fr",
});

export const VacanciesBlock = styled("div")({
	display: "flex",
	justifyContent: "center",
	flexWrap: "wrap",
	gap: 10,
});
