import { Dispatch, SetStateAction } from "react";

import { UpdateCompanyFormData } from "../../../../types";

export interface UseDataParams {
	currentData: UpdateCompanyFormData;
	id: string;
	setIsChangeData: Dispatch<SetStateAction<boolean>>;
}
