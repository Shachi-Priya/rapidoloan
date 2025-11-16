// // components/charts/LocationPieChart.jsx
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
//     <div className="bg-white bg-opacity-95 rounded-xl p-4 shadow-sm">
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
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const locationData = [
  { name: 'United States', value: 52.1 },
  { name: 'Canada', value: 22.8 },
  { name: 'Mexico', value: 13.9 },
  { name: 'Other', value: 11.2 },
]
const COLORS = ['#2ecc71', '#74b9ff', '#ffeaa7', '#dfe6e9']

export default function LocationPieChart() {
  return (
    <div className="card p-4">
      <div className="text-sm font-medium mb-2">Traffic by Location</div>
      <div style={{ width: '100%', height: 160 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={locationData} dataKey="value" nameKey="name" innerRadius={36} outerRadius={56} paddingAngle={4}>
              {locationData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
