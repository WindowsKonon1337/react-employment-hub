import styled, { css } from "styled-components";

type titleSize = "s" | "m" | "l";

export const TitleWrapper = styled("div")<{ size?: titleSize }>(({ theme, size }) =>
	css({
		color: theme.colors.secondary,
		fontSize: size === "s" ? 16 : size === "m" ? 24 : 35,
	}),
);
