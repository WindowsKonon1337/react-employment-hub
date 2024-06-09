interface AuthorizationProps {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	userRole: string;
}

interface TokenResposne {
	accessToken: string;
	refreshToken: string;
}

export type LoginProps = Omit<AuthorizationProps, "firstName" | "lastName" | "userRole">;
export type RegistrationProps = AuthorizationProps;
export interface ResponseData {
	data: TokenResposne;
}
