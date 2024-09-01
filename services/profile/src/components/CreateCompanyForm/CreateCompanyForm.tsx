import { Controller } from "react-hook-form";
import { Toaster } from "react-hot-toast";

import {
	Button,
	InputImageFile,
	Select,
	TexAreaInput,
	TextInput,
} from "@packages/shared/src/components";

import { Container, ContentContainer, FormBlock, ImageContainer } from "./styled";
import { useForm } from "./utils";

export const CreateCompanyForm = () => {
	const { control, errors, handleSubmit, handleSubmitForm, register, setCompanyImg } = useForm();

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
									errorText={errors.companyTitle?.message ?? ""}
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
									errorText={errors.location?.message ?? ""}
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
