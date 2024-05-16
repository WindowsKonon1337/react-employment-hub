import { Outlet } from "react-router-dom";
import { Layout } from "@packages/shared";
import { FiltersContext } from "./state";
import { useFilters } from "./state/useFilters";

export const App = () => {
	const filters = useFilters();

	console.log("filters", filters.filters);
	return (
		<Layout>
			<FiltersContext.Provider value={{ ...filters }}>
				<Outlet />
			</FiltersContext.Provider>
		</Layout>
	);
};
