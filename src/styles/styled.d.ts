/* eslint-disable @typescript-eslint/no-empty-interface */
import theme from "./theme";
import "styled-components";

declare module "styled-components" {
	type Theme = typeof theme;
	export interface DefaultTheme extends Theme {}
}
