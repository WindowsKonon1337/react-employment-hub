import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { AuthorizationServices, LoginParams } from "@/api";
import { Error } from "global";

export const useData = () => {
	const navigation = useNavigate();

	const { mutate: handleLogin } = useMutation({
		mutationFn: async (data: LoginParams) => AuthorizationServices.login(data),
		onError: (error: Error) => {
			toast.error(error.response?.data.message ?? "Something went wrong");
		},
		onSuccess: (data) => {
			toast.success("authorization is successful");
			console.log(data.data.accessToken);
			localStorage.setItem("accessToken", data.data.accessToken);
			navigation("/vacancies");
		},
	});

	return { handleLogin };
};
