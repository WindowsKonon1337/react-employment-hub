import { instance } from "@/api";

import { ProfileInfoData } from "./types";

export const ProfileInfoService = {
	getInfo: async (): Promise<ProfileInfoData> => ({
		email: "test@tets.ru",
		lastName: "LastName",
		name: "name",
		phone: "8800555355",
	}),
	// getInfo: async (): Promise<ProfileInfoData> => instance.get("/profile"),
	updatedInfo: async (data: ProfileInfoData): Promise<ProfileInfoData> =>
		instance.post("/profile/edit", data),
};
