// components/ChartsSection.jsx
import React from "react";
import AreaUsersChart from "./charts/AreaUsersChart";
import DevicesBarChart from "./charts/DevicesBarChart";
import LocationPieChart, { COLORS as LOCATION_COLORS } from "./charts/LocationPieChart";
import TrafficByWebsite from "../components/TrafficByWebsite"; // new import

const locationData = [
  { name: "United States", value: 52.1 },
  { name: "Canada", value: 22.8 },
  { name: "Mexico", value: 13.9 },
  { name: "Other", value: 11.2 },
];

export default function ChartsSection() {
  return (
    <section className="space-y-4 mt-5">
      {/* Top row: Area (left) + TrafficByWebsite (right) */}
      <div className="grid grid-cols-3 gap-3">
        <div 
          className="col-span-2  p-4 rounded-2xl bg-white"
          style={{
              background: "#F9F9FA"
          }}
        >
          <div className="flex justify-between items-start mb-2">
            <div className="text-sm font-medium">Total Users</div>
            <div className="text-xs text-gray-400">This year</div>
          </div>
          <div style={{ height: 260 }}>
            <AreaUsersChart />
          </div>
        </div>

        {/* Replaced small widget with improved TrafficByWebsite component */}
       
        <div
          className="flex flex-col gap-4 rounded-[20px]"
          style={{
            background: "#F9F9FA",
            padding: "24px",
            minWidth: 200,
            maxWidth: 272,
            height: 330,
          }}
        >
          <TrafficByWebsite />
        </div>
      </div>

      {/* Bottom row: 50% / 50% */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* <div className="light-card p-4 rounded-2xl border border-[#EAEDF0] bg-white"> */}
        <div
          className="flex flex-col p-4 gap-4 rounded-[20px]"
          style={{
            background: "#F9F9FA",
            // padding: "24px",
            // minWidth: 200,
            // maxWidth: 272,
            // height: 330,
          }}
        >
          <div className="text-sm font-medium mb-3">Traffic by Device</div>
          <div style={{ height: 240 }}>
            <DevicesBarChart />
          </div>
        </div>

        {/* <div className="light-card p-4 rounded-2xl border border-[#EAEDF0] bg-white"> */}
        <div
          className="flex flex-col gap-4 p-4 rounded-[20px]"
          style={{
            background: "#F9F9FA",
            // padding: "24px",
            // minWidth: 200,
            // maxWidth: 272,
            // height: 330,
          }}
        >
          <div className="text-sm font-medium mb-3">Traffic by Location</div>
          <div className="flex items-center">
            <div className="w-1/2" style={{ height: 220 }}>
              <LocationPieChart innerRadius={46} outerRadius={76} />
            </div>
            <div className="w-1/2 pl-4">
              <ul className="space-y-4">
                {locationData.map((item, idx) => (
                  <li key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-block rounded-sm"
                        style={{
                          width: 12,
                          height: 12,
                          background: LOCATION_COLORS[idx % LOCATION_COLORS.length],
                        }}
                      />
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                    <div className="text-sm text-gray-600">{item.value}%</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
