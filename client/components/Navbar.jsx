// import React from 'react'
// import { FiSearch, FiBell, FiSettings } from 'react-icons/fi'

// export default function Navbar() {
//   return (
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-4">
//         <div className="text-slate-600 font-semibold">Dashboards</div>
//         <div className="text-slate-400">/ Default</div>
//       </div>

//       <div className="flex items-center gap-3">
//         <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm w-72">
//           <FiSearch className="text-slate-400" />
//           <input className="outline-none text-sm w-full" placeholder="Search" />
//         </div>

//         <button className="p-2 rounded-lg hover:bg-slate-100"><FiBell /></button>
//         <button className="p-2 rounded-lg hover:bg-slate-100"><FiSettings /></button>

//         <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
//           <div className="w-8 h-8 rounded-full bg-gray-200" />
//           <div className="text-sm">S</div>
//         </div>
//       </div>
//     </div>
//   )
// }




// components/Navbar.jsx
import React from "react";
import { FiSearch, FiBell, FiSettings } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <div className="text-slate-600 font-semibold">Dashboards</div>
        <div className="text-muted">/ Default</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <FiSearch className="absolute left-3 top-2.5 text-muted" />
          <input
            className="h-9 w-72 rounded-full border border-[var(--line)] bg-transparent px-10 text-sm placeholder:text-muted outline-none"
            placeholder="Search"
          />
        </div>

        <button className="p-2 rounded-md hover:bg-[rgba(15,23,42,0.03)]">
          <FiBell />
        </button>
        <button className="p-2 rounded-md hover:bg-[rgba(15,23,42,0.03)]">
          <FiSettings />
        </button>

        <div className="flex items-center gap-2 bg-transparent px-3 py-1 rounded-full">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <div className="text-sm">S</div>
        </div>
      </div>
    </div>
  );
}
