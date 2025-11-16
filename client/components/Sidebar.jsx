// // components/Sidebar.jsx
// import React from 'react'

// export default function Sidebar() {
//   const sections = [
//     { title: 'Favorites', items: ['Overview', 'Projects'] },
//     { title: 'Dashboards', items: ['Overview', 'eCommerce', 'Projects'] },
//     { title: 'Pages', items: ['User Profile', 'Account', 'Blog', 'Social'] },
//   ]

//   return (
//     <aside className="w-64 p-6 bg-white bg-opacity-95 rounded-2xl flex-shrink-0 h-[86vh] sticky top-6">
//       <div className="flex items-center gap-3 mb-6">
//         <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center font-semibold text-slate-800">
//           BW
//         </div>
//         <div>
//           <div className="font-semibold text-slate-800">ByeWind</div>
//           <div className="text-xs text-slate-400">Admin</div>
//         </div>
//       </div>

//       <div className="space-y-4 text-sm text-slate-700">
//         {sections.map((s, idx) => (
//           <div key={idx}>
//             <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">
//               {s.title}
//             </div>
//             <div className="space-y-1">
//               {s.items.map((it) => (
//                 <div
//                   key={it}
//                   className={`py-2 px-3 rounded-lg ${
//                     it === 'Overview' ? 'bg-slate-100 font-medium' : 'hover:bg-slate-50'
//                   }`}
//                 >
//                   {it}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-auto flex items-center justify-center">
//         <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
//           N
//         </div>
//       </div>
//     </aside>
//   )
// }




// components/Sidebar.jsx
import React from 'react'

export default function Sidebar() {
  const sections = [
    { title: 'Favorites', items: ['Overview', 'Projects'] },
    { title: 'Dashboards', items: ['Overview', 'eCommerce', 'Projects'] },
    { title: 'Pages', items: ['User Profile', 'Account', 'Blog', 'Social'] },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center font-semibold text-slate-800">BW</div>
        <div>
          <div className="font-semibold text-slate-800">ByeWind</div>
          <div className="text-xs text-slate-400">Admin</div>
        </div>
      </div>

      <div className="space-y-6 text-sm text-slate-700 flex-1 overflow-auto pr-2">
        {sections.map((s, idx) => (
          <div key={idx}>
            <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">{s.title}</div>
            <div className="space-y-1">
              {s.items.map((it) => (
                <div key={it} className={`py-2 px-3 rounded-lg ${it === 'Overview' ? 'bg-slate-100 font-medium' : 'hover:bg-slate-50'}`}>
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">N</div>
      </div>
    </div>
  )
}
