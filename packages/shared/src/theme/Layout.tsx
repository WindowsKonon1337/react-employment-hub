import { HTMLAttributes } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { GlobalStyles, baseTheme } from "./theme";
import { ThemeProps } from "./types";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
	currentTheme?: ThemeProps;
}

const queryClient = new QueryClient();

export const Layout = ({ children, currentTheme = baseTheme }: LayoutProps) => (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={currentTheme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	</QueryClientProvider>
);
