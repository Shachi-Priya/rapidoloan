// // pages/index.js
// import React from 'react'
// import Sidebar from '../components/Sidebar'
// import Navbar from '../components/Navbar'
// import KpiCard from '../components/KpiCard'
// import RightSidebar from '../components/RightSidebar'
// import AreaUsersChart from '../components/charts/AreaUsersChart'
// import DevicesBarChart from '../components/charts/DevicesBarChart'
// import LocationPieChart from '../components/charts/LocationPieChart'

// export default function Home() {
//   const overview = { views: 7265, visits: 3671, newUsers: 156, activeUsers: 2318 }

//   return (
//     <div className="min-h-screen bg-[#111111] p-8">
//       <div className="max-w-[1280px] mx-auto rounded-2xl">
//         <div className="flex gap-6">
//           <Sidebar />

//           <main className="flex-1">
//             <div className="bg-white bg-opacity-95 rounded-2xl p-6 shadow-lg">
//               <Navbar />

//               <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//                 <KpiCard title="Views" value={overview.views} hint="+11.01%" />
//                 <KpiCard title="Visits" value={overview.visits} hint="-0.03%" />
//                 <KpiCard title="New Users" value={overview.newUsers} hint="+15.03%" />
//                 <KpiCard title="Active Users" value={overview.activeUsers} hint="+6.08%" />
//               </section>

//               <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//                 <div className="lg:col-span-2">
//                   <AreaUsersChart />
//                 </div>

//                 <div className="space-y-4">
//                   <div className="bg-white bg-opacity-95 rounded-xl p-4 shadow-sm">
//                     <div className="text-sm font-medium mb-3">Traffic by Website</div>
//                     <div className="text-xs text-slate-500">
//                       <div className="flex justify-between">
//                         <span>Google</span>
//                         <span>——</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>YouTube</span>
//                         <span>——</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Instagram</span>
//                         <span>——</span>
//                       </div>
//                     </div>
//                   </div>

//                   <LocationPieChart />
//                 </div>
//               </section>

//               <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//                 <DevicesBarChart />
//                 <div className="bg-white bg-opacity-95 rounded-xl p-4 shadow-sm">
//                   <div className="text-sm font-medium mb-3">Marketing & SEO</div>
//                   <div className="h-40 flex items-center justify-center text-slate-400">
//                     (placeholder for additional widgets)
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </main>

//           <RightSidebar />
//         </div>
//       </div>
//     </div>
//   )
// }




// pages/index.js
import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import KpiCard from '../components/KpiCard'
import RightSidebar from '../components/RightSidebar'
import AreaUsersChart from '../components/charts/AreaUsersChart'
import DevicesBarChart from '../components/charts/DevicesBarChart'
import LocationPieChart from '../components/charts/LocationPieChart'

export default function Home() {
  const overview = { views: 7265, visits: 3671, newUsers: 156, activeUsers: 2318 }

  return (
    <div className="min-h-screen bg-[var(--background)] py-6">
      <div className="container-centered">
        <div className="layout-grid">
          {/* Left sidebar panel */}
          <aside className="panel p-6 h-[86vh] sticky top-6">
            <Sidebar />
          </aside>

          {/* Main center */}
          <main className="p-0">
            <div className="card p-6">
              <Navbar />

              {/* KPI Row */}
              <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 mt-4">
                <KpiCard title="Views" value={overview.views} hint="+11.01%" />
                <KpiCard title="Visits" value={overview.visits} hint="-0.03%" />
                <KpiCard title="New Users" value={overview.newUsers} hint="+15.03%" />
                <KpiCard title="Active Users" value={overview.activeUsers} hint="+6.08%" />
              </section>

              {/* Charts area */}
              <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <AreaUsersChart />
                </div>

                <div className="space-y-4">
                  <div className="card p-4">
                    <div className="text-sm font-medium mb-3">Traffic by Website</div>
                    <div className="text-xs text-secondary">
                      <div className="flex justify-between">
                        <span>Google</span>
                        <span>——</span>
                      </div>
                      <div className="flex justify-between">
                        <span>YouTube</span>
                        <span>——</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Instagram</span>
                        <span>——</span>
                      </div>
                    </div>
                  </div>

                  <LocationPieChart />
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <DevicesBarChart />
                <div className="card p-4">
                  <div className="text-sm font-medium mb-3">Marketing & SEO</div>
                  <div className="h-40 flex items-center justify-center text-slate-400">
                    (placeholder for additional widgets)
                  </div>
                </div>
              </section>
            </div>
          </main>

          {/* Right sidebar panel */}
          <aside className="panel p-6 h-[86vh] sticky top-6 overflow-auto">
            <RightSidebar />
          </aside>
        </div>
      </div>
    </div>
  )
}
