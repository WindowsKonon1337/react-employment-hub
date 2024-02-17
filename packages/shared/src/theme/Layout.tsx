import { HTMLAttributes } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, baseTheme } from "./theme";
import { ThemeProps } from "./types";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
	currentTheme?: ThemeProps;
}

export const Layout = ({ children, currentTheme = baseTheme }: LayoutProps) => (
	<ThemeProvider theme={currentTheme}>
		<GlobalStyles />
		{children}
	</ThemeProvider>
);
