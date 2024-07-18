import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

import { CompanyService, CreateCompanyQueryData } from "@/api/services";
import {
	Button,
	InputImageFile,
	Select,
	SetFileParams,
	TexAreaInput,
	TextInput,
} from "@packages/shared/src/components";
import { Error } from "global";

import { Container, ContentContainer, FormBlock, ImageContainer } from "./styled";
import { CreateCompanyFormValues } from "./types";
import { useState } from "react";

export const CreateCompanyForm = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		getValues,
		control,
	} = useForm<CreateCompanyFormValues>();

	const [companyImg, setCompanyImg] = useState<SetFileParams>({ file: null, filePath: null });

	const { mutate } = useMutation({
		mutationFn: async (data: CreateCompanyQueryData) => CompanyService.createCompany(data),
		onSuccess: () => {
			toast.success("Your company succes create");
		},
		onError: (error) => {
			const currentError = error as Error;
			toast.error(`${currentError.response?.data.message ?? "Something went wrong"}`);
		},
	});

	// вынест в отдельную утилиту формирование данных и переиспользовать
	const handleSubmitForm = () => {
		const currentData = getValues();
		const updatedData: CreateCompanyQueryData = {
			...currentData,
			companyImg: companyImg.file,
		};
		if (isValid) {
			const formData = new FormData();

			const newData = Object.entries(updatedData);

			newData.forEach((newDataItem) => {
				formData.append(newDataItem[0], newDataItem[1]);
			});

			mutate(formData as unknown as CreateCompanyQueryData);
		}
	};

	return (
		<>
			<Container>
				<FormBlock onSubmit={handleSubmit(handleSubmitForm)}>
					<ImageContainer>
						<InputImageFile setFile={setCompanyImg} />
					</ImageContainer>
					<ContentContainer>
						<Controller
							control={control}
							name="companyTitle"
							render={() => (
								<TextInput
									label="Company title"
									placeholder="your title"
									errorText={errors.companyTitle?.message}
									isNotValid={!!errors.companyTitle}
									{...register("companyTitle", { required: "this fieild is requried" })}
								/>
							)}
						/>
						<Controller
							control={control}
							name="location"
							render={() => (
								<TextInput
									label="Company location"
									placeholder="location"
									errorText={errors.location?.message}
									isNotValid={!!errors.location}
									{...register("location", { required: "this fieild is requried" })}
								/>
							)}
						/>
					</ContentContainer>
					<ContentContainer>
						<Controller
							control={control}
							name="tags"
							render={({ field }) => (
								<Select
									label="Tags for yout company"
									placeholder="tags"
									data={[]}
									isMulti={true}
									{...field}
								/>
							)}
						/>
					</ContentContainer>
					<ContentContainer>
						<Controller
							control={control}
							name="companyDescription"
							render={({ field }) => (
								<TexAreaInput label="Company Description" placeholder="description" {...field} />
							)}
						/>
					</ContentContainer>
					<Button clickFuntcion={handleSubmitForm}>submit</Button>
				</FormBlock>
			</Container>
			<Toaster />
		</>
	);
};
