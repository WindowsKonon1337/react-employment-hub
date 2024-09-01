import { useEffect, useState } from "react";
import { useForm as useFormControl } from "react-hook-form";
import { SetFileParams } from "@packages/shared/src/components";

import { CreateCompanyQueryData } from "@/api/services";
import { getTagsEqual } from "@/utils";

import { UpdateCompanyFormData } from "../../types";
import { UseFormParams } from "./types";
import { useData } from "./utils";

export const useForm = ({ currentData, id }: UseFormParams) => {
	const [isChangeData, setIsChangeData] = useState(false);

	const [companyImg, setCompanyImg] = useState<SetFileParams>({
		file: null,
		filePath: currentData.companyImg,
	});

	const { companyData, handleUpdateData: handleUpdateDataQuery } = useData({
		currentData,
		id,
		setIsChangeData,
	});

	const {
		control,
		formState: { errors, isValid },
		getValues,
		watch,
		register,
		reset,
		handleSubmit,
	} = useFormControl<UpdateCompanyFormData>();

	const watchAllFields = watch();

	const handleUpdateData = () => {
		const currentData = getValues();
		const updatedData: CreateCompanyQueryData = {
			...currentData,
			tags: currentData.tags,
			companyImg: companyImg.file,
		};
		if (isValid) {
			const formData = new FormData();

			const newData = Object.entries(updatedData);

			newData.forEach((newDataItem) => {
				formData.append(newDataItem[0], newDataItem[1]);
			});

			handleUpdateDataQuery(formData as unknown as CreateCompanyQueryData);
		}
	};

	const handleResetData = () => {
		setCompanyImg({ file: null, filePath: currentData.companyImg });
		reset();
	};

	useEffect(() => {
		const values = getValues();
		const {
			companyDescription,
			companyTitle,
			location,
			tags,
			companyImg: currentCompanyImg,
		} = currentData;

		if (
			companyDescription !== values.companyDescription ||
			companyTitle !== values.companyTitle ||
			location !== values.location ||
			currentCompanyImg !== companyImg.filePath ||
			!getTagsEqual(tags, values.tags)
		) {
			setIsChangeData(true);
		} else {
			setIsChangeData(false);
		}
	}, [getValues, companyData, companyImg, watchAllFields]);

	return {
		handleResetData,
		handleUpdateData,
		control,
		register,
		handleSubmit,
		setCompanyImg,
		errors,
		isChangeData,
		companyData,
		companyImg,
	};
};
