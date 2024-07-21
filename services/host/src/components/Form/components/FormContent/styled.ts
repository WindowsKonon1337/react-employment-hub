import styled, { css } from "styled-components";

import { Title } from "@packages/shared/src/components";
import { Link } from "react-router-dom";

export const AboutForm = styled(Title)(({ theme }) =>
	css({
		color: theme.colors.main,
		fontSize: 50,
		transform: "rotate(-90deg)",
	}),
);

export const PageTitle = styled(Title)({
	textAlign: "center",
	fontSize: 45,
	marginBottom: 12,
});

export const PageSubtitle = styled(Title)(({ theme }) =>
	css({
		textAlign: "center",
		color: theme.colors.secondaryLight,
		fontSize: 25,
		marginBottom: 45,
	}),
);

export const FormSubtitleBlock = styled("div")(({ theme }) =>
	css({
		textAlign: "center",
		marginTop: 10,
		fontSize: 15,
		color: theme.colors.secondary,
	}),
);

export const LinkBlock = styled(Link)(({ theme }) =>
	css({
		textDecoration: "none",
		marginLeft: 5,
		color: theme.colors.active,
		fontSize: 15,
	}),
);
