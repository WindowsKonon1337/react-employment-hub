import { FC, useState } from "react";
import { Title } from "@packages/shared/src/components";
import { Toaster } from "react-hot-toast";

// @ts-ignore
import TrashCan from "@packages/shared/src/assets/delete/trash.svg";

import { DeleteModal } from "../DeleteModal";
import { CompanyCardProps } from "./types";
import {
	CompanyAvatar,
	CompanyContainer,
	ContentRow,
	DeleteBtn,
	RightSideContent,
	Tag,
	Text,
	TopContent,
} from "./styled";
import { useData } from "./utils";

export const CompanyCard: FC<CompanyCardProps> = ({ data, className }) => {
	const { companyTitle, location, tags, companyImg, companyDescription, id } = data;

	const { handleDeleteCompany } = useData();
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const handleDelete = () => {
		handleDeleteCompany(id);
	};

	return (
		<>
			<CompanyContainer className={className} to={`${id}`}>
				<TopContent>
					{companyImg && <CompanyAvatar src={companyImg} />}
					<RightSideContent>
						<ContentRow>
							<Title size="m">{companyTitle}</Title>
						</ContentRow>
						<ContentRow>
							{tags.map((tag, idx) => (
								<Tag key={`Tag_${idx}`}>{tag.value}</Tag>
							))}
						</ContentRow>
						<ContentRow>
							<Text>{location}</Text>
						</ContentRow>
					</RightSideContent>
					<DeleteBtn
						onClick={(e) => {
							e.preventDefault();
							setIsDeleteModalOpen(true);
						}}
					>
						<TrashCan />
					</DeleteBtn>
				</TopContent>
				<ContentRow>
					<Text>{companyDescription}</Text>
				</ContentRow>
				<Toaster />
			</CompanyContainer>
			{isDeleteModalOpen && (
				<DeleteModal
					setShowModal={setIsDeleteModalOpen}
					title={companyTitle}
					isOpen={isDeleteModalOpen}
					handleDlete={handleDelete}
				/>
			)}
		</>
	);
};
