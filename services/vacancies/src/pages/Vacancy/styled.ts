import styled from "styled-components";

export const VacancyContainer = styled("div")({
	marginTop: 50,
	display: "grid",
	padding: "20px 20px 0 20px",
	gridTemplateColumns: "300px 1fr",
	gap: 20,
});

export const EmptyBlock = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});
