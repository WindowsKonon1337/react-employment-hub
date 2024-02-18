import { instance } from "@/api/axiosConfig";

import { LoginProps, RegistrationProps, ResponseData } from "./types";

export const AuthorizationServices = {
	login: async (data: LoginProps): Promise<ResponseData> => instance.post("/auth/login", data),
	registration: async (data: RegistrationProps): Promise<ResponseData> =>
		instance.post("/auth/registration", data),
};
