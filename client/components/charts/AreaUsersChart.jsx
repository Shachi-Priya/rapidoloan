// // components/charts/AreaUsersChart.jsx
// import React from 'react'
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts'

// const monthlyData = [
//   { month: 'Jan', value: 7000, lastYear: 6000 },
//   { month: 'Feb', value: 9000, lastYear: 8000 },
//   { month: 'Mar', value: 10000, lastYear: 11000 },
//   { month: 'Apr', value: 22000, lastYear: 15000 },
//   { month: 'May', value: 28000, lastYear: 18000 },
//   { month: 'Jun', value: 25000, lastYear: 23000 },
//   { month: 'Jul', value: 26000, lastYear: 20000 },
// ]

// export default function AreaUsersChart() {
//   return (
//     <div className="bg-white bg-opacity-95 rounded-xl p-4 shadow-sm">
//       <div className="flex items-center justify-between mb-2">
//         <div className="text-sm font-medium">Total Users</div>
//         <div className="text-xs text-slate-400">This year</div>
//       </div>

//       <div style={{ width: '100%', height: 240 }}>
//         <ResponsiveContainer>
//           <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
//             <defs>
//               <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#8ea0ff" stopOpacity={0.4} />
//                 <stop offset="95%" stopColor="#8ea0ff" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} />
//             <YAxis tick={{ fill: '#94a3b8' }} />
//             <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//             <Tooltip />
//             <Area type="monotone" dataKey="value" stroke="#6c5ce7" fill="url(#grad)" />
//             <Line type="monotone" dataKey="lastYear" stroke="#b2bec3" strokeDasharray="5 5" dot={false} />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   )
// }





// components/charts/AreaUsersChart.jsx
import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts'

const monthlyData = [
  { month: 'Jan', value: 7000, lastYear: 6000 },
  { month: 'Feb', value: 9000, lastYear: 8000 },
  { month: 'Mar', value: 10000, lastYear: 11000 },
  { month: 'Apr', value: 22000, lastYear: 15000 },
  { month: 'May', value: 28000, lastYear: 18000 },
  { month: 'Jun', value: 25000, lastYear: 23000 },
  { month: 'Jul', value: 26000, lastYear: 20000 },
]

export default function AreaUsersChart() {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium">Total Users</div>
        <div className="text-xs text-slate-400">This year</div>
      </div>

      <div style={{ width: '100%', height: 240 }}>
        <ResponsiveContainer>
          <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8ea0ff" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8ea0ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} />
            <YAxis tick={{ fill: '#94a3b8' }} />
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#6c5ce7" fill="url(#grad)" />
            <Line type="monotone" dataKey="lastYear" stroke="#b2bec3" strokeDasharray="5 5" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
