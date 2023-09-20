import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useMatch,
} from "react-router-dom"
import './App.css'
import Home from '@/Home'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, Tab } from '@/components/ui/tabs'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

import { AreaChart, Tractor} from 'lucide-react'


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
        path: "workers",
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
            <Tab key="Home" href="/" icon={AreaChart} active={!!useMatch("/")}>Home</Tab>
            <Tab key="Home" href="/workers" icon={Tractor} active={!!useMatch("/workers")}>Workers</Tab>
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
