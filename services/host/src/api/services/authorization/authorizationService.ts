import { instance } from "@/api/axiosConfig";

import { LoginParams, AuthorizationParams, ResponseData } from "./types";

export const AuthorizationServices = {
	login: async (data: LoginParams): Promise<ResponseData> => instance.post("/auth/login", data),
	registration: async (data: AuthorizationParams): Promise<ResponseData> =>
		instance.post("/auth/registration", data),
	test: async (): Promise<ResponseData> => instance.get("/auth/hello"),
};
