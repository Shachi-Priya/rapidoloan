// // components/TrafficByWebsite.jsx
// import React from "react";

// /**
//  * Traffic by Website (Figma-accurate version)
//  * - Equal spacing between rows
//  * - Proper bar thickness
//  * - Clean left/middle/right alignment
//  */

// const data = [
//   { name: "Google", value: 38, color: "#111827" },
//   { name: "YouTube", value: 22, color: "#6B7280" },
//   { name: "Instagram", value: 14, color: "#9CA3AF" },
//   { name: "Pinterest", value: 12, color: "#D1D5DB" },
//   { name: "Facebook", value: 9, color: "#E5E7EB" },
//   { name: "Twitter", value: 5, color: "#F3F4F6" },
// ];

// export default function TrafficByWebsite() {
//   return (
//     <div className="w-full">
//       {/* Title */}
//       <div className="text-sm font-medium mb-4">Traffic by Website</div>

//       {/* List with equal spacing */}
//       <ul className="flex flex-col gap-4">
//         {data.map((d) => (
//           <li key={d.name} className="flex items-center w-full">
//             {/* Left Label */}
//             <div className="w-28 text-sm text-gray-700">{d.name}</div>

//             {/* Middle Bar */}
//             <div className="flex-1 mx-4">
//               <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
//                 <div
//                   className="h-full rounded-full"
//                   style={{
//                     width: `${d.value}%`,
//                     backgroundColor: d.color,
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Percentage */}
//             <div className="w-10 text-right text-sm text-gray-700">
//               {d.value}%
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// components/TrafficWebsiteCard.jsx
import React from "react";

const SITES = [
  { name: "Google", primary: "w-[40px]", mid: "w-[40px]", light: "w-[40px]" },
  { name: "YouTube", primary: "w-[80px]", mid: "w-[80px]", light: "w-[80px]" },
  { name: "Instagram", primary: "w-[50px]", mid: "w-[50px]", light: "w-[50px]" },
  { name: "Pinterest", primary: "w-[110px]", mid: "w-[110px]", light: "w-[110px]" },
  { name: "Facebook", primary: "w-[35px]", mid: "w-[35px]", light: "w-[35px]" },
  { name: "Twitter", primary: "w-[60px]", mid: "w-[60px]", light: "w-[60px]" },
];

export default function TrafficWebsite() {
  return (
    <>
      {/* Title */}
      <div className="text-[14px] font-semibold leading-5 text-black">
        Traffic by Website
      </div>

      {/* Content */}
      <div className="flex gap-4 flex-1">
        {/* Left: labels */}
        <div className="flex flex-col justify-between py-2 w-[57px] text-[12px] leading-4 text-black">
          {SITES.map((site) => (
            <div key={site.name}>{site.name}</div>
          ))}
        </div>

        {/* Right: horizontal “mini bars” */}
        <div className="flex flex-col gap-2 w-[80px]">
          {SITES.map((site) => (
            <div
              key={site.name}
              className="flex items-center gap-[2px] py-4"
            >
              {/* solid segment */}
              <div
                className={`h-[2.33px] max-h-[8px] rounded-full bg-black ${site.primary}`}
              />
              {/* mid-opacity segment */}
              <div
                className={`h-[2.33px] max-h-[8px] rounded-full bg-black/40 ${site.mid}`}
              />
              {/* light segment */}
              <div
                className={`h-[2.33px] max-h-[8px] rounded-full bg-black/10 ${site.light}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}