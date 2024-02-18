interface AuthorizationProps {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

interface TokenResposne {
	accessToken: string;
	refreshToken: string;
}

export type LoginProps = Omit<AuthorizationProps, "firstName" | "lastName">;
export type RegistrationProps = AuthorizationProps;
export interface ResponseData {
	data: TokenResposne;
}
