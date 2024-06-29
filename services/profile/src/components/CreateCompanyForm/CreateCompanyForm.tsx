import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

import { CreateCompanyService, CreateCompanyFormData } from "@/api/services";
import { Button, Select, TexAreaInput, TextInput } from "@packages/shared/src/components";
import { Error } from "global";

import { Container, ContentContainer, FormBlock } from "./styled";
import { CreateCompanyFormValues } from "./types";

export const CreateCompanyForm = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		getValues,
		control,
	} = useForm<CreateCompanyFormValues>();

	const { mutate } = useMutation({
		mutationFn: async (data: CreateCompanyFormData) => CreateCompanyService.createCompany(data),
		onSuccess: () => {
			toast.success("Your company succes create");
		},
		onError: (error) => {
			const currentError = error as Error;
			toast.error(`${currentError.response?.data.message ?? "Something went wrong"}`);
		},
	});

	const handleSubmitForm = () => {
		const currentData = getValues();
		const updatedData: CreateCompanyFormData = {
			...currentData,
			tags: currentData.tags.map((tag) => tag.value),
		};
		if (isValid) {
			mutate(updatedData);
		}
	};

	return (
		<>
			<Container>
				<FormBlock onSubmit={handleSubmit(handleSubmitForm)}>
					<ContentContainer>
						<Controller
							control={control}
							name="companyTitle"
							render={({ field }) => (
								<TextInput
									label="Company title"
									placeholder="your title"
									errorText={errors.companyTitle?.message}
									isNotValid={!!errors.companyTitle}
									{...register("companyTitle", { required: "this fieild is requried" })}
									{...field}
								/>
							)}
						/>
						<Controller
							control={control}
							name="location"
							render={({ field }) => (
								<TextInput
									label="Company location"
									placeholder="location"
									errorText={errors.location?.message}
									isNotValid={!!errors.location}
									{...register("location", { required: "this fieild is requried" })}
									{...field}
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
					<Button>submit</Button>
				</FormBlock>
			</Container>
			<Toaster />
		</>
	);
};
