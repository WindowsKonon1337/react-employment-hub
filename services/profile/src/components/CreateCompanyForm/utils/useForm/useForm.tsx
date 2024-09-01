import { useState } from "react";
import { SetFileParams } from "@packages/shared/src/components";
import { useForm as useFormControl } from "react-hook-form";

import { CreateCompanyQueryData } from "@/api/services";

import { useData } from "./utils";
import { CreateCompanyFormValues } from "./types";

export const useForm = () => {
	const { handleConfirmForm } = useData();

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		getValues,
		control,
	} = useFormControl<CreateCompanyFormValues>();

	const [companyImg, setCompanyImg] = useState<SetFileParams>({ file: null, filePath: null });

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

			handleConfirmForm(formData as unknown as CreateCompanyQueryData);
		}
	};

	return { handleSubmitForm, register, handleSubmit, control, setCompanyImg, errors };
};
