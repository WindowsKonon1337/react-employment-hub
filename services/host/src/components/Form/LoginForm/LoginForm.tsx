import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { TextInput } from "@packages/shared/src/components";

import { FormContent } from "../components";
import { FormWrapper, SubmitButton } from "./styled";
import { useData } from "./utils";

interface ILoginInputs {
	email: string;
	password: string;
}

export const LoginForm = () => {
	const { handleLogin } = useData();

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = useForm<ILoginInputs>();

	const onSubmit: SubmitHandler<ILoginInputs> = (data, e?: React.BaseSyntheticEvent) => {
		e?.stopPropagation();
		handleLogin(data);
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
					render={() => (
						<TextInput
							label="Email"
							placeholder="email"
							isNotValid={!!errors.email?.message}
							errorText={errors.email?.message}
							{...register("email", {
								required: "thies field is required",
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: "Entered value does not match email format",
								},
							})}
						/>
					)}
				/>
				<Controller
					name="password"
					control={control}
					render={() => (
						<TextInput
							label="Password"
							placeholder="password"
							type="password"
							isNotValid={!!errors.password?.message}
							errorText={errors.password?.message}
							{...register("password", {
								required: "thies field is required",
							})}
						/>
					)}
				/>
				<SubmitButton>login</SubmitButton>
			</FormWrapper>
			<Toaster />
		</FormContent>
	);
};
