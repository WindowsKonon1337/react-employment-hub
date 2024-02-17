import "styled-components";

import { ThemeProps } from "./src/theme/types";

declare module "styled-components" {
	export interface DefaultTheme extends ThemeProps {}
}

declare module "*.mdx" {
	let MDXComponent: (props) => JSX.Element;
	export default MDXComponent;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
	import React from "react";
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
