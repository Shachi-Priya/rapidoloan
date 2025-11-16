// pages/index.js
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import OverviewBar from "../components/OverviewBar";
import StatsCards from "../components/StatsCards";
import ChartsSection from "../components/ChartsSection";
import RightPanel from "../components/RightPanel";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)]">
      {/* Full tight layout: no extra padding, no margin */}
      <div
        className="grid grid-cols-[260px_1fr_300px] gap-4 w-full mx-auto"
        style={{ alignItems: "start" }}
      >
        {/* LEFT */}
        <aside className="h-screen sticky top-0">
          <div className="frame h-full p-3">
            <Sidebar />
          </div>
        </aside>

        {/* CENTER */}
        <main className="h-screen overflow-y-auto">
          <div className="frame p-3 space-y-4">
            <Header />
            <OverviewBar />
            <StatsCards />
            <ChartsSection />
          </div>
        </main>

        {/* RIGHT */}
        <aside className="h-screen sticky top-0">
          <div className="frame h-full p-3 overflow-y-auto">
            <RightPanel />
          </div>
        </aside>
      </div>
    </div>
  );
}
