import { createGlobalStyle } from "styled-components";
import { ColorsProps, MediaProps, ThemeProps } from "./types";

const colors: ColorsProps = {
	main: "#fdfffc",
	secondary: "#070707",
	secondaryLight: "#6c757d",
	active: "#0582ca",
	activeHover: "#03045e",
	negativeHover: "#780000",
	negative: "#c1121f",
	error: "#ef233c",
	blue: "#0077b6",
	green: "#4f772d",
	violet: "#5a189a",
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
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	},
	body::-webkit-scrollbar {
		height: 8px;
		width: 8px;	  
		border-radius: 8px;
	}
	body::-webkit-scrollbar-thumb {
		background: gray;
		border-radius: 8px;
	}
`;
