import { Link, Outlet } from "react-router-dom";

export const App = () => {
	return (
		<>
			<h1>HOST</h1>
			<Link to={"/profile"}>profile</Link>
			<Link to={"/vacancies"}>vacancies</Link>
			<Outlet />
		</>
	);
};
