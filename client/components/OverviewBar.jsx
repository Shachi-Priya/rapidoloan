// components/OverviewBar.jsx
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // optional, remove if you don't have heroicons

export default function OverviewBar() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="mt-2 text-2xl font-semibold text-gray-800">Overview</h1>
      </div>

      <div className="flex items-center space-x-3">
        <button
          className="flex items-center gap-2 px-3 py-2 text-sm"
          aria-label="period"
        >
          <span className="text-sm text-gray-700">Today</span>
          {/* use any icon you like, or remove */}
          <ChevronDownIcon className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
