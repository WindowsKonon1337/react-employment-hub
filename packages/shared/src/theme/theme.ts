import { createGlobalStyle } from "styled-components";
import { ColorsProps, MediaProps, ThemeProps } from "./types";

const colors: ColorsProps = {
	main: "#fdfffc",
	secondary: "#070707",
	secondaryLight: "#6c757d",
	active: "#0582ca",
	activeHover: "#03045e",
	error: "#ef233c",
};

const media: MediaProps = {
	extraLarge: "(max-width: 1140px)",
	large: "(max-width: 960px)",
	medium: "(max-width: 768px)",
	small: "(max-width: 540px)",
};

export const baseTheme: ThemeProps = {
	colors,
	media,
};

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0 auto;
	}
`;
