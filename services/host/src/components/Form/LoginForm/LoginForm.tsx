import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Error } from "global";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { TextInput } from "@packages/shared/src/components";

import { AuthorizationServices, LoginProps } from "@/api";

import { FormContent } from "../components";
import { FormWrapper, SubmitButton } from "./styled";

interface ILoginInputs {
	email: string;
	password: string;
}

export const LoginForm = () => {
	const navigation = useNavigate();
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<ILoginInputs>();

	const { mutate } = useMutation({
		mutationFn: async (data: LoginProps) => AuthorizationServices.login(data),
		onError(error) {
			console.log(error);
			const currentError = error as Error;
			toast.error(`${currentError.response?.data.message}`);
		},
		onSuccess(data) {
			toast.success("authorization is successful");
			console.log(data.data.accessToken);
			localStorage.setItem("accessToken", data.data.accessToken);
			// navigation("/vacancies");
		},
	});

	const { mutate: test } = useMutation({
		mutationFn: async () => AuthorizationServices.test(),
	});

	const onSubmit: SubmitHandler<ILoginInputs> = (data, e?: React.BaseSyntheticEvent) => {
		e?.stopPropagation();
		mutate(data);
		console.log(data);
	};

	return (
		<FormContent
			leftSideContentBlock="Login"
			titleValue="Hello Again!"
			subtitleValue="Enter your email and password"
			underFormLink={{ path: "/registration", value: "Create" }}
			underFormText="Don't have an account yet?"
		>
			<FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
				<SubmitButton>login</SubmitButton>
			</FormWrapper>
			<Toaster />
			<button onClick={() => test()}>test</button>
		</FormContent>
	);
};
