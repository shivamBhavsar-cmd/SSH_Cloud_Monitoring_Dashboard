"use client"

import { useAuth } from "./contexts/AuthContext"
import LoginPage from "./components/LoginPage"
import MenuBar from "./components/MenuBar"
import Dashboard from "./components/Dashboard"

export default function Home() {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    return <LoginPage />
  }

  return (
    <main className="min-h-screen bg-background">
      <MenuBar />
      <div className="container mx-auto p-4">
        <Dashboard />
      </div>
    </main>
  )
}

