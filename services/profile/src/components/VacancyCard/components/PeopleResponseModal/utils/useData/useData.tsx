import { PeopleResponseService } from "@/api/services";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { Error } from "global";

import { UseDataParams } from "./types";

export const useData = ({ vacancyId }: UseDataParams) => {
	const { data: peoplesOfResponse, isLoading: isLoadingPeoples } = useQuery({
		queryKey: ["peoplesOfResponse"],
		queryFn: async () => PeopleResponseService.getPeoleOfVacancy(vacancyId),
	});

	const { mutate: handleRejectPeople } = useMutation({
		mutationFn: async (userId: string) => PeopleResponseService.rejectPeople(userId),
		onSuccess: () => {
			toast.success("People succes rejected");
		},
		onError: (error: Error) => {
			toast.error(error.response?.data.message ?? "Something went wrong");
		},
	});

	const { mutate: handleApplyPeople } = useMutation({
		mutationFn: async (userId: string) => PeopleResponseService.applyPeople(userId),
		onSuccess: () => {
			toast.success("People succes apply");
		},
		onError: (error: Error) => {
			toast.error(error.response?.data.message ?? "Something went wrong");
		},
	});

	return { peoplesOfResponse, handleRejectPeople, handleApplyPeople, isLoadingPeoples };
};
