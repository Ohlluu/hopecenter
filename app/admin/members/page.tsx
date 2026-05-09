"use client";
import { useState } from "react";
import { Search, CheckCircle, AlertCircle, UserPlus, Download } from "lucide-react";
import { adminMembers } from "@/lib/data";

export default function AdminMembersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const filtered = adminMembers.filter((m) => {
    const ms = m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase());
    const sf = statusFilter === "All" || m.status === statusFilter;
    return ms && sf;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Members</h1>
          <p className="text-gray-500 text-sm mt-0.5">{adminMembers.length} total members</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-xs border border-blue-100 rounded-xl text-gray-600 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors font-bold">
            <Download size={14}/> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-xs bg-[#2563EB] text-white rounded-xl font-bold hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-500/20">
            <UserPlus size={14}/> Add Member
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input className="w-full pl-10 pr-4 py-2.5 border border-blue-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white" placeholder="Search members..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        {["All","Active","Pending"].map((s) => (
          <button key={s} onClick={() => setStatusFilter(s)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${statusFilter===s?"bg-[#2563EB] text-white shadow-lg shadow-blue-500/20":"bg-white border border-blue-100 text-gray-600 hover:border-[#2563EB]"}`}>
            {s}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-blue-50 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#F8FAFF]">
            <tr>
              {["Member","Campaign","Joined","Status","Actions"].map((h) => (
                <th key={h} className="text-left px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-50">
            {filtered.map((member) => (
              <tr key={member.id} className="hover:bg-[#F8FAFF] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#0A1628] text-white rounded-xl flex items-center justify-center text-xs font-black">
                      {member.name.split(" ").map((n)=>n[0]).join("").slice(0,2)}
                    </div>
                    <div>
                      <div className="font-bold text-[#0A1628] text-xs">{member.name}</div>
                      <div className="text-[10px] text-gray-400">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-gray-500">{member.campaign}</td>
                <td className="px-6 py-4 text-xs text-gray-400">{new Date(member.joined).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${member.status==="Active"?"bg-green-100 text-green-700":"bg-amber-100 text-amber-700"}`}>
                    {member.status==="Active"?<CheckCircle size={10}/>:<AlertCircle size={10}/>}{member.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <button className="text-xs text-[#2563EB] font-bold hover:underline">Edit</button>
                    <button className="text-xs text-gray-400 hover:text-red-500 font-bold transition-colors">Remove</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <div className="text-center py-12 text-gray-400 text-sm">No members found.</div>}
      </div>
    </div>
  );
}
