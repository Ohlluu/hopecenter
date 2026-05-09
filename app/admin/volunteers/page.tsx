"use client";
import { useState } from "react";
import { HandHeart, Search, Plus, Clock, CheckCircle } from "lucide-react";

const volunteers = [
  {id:1,name:"Angela Davis-Moore",email:"angela@email.com",campaign:"Bronzeville Seniors",hours:47,events:8,status:"Active"},
  {id:2,name:"Marcus Thompson",email:"marcus@email.com",campaign:"Rent Control",hours:32,events:5,status:"Active"},
  {id:3,name:"Diane Powell",email:"diane@email.com",campaign:"Education",hours:28,events:6,status:"Active"},
  {id:4,name:"James Whitfield",email:"james@email.com",campaign:"CHA/Public Housing",hours:15,events:3,status:"Inactive"},
  {id:5,name:"Renee Jackson",email:"renee@email.com",campaign:"Housing Bronzeville",hours:61,events:11,status:"Active"},
  {id:6,name:"Terrence Mills",email:"terrence@email.com",campaign:"Clergy Caucus",hours:22,events:4,status:"Active"},
  {id:7,name:"Keisha Brown",email:"keisha@email.com",campaign:"LSCs.4.All",hours:9,events:2,status:"Inactive"},
  {id:8,name:"David Okonkwo",email:"david@email.com",campaign:"General",hours:38,events:7,status:"Active"},
];

export default function VolunteersPage() {
  const [search, setSearch] = useState("");
  const filtered = volunteers.filter((v) => v.name.toLowerCase().includes(search.toLowerCase()) || v.campaign.toLowerCase().includes(search.toLowerCase()));
  const totalHours = volunteers.reduce((s,v)=>s+v.hours,0);
  const active = volunteers.filter((v)=>v.status==="Active").length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Volunteers</h1>
          <p className="text-gray-500 text-sm mt-0.5">{volunteers.length} registered volunteers</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-xs bg-[#2563EB] text-white rounded-xl font-bold hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-500/20">
          <Plus size={14}/> Add Volunteer
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-5 mb-8">
        {[{label:"Total Volunteers",val:volunteers.length,icon:HandHeart},{label:"Active",val:active,icon:CheckCircle},{label:"Total Hours",val:totalHours,icon:Clock}].map(({label,val,icon:Icon}) => (
          <div key={label} className="bg-white rounded-2xl p-5 border border-blue-50 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
              <Icon size={18} className="text-[#2563EB]" />
            </div>
            <div className="text-2xl font-black text-[#0A1628]">{val}</div>
            <div className="text-xs text-gray-500 font-semibold mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input className="w-full pl-10 pr-4 py-2.5 border border-blue-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white" placeholder="Search volunteers..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="bg-white rounded-2xl border border-blue-50 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#F8FAFF]">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Volunteer</th>
              <th className="text-left px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Campaign</th>
              <th className="text-left px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Hours</th>
              <th className="text-left px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Events</th>
              <th className="text-left px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-50">
            {filtered.map((v) => (
              <tr key={v.id} className="hover:bg-[#F8FAFF] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0A1628] text-white rounded-xl flex items-center justify-center text-xs font-black">
                      {v.name.split(" ").map((n)=>n[0]).join("").slice(0,2)}
                    </div>
                    <div>
                      <div className="font-bold text-[#0A1628] text-xs">{v.name}</div>
                      <div className="text-[10px] text-gray-400">{v.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-gray-500">{v.campaign}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-[#2563EB]">{v.hours}</span>
                    <div className="flex-1 h-1.5 bg-blue-50 rounded-full w-16 overflow-hidden">
                      <div className="h-full bg-[#2563EB] rounded-full" style={{width:`${Math.min((v.hours/70)*100,100)}%`}} />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold text-gray-600">{v.events}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${v.status==="Active"?"bg-green-100 text-green-700":"bg-gray-100 text-gray-500"}`}>{v.status}</span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-xs text-[#2563EB] font-bold hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
