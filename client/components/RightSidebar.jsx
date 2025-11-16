// // components/RightSidebar.jsx
// import React from 'react'

// export default function RightSidebar() {
//   const notifications = [
//     { text: 'You fixed a bug.', time: 'Just now' },
//     { text: 'New user registered.', time: '59 minutes ago' },
//     { text: 'You fixed a bug.', time: '12 hours ago' },
//   ]
//   const activities = [
//     'Changed the style.',
//     'Released a new version.',
//     'Submitted a bug.',
//     'Modified A data in Page X.',
//     'Deleted a page in Project X.',
//   ]
//   const contacts = [
//     'Natali Craig',
//     'Drew Cano',
//     'Andi Lane',
//     'Koray Okumus',
//     'Kate Morrison',
//     'Melody Macy',
//   ]

//   return (
//     <aside className="w-80 ml-6">
//       <div className="bg-white bg-opacity-95 rounded-2xl p-4 shadow-sm h-[86vh] sticky top-6 overflow-auto">
//         <div className="text-sm font-semibold mb-3">Notifications</div>

//         <div className="space-y-3 mb-4">
//           {notifications.map((n, i) => (
//             <div key={i} className="flex items-start gap-3">
//               <div className="w-8 h-8 rounded-full bg-slate-200" />
//               <div>
//                 <div className="text-sm">{n.text}</div>
//                 <div className="text-xs text-slate-400">{n.time}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-sm font-semibold mb-3">Activities</div>
//         <div className="space-y-3 mb-4 text-sm text-slate-600">
//           {activities.map((a, i) => (
//             <div key={i} className="flex items-start gap-3">
//               <div className="w-8 h-8 rounded-full bg-slate-100" />
//               <div>{a}</div>
//             </div>
//           ))}
//         </div>

//         <div className="text-sm font-semibold mb-3">Contacts</div>
//         <div className="space-y-2 text-sm text-slate-700">
//           {contacts.map((c, i) => (
//             <div key={i} className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-full bg-slate-200" />
//               <div>{c}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </aside>
//   )
// }




// components/RightSidebar.jsx
import React from 'react'

export default function RightSidebar() {
  const notifications = [
    { text: 'You fixed a bug.', time: 'Just now' },
    { text: 'New user registered.', time: '59 minutes ago' },
    { text: 'You fixed a bug.', time: '12 hours ago' },
  ]

  const activities = [
    'Changed the style.',
    'Released a new version.',
    'Submitted a bug.',
    'Modified A data in Page X.',
    'Deleted a page in Project X.',
  ]

  const contacts = ['Natali Craig','Drew Cano','Andi Lane','Koray Okumus','Kate Morrison','Melody Macy']

  return (
    <div className="flex flex-col">
      <div className="text-sm font-semibold mb-3">Notifications</div>

      <div className="space-y-3 mb-6">
        {notifications.map((n,i)=>(
          <div key={i} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-200" />
            <div>
              <div className="text-sm">{n.text}</div>
              <div className="text-xs text-slate-400">{n.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-sm font-semibold mb-3">Activities</div>
      <div className="space-y-3 mb-6">
        {activities.map((a,i)=>(
          <div key={i} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-100" />
            <div className="text-sm text-slate-600">{a}</div>
          </div>
        ))}
      </div>

      <div className="text-sm font-semibold mb-3">Contacts</div>
      <div className="space-y-3">
        {contacts.map((c,i)=>(
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-200" />
            <div className="text-sm text-slate-700">{c}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
