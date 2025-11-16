// import React from 'react'
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

// const locationData = [
//   { name: 'United States', value: 52.1 },
//   { name: 'Canada', value: 22.8 },
//   { name: 'Mexico', value: 13.9 },
//   { name: 'Other', value: 11.2 },
// ]
// const COLORS = ['#2ecc71', '#74b9ff', '#ffeaa7', '#dfe6e9']

// export default function LocationPieChart() {
//   return (
//     <div className="card p-4">
//       <div className="text-sm font-medium mb-2">Traffic by Location</div>
//       <div style={{ width: '100%', height: 160 }}>
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie data={locationData} dataKey="value" nameKey="name" innerRadius={36} outerRadius={56} paddingAngle={4}>
//               {locationData.map((entry, index) => (
//                 <Cell key={index} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Legend layout="vertical" align="right" verticalAlign="middle" />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   )
// }





// components/charts/LocationPieChart.jsx
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "United States", value: 52.1 },
  { name: "Canada", value: 22.8 },
  { name: "Mexico", value: 13.9 },
  { name: "Other", value: 11.2 },
];
const COLORS = ["#2ecc71", "#74b9ff", "#ffe082", "#dfe6e9"];

export default function LocationPieChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="40%"
          cy="50%"
          innerRadius={44}
          outerRadius={72}
          paddingAngle={6}
          startAngle={90}
          endAngle={-270}
          isAnimationActive={false}
        >
          {data.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip
          formatter={(value) => `${value}%`}
          itemStyle={{ color: "#111827" }}
        />

        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconType="square"
          wrapperStyle={{ right: 0, top: "50%", transform: "translateY(-50%)" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
