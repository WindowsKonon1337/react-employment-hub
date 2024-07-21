export interface AuthorizationParams {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

interface TokenResposne {
	accessToken: string;
	refreshToken: string;
}

export type LoginParams = Omit<AuthorizationParams, "firstName" | "lastName">;
export interface ResponseData {
	data: TokenResposne;
}
