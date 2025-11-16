// components/RightPanel.jsx
import React from "react";

/* --- small inline SVG icons (feather-like) --- */
const IconCheck = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M20 6L9 17l-5-5" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconUserPlus = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="7" r="4" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 8v6M23 11h-6" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBug = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M20 8v2a6 6 0 0 1-6 6h0" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 8v2a6 6 0 0 0 6 6h0" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 3l2 3M16 3l-2 3" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 9v4" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBell = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h11z" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconRefresh = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M21 12a9 9 0 1 0-3.16 6.037" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 12v6h-6" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconEdit = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M11 4h6l3 3v6" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 20l7-7 3 3-7 7H4v-3z" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTrash = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <polyline points="3 6 5 6 21 6" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 11v6M14 11v6" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconUser = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M20 21v-2a4 4 0 0 0-3-3.87" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 21v-2a4 4 0 0 1 3-3.87" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="7" r="4" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* --- component --- */
export default function RightPanel() {
  const notifications = [
    { title: "You fixed a bug.", time: "Just now", icon: <IconCheck /> },
    { title: "New user registered.", time: "59 minutes ago", icon: <IconUserPlus /> },
    { title: "You fixed a bug.", time: "12 hours ago", icon: <IconBug /> },
    { title: "Andi Lane subscribed to you.", time: "Today, 11:59 AM", icon: <IconBell /> },
  ];

  const activities = [
    { text: "Changed the style.", icon: <IconRefresh /> },
    { text: "Released a new version.", icon: <IconRefresh /> },
    { text: "Submitted a bug.", icon: <IconBug /> },
    { text: "Modified A data in Page X.", icon: <IconEdit /> },
    { text: "Deleted a page in Project X.", icon: <IconTrash /> },
  ];

  const contacts = [
    { name: "Natali Craig" },
    { name: "Drew Cano" },
    { name: "Andi Lane" },
    { name: "Koray Okumus" },
    { name: "Kate Morrison" },
    { name: "Melody Macy" },
  ];

  return (
    <div className="flex flex-col">
      <div className="text-sm font-semibold mb-3">Notifications</div>

      <div className="space-y-2 mb-4">
        {notifications.map((n, i) => (
          <div key={i}>
            <div className="flex items-start gap-3 py-3">
              <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                {n.icon}
              </div>
              <div>
                <div className="text-sm">{n.title}</div>
                <div className="text-xs text-slate-400">{n.time}</div>
              </div>
            </div>
            <div className="border-b border-[var(--panel-border)]" />
          </div>
        ))}
      </div>

      <div className="text-sm font-semibold mb-3">Activities</div>
      <div className="space-y-2 mb-4">
        {activities.map((a, i) => (
          <div key={i} className="flex items-start gap-3 py-3">
            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
              {a.icon}
            </div>
            <div className="text-sm text-slate-700">{a.text}</div>
          </div>
        ))}
      </div>

      <div className="text-sm font-semibold mb-3">Contacts</div>
      <div className="space-y-3">
        {contacts.map((c, i) => (
          <div key={i} className="flex items-center gap-3 py-2">
            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
              <IconUser />
            </div>
            <div className="text-sm text-slate-700">{c.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
