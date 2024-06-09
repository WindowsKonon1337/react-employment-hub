import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { TextInput } from "@packages/shared/src/components/TextInput";

import { FormBlock, NotificationBlock, ProfileImg, RowContainer } from "./styled";
import { ProfileFormProps } from "./types";

type Inputs = {
	email: string;
	name: string;
	lastName: string;
	phone: string;
	profileImage: Blob;
};

export const ProfileForm: FC<ProfileFormProps> = ({ data, handleApplyData, handleResetData }) => {
	const {
		control,
		handleSubmit,
		reset,
		register,
		getValues,
		watch,
		formState: { errors, isValid },
	} = useForm<Inputs>();

	const [isChangeValue, setIsChangeValue] = useState(false);

	const watchAllFields = watch();

	const handleCancelData = () => {
		setIsChangeValue(false);

		reset();

		if (handleResetData) {
			handleResetData();
		}
	};

	useEffect(() => {
		const values = getValues();
		if (
			data &&
			(data?.email !== values.email ||
				data.lastName !== values.lastName ||
				data.name !== values.name ||
				data.phone !== values.phone)
		) {
			setIsChangeValue(true);
		} else {
			setIsChangeValue(false);
		}
	}, [watchAllFields, data, getValues]);

	const handleConfirmData = () => {
		console.log(isValid);
		if (isValid) {
			const values = getValues();

			handleApplyData({
				email: values.email,
				lastName: values.lastName,
				name: values.name,
				phone: values.phone,
				profileImg: values.profileImage,
			});
		}
	};

	return (
		<FormBlock onSubmit={handleSubmit(handleConfirmData)}>
			<RowContainer>
				<ProfileImg />
			</RowContainer>
			<RowContainer>
				<Controller
					name="name"
					control={control}
					defaultValue={data.name}
					render={() => (
						<TextInput
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
						<TextInput
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
						<TextInput
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
					render={() => <TextInput label="Phone" defaultValue={data.name} {...register("phone")} />}
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
	);
};
