import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"
import './App.css'
import Home from './Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

function Root() {
  return (
    <div>
      <h1>Root</h1>
      {import.meta.env.VITE_API_URL}
      <Outlet />
    </div>
  )
}

function Team() {

  return (
    <div>
      <h1>Team</h1>
    </div>
  )
}

export default App
