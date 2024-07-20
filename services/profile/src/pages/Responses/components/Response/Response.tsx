import { FC } from "react";

import { ResponseParams } from "./types";
import { ResponseBlock, Subtitle, VacancyContainer } from "./styled";

export const Response: FC<ResponseParams> = ({ data, status }) => {
	return (
		<VacancyContainer to={`/vacancy/${data.id}`}>
			<Subtitle $status={status}>{status}</Subtitle>
			<ResponseBlock $status={status} data={data} isOnlyRead />
		</VacancyContainer>
	);
};
