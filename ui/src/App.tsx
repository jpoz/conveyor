import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"
import './App.css'
import Home from './Home'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Tabs, Tab } from '@/components/ui/Tabs'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

import { BuildingOfficeIcon, CreditCardIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid'

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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

function Root() {
  return (
    <div>
      <Card>
        <div className="flex items-center justify-between p-6">
          <Tabs>
            <Tab key="Home" href="/" icon={UserIcon} active>Home</Tab>
            <Tab key="Team" href="/team" icon={UsersIcon}>Team</Tab>
          </Tabs>
          <ModeToggle />
        </div>
        <Outlet />
      </Card>
    </div>
  )
}

function Team() {
  return (
    <div>
      <h1 className="text-3xl text-emerald-500">Team</h1>
      <Button>Button</Button>
    </div>
  )
}

export default App
