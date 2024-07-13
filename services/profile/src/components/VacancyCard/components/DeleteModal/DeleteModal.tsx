import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "@packages/shared/src/components";

import { ModalContainer } from "@/components/ModalContainer";

import { Container, DeleteBtn, Text, Title } from "./styled";
import { DeleteModalProps, DeleteModalValues } from "./types";

export const DeleteModal: FC<DeleteModalProps> = ({ setShowModal, isOpen, title, handleDlete }) => {
	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<DeleteModalValues>();

	const onDelete = () => {
		if (isValid) {
			handleDlete?.();
			setShowModal?.(false);
			reset();
		}
	};

	return (
		<ModalContainer isModalOpen={isOpen} setCloseModal={setShowModal}>
			<Container>
				<Text>
					Enter "delete" to delete the <Title>{title}</Title>
				</Text>
				<form onSubmit={handleSubmit(onDelete)}>
					<Controller
						name="deleteValue"
						control={control}
						render={() => (
							<TextInput
								errorText={errors.deleteValue?.message}
								isNotValid={!!errors.deleteValue?.message}
								placeholder="delete"
								defaultValue=""
								{...register("deleteValue", {
									required: "this field is required",
									validate: (val: string) => {
										if (val != "delete") {
											return "Your value is not correct";
										}
									},
								})}
							/>
						)}
					/>
					<DeleteBtn isDleteBtn onClick={onDelete}>
						Delete
					</DeleteBtn>
				</form>
			</Container>
		</ModalContainer>
	);
};
