import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Select, TexAreaInput, TextInput } from "@packages/shared/src/components";

import { ModalContainer } from "@/components/ModalContainer";
import { VacancyQueryCardData } from "@/api/services";

import { SalaryData, VacnacyCardFormValues } from "../../types";
import { UpdateModalProps } from "./types";
import { BtnBlcok, FormBlock, InputBlock, TitleInput } from "./styled";

export const UpdateModal: FC<UpdateModalProps> = ({
	id,
	description,
	tags,
	title,
	salary,
	isOpen,
	setShowModal,
	handleUpdate,
	className,
}) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isValid },
		getValues,
		reset,
	} = useForm<VacnacyCardFormValues>();

	const onSubmit = () => {
		if (isValid) {
			const formData = getValues();
			const data: VacancyQueryCardData = {
				title: formData.title,
				tags: formData.tags.map((tag) => tag.value),
				description: formData.description,
				salary: formData.salary
					? ({
							amount: formData.salary?.amount,
							currency: formData.salary?.currency[0].value,
							inTime: formData.salary?.inTime[0].value,
						} as SalaryData)
					: null,
				id,
			};
			handleUpdate(id, data);
		}
	};

	const handleReset = () => {
		reset();
	};

	return (
		<ModalContainer isModalOpen={isOpen} setCloseModal={setShowModal} className={className}>
			<FormBlock onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="title"
					control={control}
					defaultValue={title}
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
						defaultValue={tags}
						render={({ field }) => <Select data={tags} isMulti label="Tags" {...field} />}
					/>
				</InputBlock>
				<InputBlock>
					<Controller
						name="salary.amount"
						control={control}
						defaultValue={salary?.amount}
						render={({ field }) => <TextInput label="Slary amount" {...field} />}
					/>
					<Controller
						name="salary.currency"
						control={control}
						defaultValue={[{ label: salary?.currency ?? "", value: salary?.currency ?? "" }]}
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
						defaultValue={[{ label: salary?.inTime ?? "", value: salary?.inTime ?? "" }]}
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
					defaultValue={description}
					render={({ field }) => <TexAreaInput {...field} />}
				/>
				<BtnBlcok>
					<Button clickFuntcion={onSubmit}>save</Button>
					<Button clickFuntcion={handleReset}>reset</Button>
				</BtnBlcok>
			</FormBlock>
		</ModalContainer>
	);
};
