declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
	import React from "react";
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare const __PLATFROM__: "mobile" | "desktop";

import "styled-components";

import { ThemeProps } from "@packages/shared";

declare module "styled-components" {
	export interface DefaultTheme extends ThemeProps {}
}
