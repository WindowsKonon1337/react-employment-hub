import { instance } from "@/api";

import { ProfileRequestInfoData, ProfileResponsetInfoData } from "./types";

export const ProfileInfoService = {
	getInfo: async (): Promise<ProfileResponsetInfoData> => ({
		email: "test@tets.ru",
		lastName: "LastName",
		name: "name",
		phone: "8800555355",
		profileImg:
			"https://plus.unsplash.com/premium_photo-1720373139744-1df9bbd233c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	}),
	// getInfo: async (): Promise<ProfileInfoData> => instance.get("/profile"),
	updatedInfo: async (data: ProfileRequestInfoData): Promise<ProfileRequestInfoData> =>
		instance.post("/profile/edit", data),
};
