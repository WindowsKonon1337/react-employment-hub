import { ProfileRequestInfoData, ProfileResponsetInfoData } from "@/api/services";

export interface ProfileFormProps {
	data: ProfileResponsetInfoData;
	handleApplyData: (data: ProfileRequestInfoData) => void;
	handleResetData?: () => void;
}
