// components/Header.jsx
import React from "react";
import { FiSearch, FiBell, FiSettings } from "react-icons/fi";

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b border-[var(--panel-border)] pb-4">
      <div className="flex items-center gap-4">
        <div className="text-slate-700 font-semibold">Dashboards</div>
        <div className="text-muted">/ Default</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <FiSearch className="absolute left-3 top-2.5 text-muted" />
          <input
            className="h-9 w-72 rounded-full border border-[var(--panel-border)] bg-transparent px-10 text-sm placeholder:text-muted outline-none"
            placeholder="Search"
          />
        </div>

        <button className="p-2 rounded-md hover:bg-[rgba(15,23,42,0.03)]">
          <FiBell />
        </button>
        <button className="p-2 rounded-md hover:bg-[rgba(15,23,42,0.03)]">
          <FiSettings />
        </button>

        <div className="flex items-center gap-2 bg-transparent px-3 py-1 rounded-full">
          <div className="text-sm">S</div>
        </div>
      </div>
    </div>
  );
}
