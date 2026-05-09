import { Users, Calendar, DollarSign, Flag, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { adminStats, adminMembers, adminDonations, events } from "@/lib/data";
import Link from "next/link";

export default function AdminDashboard() {
  const cards = [
    { label: "Total Members", value: adminStats.totalMembers.toLocaleString(), sub: `+${adminStats.newMembersThisMonth} this month`, icon: Users, color: "bg-blue-50 text-blue-600" },
    { label: "Upcoming Events", value: adminStats.upcomingEvents, sub: "Next 30 days", icon: Calendar, color: "bg-purple-50 text-purple-600" },
    { label: "Total Donations", value: `$${adminStats.totalDonations.toLocaleString()}`, sub: `$${adminStats.donationsThisMonth.toLocaleString()} this month`, icon: DollarSign, color: "bg-amber-50 text-amber-600" },
    { label: "Active Campaigns", value: adminStats.activeCampaigns, sub: `${adminStats.pendingApplications} pending applications`, icon: Flag, color: "bg-green-50 text-green-600" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#0F2E25]">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-0.5">Welcome back, Roderick. Here&apos;s what&apos;s happening.</p>
        </div>
        <div className="text-sm text-gray-400">
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {cards.map((card) => (
          <div key={card.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.color}`}>
                <card.icon size={20} />
              </div>
              <TrendingUp size={16} className="text-green-500" />
            </div>
            <div className="text-2xl font-bold text-[#0F2E25] mb-0.5">{card.value}</div>
            <div className="text-xs text-gray-500">{card.label}</div>
            <div className="text-xs text-green-600 mt-1">{card.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Members */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-bold text-[#0F2E25]">Recent Members</h2>
            <Link href="/admin/members" className="text-xs text-[#C8922A] font-medium hover:underline">View all</Link>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Campaign</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {adminMembers.slice(0, 5).map((member) => (
                <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3">
                    <div className="font-medium text-[#0F2E25]">{member.name}</div>
                    <div className="text-xs text-gray-400">{member.email}</div>
                  </td>
                  <td className="px-6 py-3 text-gray-500 text-xs">{member.campaign}</td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                      member.status === "Active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                    }`}>
                      {member.status === "Active" ? <CheckCircle size={10} /> : <AlertCircle size={10} />}
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upcoming Events + Recent Donations */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="font-bold text-[#0F2E25] text-sm">Upcoming Events</h2>
              <Link href="/admin/events" className="text-xs text-[#C8922A] font-medium hover:underline">View all</Link>
            </div>
            <div className="divide-y divide-gray-50">
              {events.slice(0, 3).map((event) => (
                <div key={event.id} className="flex items-center gap-3 px-5 py-3">
                  <div className="w-10 h-10 bg-[#0F2E25] text-white rounded-xl flex flex-col items-center justify-center text-center shrink-0">
                    <span className="text-[#C8922A] text-[8px] font-bold leading-none">
                      {new Date(event.date).toLocaleString("default", { month: "short" }).toUpperCase()}
                    </span>
                    <span className="text-sm font-bold leading-none">{new Date(event.date).getDate()}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-[#0F2E25] truncate">{event.title}</div>
                    <div className="text-xs text-gray-400">{event.rsvps} RSVPs</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="font-bold text-[#0F2E25] text-sm">Recent Donations</h2>
              <Link href="/admin/donations" className="text-xs text-[#C8922A] font-medium hover:underline">View all</Link>
            </div>
            <div className="divide-y divide-gray-50">
              {adminDonations.slice(0, 4).map((d) => (
                <div key={d.id} className="flex items-center justify-between px-5 py-3">
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-[#0F2E25] truncate">{d.donor}</div>
                    <div className="text-xs text-gray-400">{d.campaign}</div>
                  </div>
                  <div className="text-sm font-bold text-green-600 shrink-0">${d.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
