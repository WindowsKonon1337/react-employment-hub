import { useMemo } from "react";
import { Toaster } from "react-hot-toast";

import { ProfileRequestInfoData } from "@/api/services";

import { Container, LoaderItem, LoaderWrapper } from "./styled";
import { ProfileForm } from "./components";
import { useData } from "./utils";

const Profile = () => {
	const { handleUpdateData, profileIndoData, hasLoading } = useData();

	const handleUpdateProfile = (profileData: ProfileRequestInfoData) => {
		if (profileData) {
			handleUpdateData(profileData);
		}
	};

	const LoadingBlock = useMemo(
		() => (
			<LoaderWrapper>
				<LoaderItem />
			</LoaderWrapper>
		),
		[],
	);

	return (
		<Container $isLoading={hasLoading}>
			{hasLoading && LoadingBlock}
			{profileIndoData && <ProfileForm data={profileIndoData} handleApplyData={handleUpdateProfile} />}
			<Toaster />
		</Container>
	);
};

export default Profile;
