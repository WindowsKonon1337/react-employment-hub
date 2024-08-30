import { FC } from "react";
import { Controller } from "react-hook-form";
import { InputImageFile } from "@packages/shared/src/components";

import { FormBlock, Input, NotificationBlock, RowContainer } from "./styled";
import { ProfileFormProps } from "./types";
import { useForm } from "./utils";

export const ProfileForm: FC<ProfileFormProps> = ({ data, handleApplyData, handleResetData }) => {
	const {
		control,
		errors,
		handleCancelData,
		handleConfirmData,
		handleSubmit,
		isChangeValue,
		register,
		profileImg,
		setProfileImgPath,
	} = useForm({ handleApplyData, handleResetData, initialData: data });

	return (
		<>
			<FormBlock onSubmit={handleSubmit(handleConfirmData)}>
				<RowContainer>
					<InputImageFile setFile={setProfileImgPath} imgPath={profileImg.filePath} />
				</RowContainer>
				<RowContainer>
					<Controller
						name="name"
						control={control}
						defaultValue={data.name}
						render={() => (
							<Input
								label="Name"
								errorText={errors.name?.message}
								isNotValid={!!errors.name?.message}
								defaultValue={data.name}
								{...register("name", { required: "this filed is required" })}
							/>
						)}
					/>
					<Controller
						name="lastName"
						control={control}
						defaultValue={data.lastName}
						render={() => (
							<Input
								label="Last name"
								errorText={errors.lastName?.message}
								isNotValid={!!errors.lastName?.message}
								defaultValue={data.name}
								{...register("lastName", { required: "this filed is required" })}
							/>
						)}
					/>
				</RowContainer>
				<RowContainer>
					<Controller
						name="email"
						control={control}
						defaultValue={data.email}
						render={() => (
							<Input
								label="Email"
								defaultValue={data.name}
								errorText={
									errors.email?.message || (errors.email?.type === "pattern" ? "enter the valid email" : "")
								}
								isNotValid={!!errors.email?.message || errors.email?.type === "pattern"}
								{...register("email", {
									required: "this is required",
									pattern:
										/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
								})}
							/>
						)}
					/>
					<Controller
						name="phone"
						control={control}
						defaultValue={data.phone}
						render={() => <Input label="Phone" defaultValue={data.name} {...register("phone")} />}
					/>
				</RowContainer>
				{isChangeValue && (
					<NotificationBlock
						title="Update data"
						applySettings={{ appyTitle: "apply", handleApply: handleConfirmData }}
						resetSettings={{ handleReset: handleCancelData, resetTitle: "cancel" }}
					/>
				)}
			</FormBlock>
		</>
	);
};
