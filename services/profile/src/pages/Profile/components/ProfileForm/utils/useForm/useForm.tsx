import { useEffect, useState } from "react";
import { useForm as useFormControl } from "react-hook-form";
import { SetFileParams } from "@packages/shared/src/components";

import { ProfileRequestInfoData } from "@/api/services";

import { Inputs, useFormParams } from "./types";

export const useForm = ({ handleApplyData, handleResetData, initialData }: useFormParams) => {
	const {
		control,
		handleSubmit,
		reset,
		register,
		getValues,
		watch,
		formState: { errors, isValid },
	} = useFormControl<Inputs>();

	const [profileImg, setProfileImgPath] = useState<SetFileParams>({
		file: null,
		filePath: initialData?.profileImg,
	});

	const [isChangeValue, setIsChangeValue] = useState(false);

	const watchAllFields = watch();

	const handleCancelData = () => {
		setIsChangeValue(false);

		reset();
		setProfileImgPath({ file: null, filePath: initialData.profileImg });

		if (handleResetData) {
			handleResetData();
		}
	};

	useEffect(() => {
		const values = getValues();
		if (
			initialData &&
			(initialData?.email !== values.email ||
				initialData.lastName !== values.lastName ||
				initialData.name !== values.name ||
				initialData.phone !== values.phone ||
				initialData.profileImg !== profileImg.filePath)
		) {
			setIsChangeValue(true);
		} else {
			setIsChangeValue(false);
		}
	}, [watchAllFields, initialData, getValues, profileImg.filePath]);

	const handleConfirmData = () => {
		console.log(isValid);
		if (isValid) {
			const values = getValues();

			const currentData: ProfileRequestInfoData = {
				...values,
				profileImg: profileImg.file ?? null,
			};

			const formData = new FormData();

			const newData = Object.entries(currentData);

			newData.forEach((newDataItem) => formData.append(newDataItem[0], newDataItem[1]));

			handleApplyData(formData as unknown as ProfileRequestInfoData);
		}
	};

	return {
		control,
		errors,
		isChangeValue,
		handleSubmit,
		register,
		handleConfirmData,
		handleCancelData,
		setProfileImgPath,
		profileImg,
	};
};
