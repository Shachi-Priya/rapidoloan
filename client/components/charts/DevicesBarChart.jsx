// components/charts/DevicesBarChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";

const deviceData = [
  { name: "Linux", value: 17000 },
  { name: "Mac", value: 30000 },
  { name: "iOS", value: 22000 },
  { name: "Windows", value: 31000 },
  { name: "Android", value: 13000 },
  { name: "Other", value: 24000 },
];

// Colors in same visual order as your Figma screenshot
const COLORS = ["#93C5FD", "#2DD4BF", "#000000", "#60A5FA", "#A78BFA", "#10B981"];

// Y-axis ticks to match Figma grid
const yTicks = [0, 7000, 14000, 21000, 28000];

function formatY(value) {
  if (value === 0) return "0";
  return `${Math.round(value / 1000)}K`;
}

export default function DevicesBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={deviceData}
        // leave extra bottom space so labels (Windows etc.) are visible
        margin={{ top: 8, right: 12, left: 12, bottom: 56 }}
        // larger gap so labels do not collide
        barCategoryGap="40%"
      >
        {/* subtle dotted horizontal grid like the Figma */}
        <CartesianGrid vertical={false} stroke="#EAEDF0" strokeDasharray="4 6" />

        {/* X axis - force every tick to render and push them down so they don't overlap */}
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#9AA3B2", fontSize: 13 }}
          padding={{ left: 8, right: 8 }}
          dy={18}      // push labels down a bit
          interval={0} // render all labels
        />

        {/* Y axis with ticks that match the visual reference */}
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#9AA3B2", fontSize: 12 }}
          tickFormatter={formatY}
          ticks={yTicks}
          width={40}
        />

        <Tooltip
          formatter={(value) =>
            new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value)
          }
          cursor={{ fill: "rgba(0,0,0,0.03)" }}
        />

        {/* Bars: less rounded corners (subtle radius), thinner barSize */}
        <Bar dataKey="value" radius={[8, 8, 8, 8]} barSize={26}>
          {deviceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
