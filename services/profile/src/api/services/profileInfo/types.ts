export interface ProfileRequestInfoData {
	name: string;
	lastName: string;
	email: string;
	profileImg?: File | null;
	phone?: string;
}

export interface ProfileResponsetInfoData extends Omit<ProfileRequestInfoData, "profileImg"> {
	profileImg?: string | null;
}
