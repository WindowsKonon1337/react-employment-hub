import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { AuthorizationServices, AuthorizationParams } from "@/api";
import { Error } from "global";

export const useData = () => {
	const navigate = useNavigate();

	const { mutate: handleRegistration } = useMutation({
		mutationFn: async (data: AuthorizationParams) => AuthorizationServices.registration(data),
		onSuccess: (data) => {
			toast.success("authorization is successful");
			const { data: registrationData } = data;
			localStorage.setItem("accessToken", registrationData.accessToken);
			setTimeout(() => {
				navigate("/vacancies");
			}, 500);
		},
		onError: (error: Error) => {
			const currentError = error;
			toast.error(`${currentError.response?.data.message}`);
		},
	});

	return { handleRegistration };
};
