import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Select, TextInput } from "@packages/shared/src/components";

import { AuthorizationServices, RegistrationProps } from "@/api";

import { FormWrapper, SubmitButton } from "../LoginForm/styled";
import { FormContent } from "../components";
import { Error } from "global";

interface ILoginInputs {
	firstName: string;
	lastName: string;
	email: string;
	repeatPassword: string;
	password: string;
	userRole: {
		value: string;
	};
}

export const RegistrationForm = () => {
	const navigate = useNavigate();
	const {
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = useForm<ILoginInputs>();

	const { mutate } = useMutation({
		mutationFn: async (data: RegistrationProps) => AuthorizationServices.registration(data),
		onSuccess(data) {
			toast.success("authorization is successful");
			const { data: registrationData } = data;
			localStorage.setItem("accessToken", registrationData.accessToken);
			setTimeout(() => {
				navigate("/vacancies");
			}, 500);
		},
		onError(error) {
			const currentError = error as Error;
			toast.error(`${currentError.response?.data.message}`);
		},
	});

	const onSubmit: SubmitHandler<ILoginInputs> = (data, e?: React.BaseSyntheticEvent) => {
		e?.stopPropagation();
		const currentData = {
			...data,
			userRole: data.userRole.value,
		};
		mutate(currentData);
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
							isNotValid={!!errors.repeatPassword?.message}
							errorText={errors.repeatPassword?.message}
							{...field}
						/>
					)}
				/>
				<Controller
					name="userRole"
					control={control}
					rules={{
						required: "this field is required",
					}}
					render={({ field }) => (
						<Select
							label="Choise account role"
							placeholder="Choise your role"
							data={[
								{ value: "COMPANY_OWNER", label: "company owner" },
								{ value: "APPLICANT", label: "applicant" },
							]}
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
