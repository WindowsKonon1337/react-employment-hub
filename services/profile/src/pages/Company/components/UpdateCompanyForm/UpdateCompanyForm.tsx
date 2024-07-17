import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import { Container } from "@/components";
import { InputImageFile, Select, TextInput } from "@packages/shared/src/components";
import { UpdateCompanyFormData, UpdateCompanyFormProps } from "./types";
// TODO: вынести в либу и переиспользовать
import { ContentRow } from "@/components/CompanyCard/styled";

export const UpdateCompanyForm: FC<UpdateCompanyFormProps> = ({ data }) => {
	const { companyDescription, companyTitle, location, tags, companyImg } = data;
	const {
		control,
		formState: { errors },
		getValues,
		reset,
		register,
	} = useForm<UpdateCompanyFormData>();

	return (
		<Container>
			<InputImageFile imgPath={companyImg} />
			<form>
				<ContentRow>
					<Controller
						name="companyTitle"
						control={control}
						defaultValue={companyTitle}
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
						defaultValue={location}
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
					defaultValue={tags}
					render={({ field }) => <Select data={tags} isMulti label="Tags" {...field} />}
				/>
				<Controller
					name="companyDescription"
					control={control}
					defaultValue={companyDescription}
					render={() => (
						<TextInput
							label="Company description"
							placeholder="description"
							errorText={errors.companyDescription?.message}
						/>
					)}
				/>
			</form>
		</Container>
	);
};
