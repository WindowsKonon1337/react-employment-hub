import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Select, TexAreaInput, TextInput, Title } from "@packages/shared/src/components";

import { ModalContainer, InputBlock, TitleInput } from "@/components";

import { FormWrapper } from "./styled";
import { useData } from "./utils";
import { CreateVacancyModalFormProps, CreateVacancyParams } from "./types";

export const CreateVacancyFormModal: FC<CreateVacancyModalFormProps> = ({ setCloseModal }) => {
	const {
		control,
		formState: { errors, isValid },
		register,
		getValues,
		handleSubmit,
	} = useForm<CreateVacancyParams>();

	const { handleCreateVacancy } = useData();

	const handleSubmitForm = () => {
		if (isValid) {
			const formValues = getValues();
			handleCreateVacancy(formValues);
		}
	};

	return (
		<ModalContainer isModalOpen={true} setCloseModal={setCloseModal}>
			<Title>Create new vacancy</Title>
			<FormWrapper onSubmit={handleSubmit(handleSubmitForm)}>
				<Controller
					name="title"
					control={control}
					render={({ field }) => (
						<TitleInput
							label="Title"
							isNotValid={!!errors.title?.message}
							errorText={errors.title?.message}
							{...field}
							{...register("title", { required: "this field is requred" })}
						/>
					)}
				/>
				<InputBlock>
					<Controller
						name="tags"
						control={control}
						render={({ field }) => <Select data={[]} isMulti label="Tags" {...field} />}
					/>
				</InputBlock>
				<InputBlock>
					<Controller
						name="salary.amount"
						control={control}
						render={({ field }) => <TextInput label="Slary amount" {...field} />}
					/>
					<Controller
						name="salary.currency"
						control={control}
						render={({ field }) => (
							<Select
								{...field}
								label="Salary currency"
								placeholder="currency type"
								data={[
									{ value: "rubles", label: "rubles" },
									{ label: "dollars", value: "dollars" },
									{ label: "euros", value: "euros" },
								]}
							/>
						)}
					/>
					<Controller
						name="salary.inTime"
						control={control}
						render={({ field }) => (
							<Select
								label="Salary in time"
								placeholder="salary in time"
								data={[
									{ value: "hour", label: "hour" },
									{ label: "year", value: "year" },
								]}
								{...field}
							/>
						)}
					/>
				</InputBlock>
				<Controller
					name="description"
					control={control}
					render={({ field }) => <TexAreaInput {...field} />}
				/>
				<Button clickFuntcion={handleSubmitForm}>create</Button>
			</FormWrapper>
		</ModalContainer>
	);
};
