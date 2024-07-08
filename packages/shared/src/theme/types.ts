export interface ColorsProps {
	main: string;
	secondary: string;
	secondaryLight: string;
	active: string;
	activeHover: string;
	error: string;
	green: string;
	violet: string;
	negativeHover: string;
	negative: string;
	blue: string;
}

export interface MediaProps {
	extraLarge: string;
	large: string;
	medium: string;
	small: string;
}

export interface ThemeProps {
	colors: ColorsProps;
	media: MediaProps;
}
