import { ProfileRequestInfoData, ProfileResponsetInfoData } from "@/api/services";
import { SetFileParams } from "@packages/shared/src/components";

export type Inputs = {
	email: string;
	name: string;
	lastName: string;
	phone: string;
	profileImage: SetFileParams;
};

export interface useFormParams {
	initialData: ProfileResponsetInfoData;
	handleApplyData: (data: ProfileRequestInfoData) => void;
	handleResetData?: () => void;
}
