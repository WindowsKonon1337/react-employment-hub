import { FC } from "react";
import { Title } from "@packages/shared/src/components";

import { TagsWrapper } from "@/components/VacancyCard";
import { Tag } from "@/components";

import { ContentBlock, TitleBlock, VacancyDescription } from "./styled";
import { VacancyContentProps } from "./types";

export const VacancyContent: FC<VacancyContentProps> = ({ description, tags, title }) => {
	return (
		<ContentBlock>
			<TitleBlock>
				<Title size="l">{title}</Title>
				<TagsWrapper>
					{tags.map((tag, idx) => (
						<Tag data={tag} key={`Tag_${idx}`} />
					))}
				</TagsWrapper>
			</TitleBlock>
			<VacancyDescription>{description}</VacancyDescription>
		</ContentBlock>
	);
};
