import { Container, VacancyCard } from "@/components";

const Vacancy = () => {
	return (
		<Container>
			<VacancyCard
				data={{
					description: "test etste",
					id: "test",
					tags: [{ value: "test", label: "test" }],
					title: "test",
					salary: { amount: "200", currency: "euros", inTime: "hour" },
				}}
			/>
		</Container>
	);
};

export default Vacancy;
