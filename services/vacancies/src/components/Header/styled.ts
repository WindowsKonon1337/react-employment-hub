import styled, { css } from "styled-components";

import { Title } from "@packages/shared/src/components";

export const HeaderWrapper = styled("div")(({ theme }) =>
	css({
		padding: 20,
		background: theme.colors.secondary,
	}),
);

export const HeaderTitle = styled(Title)(({ theme }) =>
	css({
		color: theme.colors.main,
	}),
);
