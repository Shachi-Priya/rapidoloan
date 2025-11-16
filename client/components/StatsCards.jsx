// components/StatsCards.jsx
import React from "react";

export default function StatsCards() {
  const stats = [
    {
      title: "Views",
      value: "7,265",
      change: "+11.01%",
      positive: true,
      bg: "bg-[#EEF2FF]" // light purple
    },
    {
      title: "Visits",
      value: "3,671",
      change: "-0.03%",
      positive: false,
      bg: "bg-[#F0F9FF]" // light blue
    },
    {
      title: "New Users",
      value: "156",
      change: "+15.03%",
      positive: true,
      bg: "bg-[#F8F0FF]" // light pink/purple
    },
    {
      title: "Active Users",
      value: "2,318",
      change: "+6.08%",
      positive: true,
      bg: "bg-[#F0FFF4]" // light green
    },
  ];

  return (
    <section className="grid grid-cols-4 gap-4 mt-2">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`${s.bg} relative rounded-2xl p-5 shadow-sm border border-[#EAEDF0] flex flex-col`}
        >
          {/* Decorative circle top-right (like Figma) */}
          <div className="text-sm text-gray-600">{s.title}</div>

          <div className="text-3xl font-semibold mt-2">{s.value}</div>

          <div
            className={`text-sm font-medium mt-1 flex items-center gap-1 ${
              s.positive ? "text-green-600" : "text-red-500"
            }`}
          >
            {/* Small arrow icon */}
            <span>{s.positive ? "↑" : "↓"}</span>
            <span>{s.change}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
