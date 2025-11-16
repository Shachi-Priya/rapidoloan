// components/charts/AreaUsersChart.jsx
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";

const data = [
  { month: "Jan", value: 7000, lastYear: 6000 },
  { month: "Feb", value: 9000, lastYear: 8000 },
  { month: "Mar", value: 10000, lastYear: 11000 },
  { month: "Apr", value: 22000, lastYear: 15000 },
  { month: "May", value: 28000, lastYear: 18000 },
  { month: "Jun", value: 25000, lastYear: 23000 },
  { month: "Jul", value: 26000, lastYear: 20000 },
];

export default function AreaUsersChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8ea0ff" stopOpacity={0.16} />
            <stop offset="95%" stopColor="#8ea0ff" stopOpacity={0.02} />
          </linearGradient>
        </defs>

        <XAxis dataKey="month" tick={{ fill: "#9AA3B2" }} axisLine={false} />
        <YAxis tick={{ fill: "#9AA3B2" }} axisLine={false} />
        <CartesianGrid stroke="#EAEDF0" strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#6c5ce7" fill="url(#grad)" />
        <Line type="monotone" dataKey="lastYear" stroke="#b2bec3" strokeDasharray="5 5" dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
