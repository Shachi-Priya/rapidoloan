// components/StatsCards.jsx
import React from "react";

export default function StatsCards() {
  const stats = [
    { title: "Views", value: "7,265", change: "+11.01%" },
    { title: "Visits", value: "3,671", change: "-0.03%" },
    { title: "New Users", value: "156", change: "+15.03%" },
    { title: "Active Users", value: "2,318", change: "+6.08%" },
  ];

  return (
    <section className="grid grid-cols-4 gap-3 mt-4">
      {stats.map((s, i) => (
        <div key={i} className="kpi-chip">
          <div className="text-sm muted">{s.title}</div>
          <div className="text-2xl font-semibold mt-2">{s.value}</div>
          <div className="text-xs muted mt-1">{s.change}</div>
        </div>
      ))}
    </section>
  );
}
