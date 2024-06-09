import { ProfileInfoData } from "@/api/services";

export interface ProfileFormProps {
	data: ProfileInfoData;
	handleApplyData: (data: ProfileInfoData) => void;
	handleResetData?: () => void;
}
