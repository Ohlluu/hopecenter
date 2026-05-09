"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Calendar, DollarSign, Flag, ArrowLeft } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/members", label: "Members", icon: Users },
  { href: "/admin/events", label: "Events", icon: Calendar },
  { href: "/admin/donations", label: "Donations", icon: DollarSign },
  { href: "/admin/campaigns", label: "Campaigns", icon: Flag },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B2117] text-white flex flex-col fixed inset-y-0 left-0 z-40">
        <div className="p-6 border-b border-green-900">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 bg-[#C8922A] rounded-full flex items-center justify-center font-bold text-sm">LB</div>
            <div>
              <div className="text-sm font-bold">Hope Center</div>
              <div className="text-xs text-[#C8922A]">Admin Panel</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active ? "bg-[#C8922A] text-white" : "text-gray-400 hover:bg-[#1A4A35] hover:text-white"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-green-900">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
            <ArrowLeft size={16} /> Back to Site
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
