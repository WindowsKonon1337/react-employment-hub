import EmptyDataIcon from "public/img/VacancyCard/emptyData.svg";

import { EmptyDataPlug, PlugText } from "./styled";

export const EmptySection = () => (
	<EmptyDataPlug>
		<EmptyDataIcon />
		<PlugText>Nothing was found for your query</PlugText>
	</EmptyDataPlug>
);
