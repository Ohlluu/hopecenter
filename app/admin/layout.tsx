"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Calendar, DollarSign, Flag, Megaphone, HandHeart, Activity, Settings, ArrowLeft, Bell } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/members", label: "Members", icon: Users },
  { href: "/admin/events", label: "Events", icon: Calendar },
  { href: "/admin/donations", label: "Donations", icon: DollarSign },
  { href: "/admin/campaigns", label: "Campaigns", icon: Flag },
  { href: "/admin/announcements", label: "Announcements", icon: Megaphone },
  { href: "/admin/volunteers", label: "Volunteers", icon: HandHeart },
  { href: "/admin/activity", label: "Activity Log", icon: Activity },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen bg-[#F0F7FF]">
      {/* Sidebar */}
      <aside className="w-60 bg-[#0A1628] text-white flex flex-col fixed inset-y-0 left-0 z-40 shadow-2xl">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center font-black text-sm shadow-lg shadow-blue-900/40">LB</div>
            <div>
              <div className="text-xs font-black text-white">Hope Center</div>
              <div className="text-[10px] text-[#60A5FA] font-semibold uppercase tracking-widest">Admin Portal</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-3 pt-3 pb-1">Main</p>
          {navItems.slice(0,5).map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${active ? "bg-[#2563EB] text-white shadow-lg shadow-blue-900/30" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
                <Icon size={16} />{label}
              </Link>
            );
          })}
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-3 pt-4 pb-1">Tools</p>
          {navItems.slice(5).map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${active ? "bg-[#2563EB] text-white shadow-lg shadow-blue-900/30" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
                <Icon size={16} />{label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors">
            <ArrowLeft size={14} /> Back to Site
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-60">
        {/* Top bar */}
        <div className="bg-white border-b border-blue-100 px-8 py-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center hover:bg-blue-100 transition-colors">
              <Bell size={16} className="text-[#2563EB]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-xl bg-[#0A1628] text-white flex items-center justify-center font-black text-xs">RW</div>
          </div>
        </div>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
