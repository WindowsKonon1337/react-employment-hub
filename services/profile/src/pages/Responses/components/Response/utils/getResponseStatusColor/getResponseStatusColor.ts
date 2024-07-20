import { DefaultTheme } from "styled-components";

import { VacancyStatus } from "../../types";

export const getResponseStatusColor = (status: VacancyStatus, theme: DefaultTheme): string => {
	switch (status) {
		case "pendig": {
			return theme.colors.secondary;
		}
		case "reject": {
			return theme.colors.error;
		}
		case "resolve": {
			return theme.colors.green;
		}
		default: {
			return theme.colors.secondary;
		}
	}
};
