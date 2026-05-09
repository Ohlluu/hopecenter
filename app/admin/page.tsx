import { Users, Calendar, DollarSign, Flag, TrendingUp, AlertCircle, CheckCircle, ArrowRight, HandHeart } from "lucide-react";
import { adminStats, adminMembers, adminDonations, events } from "@/lib/data";
import Link from "next/link";

export default function AdminDashboard() {
  const cards = [
    { label: "Total Members", value: adminStats.totalMembers.toLocaleString(), sub: `+${adminStats.newMembersThisMonth} this month`, icon: Users, color: "bg-blue-50 text-[#2563EB]", trend: "+12%" },
    { label: "Upcoming Events", value: adminStats.upcomingEvents, sub: "Next 30 days", icon: Calendar, color: "bg-indigo-50 text-indigo-600", trend: "+2" },
    { label: "Total Donations", value: `$${adminStats.totalDonations.toLocaleString()}`, sub: `$${adminStats.donationsThisMonth.toLocaleString()} this month`, icon: DollarSign, color: "bg-sky-50 text-sky-600", trend: "+18%" },
    { label: "Active Campaigns", value: adminStats.activeCampaigns, sub: `${adminStats.pendingApplications} pending`, icon: Flag, color: "bg-violet-50 text-violet-600", trend: "All active" },
  ];

  const monthlyData = [35, 42, 38, 55, 61, 48, 72, 68, 80, 74, 90, 85];
  const max = Math.max(...monthlyData);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-0.5">Welcome back, Roderick. Here&apos;s your overview.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/announcements" className="flex items-center gap-2 px-4 py-2 text-xs bg-[#2563EB] text-white rounded-xl font-bold hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-500/20">
            + New Announcement
          </Link>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {cards.map((card) => (
          <div key={card.label} className="bg-white rounded-2xl p-5 border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${card.color}`}><card.icon size={20} /></div>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{card.trend}</span>
            </div>
            <div className="text-3xl font-black text-[#0A1628] mb-0.5">{card.value}</div>
            <div className="text-xs text-gray-500 font-semibold">{card.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{card.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        {/* Donation Chart */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-blue-50 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-black text-[#0A1628]">Donation Trend</h2>
              <p className="text-xs text-gray-400 mt-0.5">Monthly donations (last 12 months)</p>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full flex items-center gap-1"><TrendingUp size={12}/> +23% YoY</span>
          </div>
          <div className="flex items-end gap-2 h-32">
            {monthlyData.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-gradient-to-t from-[#2563EB] to-[#38BDF8] rounded-t-lg transition-all hover:opacity-80" style={{height:`${(val/max)*100}%`,minHeight:"8px"}} />
                <span className="text-[9px] text-gray-400">{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-blue-50 shadow-sm p-6">
          <h2 className="font-black text-[#0A1628] mb-5">Quick Actions</h2>
          <div className="space-y-2">
            {[
              {label:"Add Member",href:"/admin/members",icon:Users},
              {label:"Create Event",href:"/admin/events",icon:Calendar},
              {label:"Send Announcement",href:"/admin/announcements",icon:Flag},
              {label:"Add Volunteer",href:"/admin/volunteers",icon:HandHeart},
              {label:"View Reports",href:"/admin/donations",icon:DollarSign},
            ].map(({label,href,icon:Icon}) => (
              <Link key={label} href={href} className="flex items-center justify-between p-3 bg-[#F0F7FF] rounded-xl hover:bg-blue-100 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                    <Icon size={14} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#0A1628]">{label}</span>
                </div>
                <ArrowRight size={14} className="text-gray-400 group-hover:text-[#2563EB] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Members */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-blue-50 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-blue-50">
            <h2 className="font-black text-[#0A1628]">Recent Members</h2>
            <Link href="/admin/members" className="text-xs text-[#2563EB] font-bold hover:underline flex items-center gap-1">View all <ArrowRight size={12}/></Link>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-[#F8FAFF]">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Member</th>
                <th className="text-left px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Campaign</th>
                <th className="text-left px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50">
              {adminMembers.slice(0,5).map((member) => (
                <tr key={member.id} className="hover:bg-[#F8FAFF] transition-colors">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0A1628] text-white rounded-xl flex items-center justify-center text-xs font-black">
                        {member.name.split(" ").map((n)=>n[0]).join("").slice(0,2)}
                      </div>
                      <div>
                        <div className="font-bold text-[#0A1628] text-xs">{member.name}</div>
                        <div className="text-[10px] text-gray-400">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-xs text-gray-500">{member.campaign}</td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${member.status==="Active"?"bg-green-100 text-green-700":"bg-amber-100 text-amber-700"}`}>
                      {member.status==="Active"?<CheckCircle size={10}/>:<AlertCircle size={10}/>}{member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Donations + Events */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-blue-50 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-blue-50">
              <h2 className="font-black text-[#0A1628] text-sm">Recent Donations</h2>
              <Link href="/admin/donations" className="text-xs text-[#2563EB] font-bold hover:underline">View all</Link>
            </div>
            <div className="divide-y divide-blue-50">
              {adminDonations.slice(0,4).map((d) => (
                <div key={d.id} className="flex items-center justify-between px-5 py-3">
                  <div>
                    <div className="text-xs font-bold text-[#0A1628]">{d.donor}</div>
                    <div className="text-[10px] text-gray-400">{d.campaign}</div>
                  </div>
                  <span className="text-sm font-black text-[#2563EB]">${d.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-blue-50 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-blue-50">
              <h2 className="font-black text-[#0A1628] text-sm">Next Events</h2>
              <Link href="/admin/events" className="text-xs text-[#2563EB] font-bold hover:underline">View all</Link>
            </div>
            <div className="divide-y divide-blue-50">
              {events.slice(0,3).map((event) => (
                <div key={event.id} className="flex items-center gap-3 px-5 py-3">
                  <div className="w-10 h-10 bg-[#0A1628] text-white rounded-xl flex flex-col items-center justify-center text-center shrink-0">
                    <span className="text-[#60A5FA] text-[7px] font-black">{new Date(event.date).toLocaleString("default",{month:"short"}).toUpperCase()}</span>
                    <span className="text-sm font-black leading-none">{new Date(event.date).getDate()}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#0A1628] truncate">{event.title}</div>
                    <div className="text-[10px] text-gray-400">{event.rsvps} RSVPs</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
