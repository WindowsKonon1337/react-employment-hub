import { Link, Outlet } from "react-router-dom"

export const App = () => {
  return (
    <>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/vacancies"}>vacancies</Link>
      <div>hello world</div>
      <Outlet />
    </>
  )
}
