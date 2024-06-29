import { Styles } from "styled-components/dist/types";
import { GetInputStylesParams } from "./types";

export const getInputStyles = ({ theme, isError }: GetInputStylesParams): Styles<object> => ({
	width: "100%",
	position: "relative",
	padding: "10px 8px",
	fontSize: 18,
	borderRadius: 10,
	border: "1px solid",
	outline: "none",
	borderColor: isError ? theme.colors.error : theme.colors.secondary,
	color: theme.colors.secondary,
	background: "transparent",
	"&::placeholder": {
		fontSize: 15,
		color: theme.colors.secondaryLight,
	},
	"&:focus-visible": {
		borderColor: theme.colors.active,
	},
});
