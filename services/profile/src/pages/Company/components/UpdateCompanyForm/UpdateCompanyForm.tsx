import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { NotificationBlock } from "@/pages/Profile/components/ProfileForm/styled";
import { useMutation } from "@tanstack/react-query";
import {
	InputImageFile,
	Select,
	SetFileParams,
	TexAreaInput,
	TextInput,
} from "@packages/shared/src/components";

// TODO: вынести в либу и переиспользовать
import { ContentRow } from "@/components/CompanyCard/styled";
import { Error } from "@/global";
import { CompanyService, CreateCompanyQueryData } from "@/api/services";
import { Container } from "@/components";

import { UpdateCompanyFormData, UpdateCompanyFormProps } from "./types";
import { getTagsEqual } from "@/utils";

export const UpdateCompanyForm: FC<UpdateCompanyFormProps> = ({ data, id }) => {
	const [companyData, setCompanyData] = useState(data);
	const [isChangeData, setIsChangeData] = useState(false);
	const [companyImg, setCompanyImg] = useState<SetFileParams>({
		file: null,
		filePath: companyData.companyImg,
	});

	const {
		control,
		formState: { errors, isValid },
		getValues,
		watch,
		register,
		reset,
		handleSubmit,
	} = useForm<UpdateCompanyFormData>();

	const watchAllFields = watch();

	const { mutate: updateData } = useMutation({
		mutationFn: async (data: CreateCompanyQueryData) => CompanyService.updateCompany(id, data),
		onSuccess: (newData) => {
			setIsChangeData(false);
			setCompanyData(newData);
			toast.success("Company info success updated");
		},
		onError: (error: Error) => {
			setIsChangeData(true);
			toast.error(`${error.response?.data.message ?? "Something went wrong"}`);
		},
	});

	const handleUpdateData = () => {
		const currentData = getValues();
		const updatedData: CreateCompanyQueryData = {
			...currentData,
			tags: currentData.tags,
			companyImg: companyImg.file,
		};
		if (isValid) {
			const formData = new FormData();

			const newData = Object.entries(updatedData);

			newData.forEach((newDataItem) => {
				formData.append(newDataItem[0], newDataItem[1]);
			});

			updateData(formData as unknown as CreateCompanyQueryData);
		}
	};

	const handleResetData = () => {
		setCompanyImg({ file: null, filePath: companyData.companyImg });
		reset();
	};

	useEffect(() => {
		const values = getValues();
		const {
			companyDescription,
			companyTitle,
			location,
			tags,
			companyImg: currentCompanyImg,
		} = companyData;
		console.log(
			companyDescription !== values.companyDescription ||
				companyTitle !== values.companyTitle ||
				location !== values.location ||
				currentCompanyImg !== companyImg.filePath,
		);
		if (
			companyDescription !== values.companyDescription ||
			companyTitle !== values.companyTitle ||
			location !== values.location ||
			currentCompanyImg !== companyImg.filePath ||
			!getTagsEqual(tags, values.tags)
		) {
			setIsChangeData(true);
		} else {
			setIsChangeData(false);
		}
	}, [getValues, companyData, companyImg, watchAllFields]);

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
