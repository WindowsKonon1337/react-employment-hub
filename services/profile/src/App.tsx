import { Layout } from "@packages/shared"
import { Link, Outlet } from "react-router-dom"

export const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
