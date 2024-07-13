import { useMemo } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

import { ProfileRequestInfoData, ProfileInfoService } from "@/api/services";
import { Error } from "global";

import { Container, LoaderItem, LoaderWrapper } from "./styled";
import { ProfileForm } from "./components";

const Profile = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["getInfo"],
		queryFn: () => ProfileInfoService.getInfo(),
	});

	const { mutate: handleUpdateData, isPending } = useMutation({
		mutationFn: (data: ProfileRequestInfoData) => ProfileInfoService.updatedInfo(data),
		onSuccess: () => {
			toast.success("your data has been successfully updated");
		},
		onError: (error) => {
			const currentError = error as Error;
			toast.error(`${currentError.response?.data.message}`);
		},
	});

	const handleUpdateProfile = (profileData: ProfileRequestInfoData) => {
		if (profileData) {
			handleUpdateData(profileData);
		}
	};

	const hasLoading = isLoading || isPending;

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
			{data && <ProfileForm data={data} handleApplyData={handleUpdateProfile} />}
			<Toaster />
		</Container>
	);
};

export default Profile;
