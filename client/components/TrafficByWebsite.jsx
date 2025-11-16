// components/TrafficByWebsite.jsx
import React from "react";

/**
 * Traffic by Website (Figma-accurate version)
 * - Equal spacing between rows
 * - Proper bar thickness
 * - Clean left/middle/right alignment
 */

const data = [
  { name: "Google", value: 38, color: "#111827" },
  { name: "YouTube", value: 22, color: "#6B7280" },
  { name: "Instagram", value: 14, color: "#9CA3AF" },
  { name: "Pinterest", value: 12, color: "#D1D5DB" },
  { name: "Facebook", value: 9, color: "#E5E7EB" },
  { name: "Twitter", value: 5, color: "#F3F4F6" },
];

export default function TrafficByWebsite() {
  return (
    <div className="w-full">
      {/* Title */}
      <div className="text-sm font-medium mb-4">Traffic by Website</div>

      {/* List with equal spacing */}
      <ul className="flex flex-col gap-4">
        {data.map((d) => (
          <li key={d.name} className="flex items-center w-full">
            {/* Left Label */}
            <div className="w-28 text-sm text-gray-700">{d.name}</div>

            {/* Middle Bar */}
            <div className="flex-1 mx-4">
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${d.value}%`,
                    backgroundColor: d.color,
                  }}
                />
              </div>
            </div>

            {/* Percentage */}
            <div className="w-10 text-right text-sm text-gray-700">
              {d.value}%
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
