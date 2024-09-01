import { FC } from "react";
import { Controller } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { NotificationBlock } from "@/pages/Profile/components/ProfileForm/styled";
import { InputImageFile, Select, TexAreaInput, TextInput } from "@packages/shared/src/components";

// TODO: вынести в либу и переиспользовать
import { ContentRow } from "@/components/CompanyCard/styled";
import { Container } from "@/components";

import { UpdateCompanyFormProps } from "./types";
import { useForm } from "./utils";

export const UpdateCompanyForm: FC<UpdateCompanyFormProps> = ({ data, id }) => {
	const {
		control,
		errors,
		handleResetData,
		handleSubmit,
		handleUpdateData,
		isChangeData,
		register,
		companyData,
		companyImg,
		setCompanyImg,
	} = useForm({ currentData: data, id });

	return (
		<Container>
			<InputImageFile imgPath={companyImg.filePath} setFile={setCompanyImg} />
			<form onSubmit={handleSubmit(handleUpdateData)}>
				<ContentRow>
					<Controller
						name="companyTitle"
						control={control}
						defaultValue={companyData.companyTitle}
						render={() => (
							<TextInput
								label="Company title"
								placeholder="title"
								errorText={errors.companyTitle?.message}
								{...register("companyTitle", { required: "this field is required" })}
							/>
						)}
					/>
					<Controller
						name="location"
						control={control}
						defaultValue={companyData.location}
						render={() => (
							<TextInput
								label="Company location"
								placeholder="location"
								errorText={errors.location?.message}
								{...register("location", { required: "this field is required" })}
							/>
						)}
					/>
				</ContentRow>
				<Controller
					name="tags"
					control={control}
					defaultValue={companyData.tags}
					render={({ field }) => (
						<Select
							data={companyData.tags.map((tag) => ({ value: tag.value, label: tag.value }))}
							isMulti
							label="Tags"
							{...field}
						/>
					)}
				/>
				<Controller
					name="companyDescription"
					control={control}
					defaultValue={companyData.companyDescription}
					render={() => (
						<TexAreaInput
							placeholder="description"
							label="Description"
							{...register("companyDescription")}
						/>
					)}
				/>
			</form>
			{isChangeData && (
				<NotificationBlock
					title="Change company info"
					applySettings={{
						appyTitle: "update",
						handleApply: handleUpdateData,
					}}
					resetSettings={{
						resetTitle: "cancel",
						handleReset: handleResetData,
					}}
				/>
			)}
			<Toaster />
		</Container>
	);
};
