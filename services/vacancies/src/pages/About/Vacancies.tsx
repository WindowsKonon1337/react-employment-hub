import { VacancyCard } from "@/components";

const Vacnacies = () => {
	return (
		<>
			<h1>Vacnacies</h1>
			<VacancyCard
				companyTitle="CompanyTitle"
				countCandidates={25}
				description="test etst etstet"
				isLiked={true}
				salary={{ amount: "250", inTime: "hour", currency: "rubles" }}
				tags={[
					{ title: "test1", color: "blue" },
					{ title: "test2", color: "violet" },
					{ title: "test3", color: "green" },
				]}
				vacancyTitle="VacancyTitle"
				id="1"
				postedTime="25"
			/>
		</>
	);
};

export default Vacnacies;
