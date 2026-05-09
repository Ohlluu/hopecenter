"use client";
import { useState } from "react";
import { Megaphone, Send, Users, Globe, CheckCircle } from "lucide-react";

const past = [
  {id:1,title:"April General Assembly Reminder",target:"All Members",sent:"2026-04-10",reach:1247,type:"Meeting"},
  {id:2,title:"HB116 Town Hall — RSVP Now",target:"Rent Control Campaign",sent:"2026-04-05",reach:218,type:"Action Alert"},
  {id:3,title:"Senior Move Day Volunteers Needed",target:"Seniors Campaign",sent:"2026-03-28",reach:142,type:"Volunteer"},
];

export default function AnnouncementsPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({title:"",message:"",target:"All Members",type:"General"});

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Announcements</h1>
          <p className="text-gray-500 text-sm mt-0.5">Broadcast messages to members and campaign groups</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Compose */}
        <div className="bg-white rounded-2xl border border-blue-50 shadow-sm p-6">
          <h2 className="font-black text-[#0A1628] mb-5 flex items-center gap-2"><Megaphone size={18} className="text-[#2563EB]" />Compose Announcement</h2>
          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="font-black text-[#0A1628] mb-1">Announcement Sent!</h3>
              <p className="text-sm text-gray-500 mb-5">Your message was delivered to {form.target}.</p>
              <button onClick={() => {setSent(false);setForm({title:"",message:"",target:"All Members",type:"General"});}}
                className="px-5 py-2.5 bg-[#0A1628] text-white rounded-xl font-bold text-sm">New Announcement</button>
            </div>
          ) : (
            <form onSubmit={(e) => {e.preventDefault();setSent(true);}} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Title *</label>
                <input required className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" placeholder="e.g. Town Hall Reminder" value={form.title} onChange={(e) => setForm({...form,title:e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Send To</label>
                <select className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={form.target} onChange={(e) => setForm({...form,target:e.target.value})}>
                  <option>All Members</option>
                  <option>Bronzeville Seniors on the Move</option>
                  <option>Lift the Ban / Rent Control</option>
                  <option>Education Organizing Committee</option>
                  <option>CHA / Public Housing</option>
                  <option>Housing Bronzeville</option>
                  <option>Bronzeville Clergy Caucus</option>
                  <option>LSCs.4.All</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Type</label>
                <div className="flex gap-2 flex-wrap">
                  {["General","Action Alert","Meeting","Volunteer","Urgent"].map((t) => (
                    <button key={t} type="button" onClick={() => setForm({...form,type:t})}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${form.type===t?"bg-[#2563EB] text-white":"bg-blue-50 text-gray-600 hover:bg-blue-100"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Message *</label>
                <textarea required rows={5} className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-none bg-[#F8FAFF]" placeholder="Write your message here..." value={form.message} onChange={(e) => setForm({...form,message:e.target.value})} />
              </div>
              <div className="bg-blue-50 rounded-xl p-3 flex items-center gap-3 text-sm">
                <Users size={16} className="text-[#2563EB] shrink-0" />
                <span className="text-[#1D4ED8] font-semibold text-xs">
                  {form.target==="All Members"?"Will reach all 1,247 members":"Will reach campaign members only"}
                </span>
              </div>
              <button type="submit" className="w-full py-3 bg-[#2563EB] text-white rounded-xl font-black text-sm hover:bg-[#1D4ED8] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30">
                <Send size={16}/> Send Announcement
              </button>
            </form>
          )}
        </div>

        {/* Past announcements */}
        <div className="bg-white rounded-2xl border border-blue-50 shadow-sm p-6">
          <h2 className="font-black text-[#0A1628] mb-5 flex items-center gap-2"><Globe size={18} className="text-[#2563EB]" />Past Announcements</h2>
          <div className="space-y-4">
            {past.map((a) => (
              <div key={a.id} className="p-4 rounded-xl border border-blue-50 bg-[#F8FAFF] hover:border-blue-200 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-bold text-[#2563EB] bg-blue-100 px-2 py-0.5 rounded-full">{a.type}</span>
                  <span className="text-xs text-gray-400">{new Date(a.sent).toLocaleDateString()}</span>
                </div>
                <h3 className="font-bold text-[#0A1628] text-sm mb-1">{a.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>→ {a.target}</span>
                  <span className="text-green-600 font-bold">{a.reach.toLocaleString()} reached</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
