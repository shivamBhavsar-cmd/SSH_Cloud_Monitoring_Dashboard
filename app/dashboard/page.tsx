"use client";

import MenuBar from "../components/MenuBar";
import Dashboard from "../components/Dashboard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <MenuBar />
      <div className="container mx-auto p-4">
        <Dashboard />
      </div>
    </main>
  );
}

// "use client";

// import Dashboard from "../components/Dashboard";

// export default function DashboardPage() {
//   return <Dashboard />;
// }
