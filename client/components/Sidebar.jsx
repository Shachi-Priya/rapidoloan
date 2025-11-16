// import React from 'react'

// export default function Sidebar() {
//   const sections = [
//     { title: 'Favorites', items: ['Overview', 'Projects'] },
//     { title: 'Dashboards', items: ['Overview', 'eCommerce', 'Projects'] },
//     { title: 'Pages', items: ['User Profile', 'Account', 'Blog', 'Social'] },
//   ]

//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex items-center gap-3 mb-6">
//         <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center font-semibold text-slate-800">BW</div>
//         <div>
//           <div className="font-semibold text-slate-800">ByeWind</div>
//           <div className="text-xs text-slate-400">Admin</div>
//         </div>
//       </div>

//       <div className="space-y-6 text-sm text-slate-700 flex-1 overflow-auto pr-2">
//         {sections.map((s, idx) => (
//           <div key={idx}>
//             <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">{s.title}</div>
//             <div className="space-y-1">
//               {s.items.map((it) => (
//                 <div key={it} className={`py-2 px-3 rounded-lg ${it === 'Overview' ? 'bg-slate-100 font-medium' : 'hover:bg-slate-50'}`}>
//                   {it}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 flex items-center justify-center">
//         <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">N</div>
//       </div>
//     </div>
//   )
// }






// components/Sidebar.jsx
import React from "react";
import {
  FiGrid,
  FiFolder,
  FiShoppingBag,
  FiUser,
  FiShield,
  FiFileText,
  FiUsers,
} from "react-icons/fi";

export default function Sidebar() {
  const sidebarData = [
    {
      title: "Favorites",
      items: [
        { label: "Overview", icon: <FiGrid /> },
        { label: "Projects", icon: <FiFolder /> },
      ],
    },
    {
      title: "Dashboards",
      items: [
        { label: "Overview", icon: <FiGrid /> },
        { label: "eCommerce", icon: <FiShoppingBag /> },
        { label: "Projects", icon: <FiFolder /> },
      ],
    },
    {
      title: "Pages",
      items: [
        { label: "User Profile", icon: <FiUser /> },
        { label: "Account", icon: <FiShield /> },
        { label: "Blog", icon: <FiFileText /> },
        { label: "Social", icon: <FiUsers /> },
      ],
    },
  ];

  return (
    <div className="flex flex-col h-full text-slate-700">
      {/* TOP BRAND */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center font-semibold text-slate-800">
          BW
        </div>
        <div>
          <div className="font-semibold text-slate-800">ByeWind</div>
          <div className="text-xs text-slate-400">Admin</div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="space-y-6 text-sm flex-1 overflow-auto pr-2">
        {sidebarData.map((sec, idx) => (
          <div key={idx}>
            <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">
              {sec.title}
            </div>

            <div className="space-y-1">
              {sec.items.map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 py-2 px-2 rounded-md hover:bg-[rgba(15,23,42,0.03)] transition"
                >
                  <span className="text-[18px] text-slate-500">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
