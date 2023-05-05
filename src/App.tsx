import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard, { dashboardLoader } from "./pages/Dashboard"
import Error from "./pages/Error"

const router = createBrowserRouter([
  { path: "/", element: <Dashboard />, loader: dashboardLoader },
  { path: "*", element: <Error />, loader: dashboardLoader },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}