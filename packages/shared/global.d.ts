import "styled-components";

import { ThemeProps } from "./src/theme/types";

declare module "styled-components" {
	export interface DefaultTheme extends ThemeProps {}
}

declare module "*.mdx" {
	let MDXComponent: (props) => JSX.Element;
	export default MDXComponent;
}

declare type GenericData<T, D, A = unknown> = {
	type: T;
	data: D;
} & A;
