// components/charts/DevicesBarChart.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const deviceData = [
  { name: "Linux", value: 8000 },
  { name: "Mac", value: 30000 },
  { name: "iOS", value: 18000 },
  { name: "Windows", value: 22000 },
  { name: "Android", value: 15000 },
  { name: "Other", value: 9000 },
];

const COLORS = ["#2dd4bf", "#10b981", "#93c5fd", "#60a5fa", "#a78bfa", "#ffe082"];

export default function DevicesBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={deviceData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
        <XAxis dataKey="name" tick={{ fill: "#9AA3B2" }} />
        <YAxis hide />
        <Tooltip />

        <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={28}>
          {deviceData.map((d, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
