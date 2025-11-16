// components/ChartsSection.jsx
import React from "react";
import AreaUsersChart from "./charts/AreaUsersChart";
import DevicesBarChart from "./charts/DevicesBarChart";
import LocationPieChart from "./charts/LocationPieChart";

export default function ChartsSection() {
  return (
    <section className="grid grid-cols-3 gap-3 mt-5">
      
      {/* Large Area Chart */}
      <div className="col-span-2 chart-frame p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="text-sm font-medium">Total Users</div>
          <div className="text-xs muted">This year</div>
        </div>

        <div style={{ height: 260 }}>
          <AreaUsersChart />
        </div>
      </div>

      {/* Right Top Widget */}
      <div className="light-card p-3 space-y-2">
        <div className="text-sm font-medium">Traffic by Website</div>
        <div className="text-xs muted leading-5">
          <div>Google</div>
          <div>YouTube</div>
          <div>Instagram</div>
          <div>Pinterest</div>
          <div>Facebook</div>
          <div>Twitter</div>
        </div>
      </div>

      {/* Bottom Left: Device (vertical bars) */}
      <div className="col-span-2 light-card p-4">
        <div className="text-sm font-medium mb-3">Traffic by Device</div>
        <div style={{ height: 240 }}>
          <DevicesBarChart />
        </div>
      </div>

      {/* Bottom Right: Location pie chart */}
      <div className="light-card p-4">
        <div className="text-sm font-medium mb-3">Traffic by Location</div>
        <div style={{ height: 220 }}>
          <LocationPieChart />
        </div>
      </div>
    </section>
  );
}
