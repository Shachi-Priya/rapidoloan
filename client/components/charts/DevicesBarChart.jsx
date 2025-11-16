// import React from 'react'
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

// const deviceData = [
//   { name: 'Linux', value: 8000 },
//   { name: 'Mac', value: 25000 },
//   { name: 'iOS', value: 20000 },
//   { name: 'Windows', value: 28000 },
//   { name: 'Android', value: 15000 },
//   { name: 'Other', value: 12000 },
// ]
// const COLORS = ['#55efc4', '#74b9ff', '#ffeaa7', '#dfe6e9', '#6c5ce7', '#a29bfe']

// export default function DevicesBarChart() {
//   return (
//     <div className="card p-4">
//       <div className="text-sm font-medium mb-2">Traffic by Device</div>
//       <div style={{ width: '100%', height: 160 }}>
//         <ResponsiveContainer>
//           <BarChart data={deviceData} layout="vertical" margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
//             <XAxis type="number" hide />
//             <YAxis type="category" dataKey="name" width={90} tick={{ fill: '#94a3b8' }} />
//             <Tooltip />
//             <Bar dataKey="value" radius={[8, 8, 8, 8]}>
//               {deviceData.map((d, i) => (
//                 <Cell key={i} fill={COLORS[i % COLORS.length]} />
//               ))}
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   )
// }






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

const COLORS = ["#93c5fd", "#2dd4bf", "#cbd5e1", "#60a5fa", "#a78bfa", "#ffe082"];

export default function DevicesBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        data={deviceData} 
        margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
      >
        <XAxis dataKey="name" tick={{ fill: "#9AA3B2" }} />
        <YAxis hide />
        <Tooltip />

        <Bar 
          dataKey="value" 
          radius={[8, 8, 0, 0]} 
          barSize={28}
        >
          {deviceData.map((d, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
