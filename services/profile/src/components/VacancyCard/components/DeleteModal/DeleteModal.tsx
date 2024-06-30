// import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { TextInput } from "@packages/shared/src/components";

import { VacanciesService } from "@/api/services";
import { ModalContainer } from "@/components/ModalContainer";

import { Container, DeleteBtn, Text } from "./styled";
import { DeleteModalValues } from "./types";

export const DeleteModal = () => {
	// const [isOpen, setIsOpen] = useState(false);
	const {
		control,
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<DeleteModalValues>();

	const { mutate } = useMutation({
		mutationFn: async (id: string) => VacanciesService.delete(id),
	});

	const handleDelete = () => {
		if (isValid) {
			mutate("test");
		}
	};

	return (
		<ModalContainer isModalOpen={true}>
			<Container>
				<Text>Enter "delete" to delete the vacancy</Text>
				<form onSubmit={handleSubmit(handleDelete)}>
					<Controller
						name="deleteValue"
						control={control}
						render={({ field }) => (
							<TextInput
								errorText={errors.deleteValue?.message}
								isNotValid={!!errors.deleteValue?.message}
								placeholder="delete"
								{...register("deleteValue", {
									required: "this field is required",
									validate: (val: string) => {
										if (val != "delete") {
											return "Your value is not correct";
										}
									},
								})}
								{...field}
							/>
						)}
					/>
					<DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
				</form>
			</Container>
		</ModalContainer>
	);
};
