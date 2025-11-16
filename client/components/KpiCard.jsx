// import React from 'react'

// export default function KpiCard({ title, value, hint }) {
//   return (
//     <div className="kpi card">
//       <div className="text-sm text-slate-500">{title}</div>
//       <div className="mt-2 text-2xl font-semibold text-slate-800">{value.toLocaleString()}</div>
//       {hint && <div className="text-xs text-slate-400 mt-1">{hint}</div>}
//     </div>
//   )
// }



// components/KpiCard.jsx
import React from "react";

export default function KpiCard({ title, value, hint }) {
  return (
    <div className="flex flex-col">
      <div className="text-sm muted">{title}</div>
      <div className="text-2xl font-semibold text-slate-800">{value.toLocaleString()}</div>
      {hint && <div className="text-xs muted mt-1">{hint}</div>}
    </div>
  );
}
