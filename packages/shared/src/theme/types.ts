export interface ColorsProps {
	main: string;
	secondary: string;
	secondaryLight: string;
	active: string;
	error: string;
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
