import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { FormContent } from "../components";

import { FormWrapper, Input, SubmitButton } from "./styled";

interface ILoginInputs {
	email: string;
	password: string;
}

export const LoginForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<ILoginInputs>();

	const onSubmit: SubmitHandler<ILoginInputs> = (data, e?: React.BaseSyntheticEvent) => {
		e?.stopPropagation();
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
						<Input
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
						<Input
							label="Password"
							placeholder="password"
							isNotValid={!!errors.password?.message}
							errorText={errors.password?.message}
							{...field}
						/>
					)}
				/>
				<SubmitButton>login</SubmitButton>
			</FormWrapper>
		</FormContent>
	);
};
