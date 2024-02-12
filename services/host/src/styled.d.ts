import "styled-components";

import { ThemeProps } from "@packages/shared";

declare module "styled-components" {
	export interface DefaultTheme extends ThemeProps {}
}
