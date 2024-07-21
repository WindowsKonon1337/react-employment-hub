import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { TextInput } from "@packages/shared/src/components";

import { FormWrapper, SubmitButton } from "../LoginForm/styled";
import { FormContent } from "../components";
import { useData } from "./utils";

interface ILoginInputs {
	firstName: string;
	lastName: string;
	email: string;
	repeatPassword: string;
	password: string;
}

export const RegistrationForm = () => {
	const { handleRegistration } = useData();
	const {
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = useForm<ILoginInputs>();

	const onSubmit: SubmitHandler<ILoginInputs> = (data, e?: React.BaseSyntheticEvent) => {
		e?.stopPropagation();
		const currentData = {
			...data,
		};
		handleRegistration(currentData);
		console.log(data);
	};

	return (
		<FormContent
			leftSideContentBlock="Registration"
			titleValue="Create"
			subtitleValue="Please completed to create your account"
			underFormLink={{ value: "Sign in", path: "/login" }}
			underFormText="already have account?"
		>
			<FormWrapper onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="firstName"
					control={control}
					rules={{
						required: "thies field is required",
					}}
					render={({ field }) => (
						<TextInput
							label="First name"
							placeholder="first name"
							isNotValid={!!errors.firstName?.message}
							errorText={errors.firstName?.message}
							{...field}
						/>
					)}
				/>
				<Controller
					name="lastName"
					control={control}
					rules={{
						required: "thies field is required",
					}}
					render={({ field }) => (
						<TextInput
							label="Last name"
							placeholder="last name"
							isNotValid={!!errors.lastName?.message}
							errorText={errors.lastName?.message}
							{...field}
						/>
					)}
				/>
				<Controller
					name="email"
					control={control}
					rules={{
						required: "thies field is required",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "Entered value does not match email format",
						},
					}}
					render={({ field }) => (
						<TextInput
							label="Email"
							placeholder="email"
							isNotValid={!!errors.email?.message}
							errorText={errors.email?.message}
							{...field}
						/>
					)}
				/>
				<Controller
					name="password"
					control={control}
					rules={{
						required: "this field is required",
					}}
					render={({ field }) => (
						<TextInput
							label="Password"
							placeholder="password"
							type="password"
							isNotValid={!!errors.password?.message}
							errorText={errors.password?.message}
							{...field}
						/>
					)}
				/>
				<Controller
					name="repeatPassword"
					control={control}
					rules={{
						required: "this field is required",
						validate: (val: string) => {
							if (watch("password") != val) {
								return "Your passwords do no match";
							}
						},
					}}
					render={({ field }) => (
						<TextInput
							label="Repeat your password"
							placeholder="password"
							type="password"
							isNotValid={!!errors.repeatPassword?.message}
							errorText={errors.repeatPassword?.message}
							{...field}
						/>
					)}
				/>
				<SubmitButton>login</SubmitButton>
			</FormWrapper>
			<Toaster />
		</FormContent>
	);
};
