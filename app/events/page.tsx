"use client";
import { useState } from "react";
import { MapPin, Clock, Users, Calendar } from "lucide-react";
import { events } from "@/lib/data";

const typeColors: Record<string, string> = {
  "Meeting": "bg-blue-100 text-blue-700",
  "Town Hall": "bg-indigo-100 text-indigo-700",
  "Volunteer Event": "bg-sky-100 text-sky-700",
  "Workshop": "bg-violet-100 text-violet-700",
  "Community Event": "bg-cyan-100 text-cyan-700",
};

export default function EventsPage() {
  const [rsvped, setRsvped] = useState<number[]>([]);
  const [filter, setFilter] = useState("All");
  const types = ["All", ...Array.from(new Set(events.map((e) => e.type)))];
  const filtered = filter === "All" ? events : events.filter((e) => e.type === filter);
  const toggle = (id: number) => setRsvped((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  return (
    <div className="bg-[#F8FAFF]">
      <section className="hero-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 50%),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"60px 60px"}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#60A5FA] text-xs font-bold uppercase tracking-widest bg-[#2563EB]/20 px-3 py-1 rounded-full mb-4">Stay Connected</span>
          <h1 className="text-5xl font-black max-w-2xl mb-4 tracking-tight">Upcoming Events</h1>
          <p className="text-gray-300 max-w-xl">Meetings, town halls, workshops, and volunteer days.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {types.map((type) => (
              <button key={type} onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${filter===type ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/30" : "bg-white text-gray-600 border border-blue-100 hover:border-[#2563EB] hover:text-[#2563EB]"}`}>
                {type}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((event) => (
              <div key={event.id} className="card-hover bg-white rounded-2xl border border-blue-50 shadow-sm overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-20 bg-[#0A1628] text-white flex flex-row sm:flex-col items-center justify-center p-4 gap-3 sm:gap-0 text-center shrink-0">
                    <span className="text-[#60A5FA] text-[9px] font-black uppercase">{new Date(event.date).toLocaleString("default",{month:"short"})}</span>
                    <span className="text-3xl font-black">{new Date(event.date).getDate()}</span>
                    <span className="text-[9px] text-gray-400">{new Date(event.date).getFullYear()}</span>
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${typeColors[event.type]||"bg-blue-100 text-blue-700"}`}>{event.type}</span>
                          <span className="text-xs text-[#2563EB] font-semibold">{event.campaign}</span>
                        </div>
                        <h3 className="font-black text-[#0A1628] text-base mb-1">{event.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1"><Clock size={12}/> {event.time}</span>
                          <span className="flex items-center gap-1"><MapPin size={12}/> {event.location}</span>
                          <span className="flex items-center gap-1"><Users size={12}/> {event.rsvps+(rsvped.includes(event.id)?1:0)} RSVPs</span>
                        </div>
                      </div>
                      <button onClick={() => toggle(event.id)}
                        className={`shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${rsvped.includes(event.id) ? "bg-green-600 text-white" : "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg shadow-blue-500/30"}`}>
                        {rsvped.includes(event.id) ? "✓ Going" : "RSVP"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#0A1628] rounded-2xl p-8 text-white text-center">
            <Calendar size={32} className="text-[#60A5FA] mx-auto mb-3" />
            <h3 className="text-xl font-black mb-2">Never Miss a Meeting</h3>
            <p className="text-gray-300 text-sm mb-5">Subscribe to the Hope Center calendar.</p>
            <button className="px-6 py-2.5 bg-[#2563EB] text-white rounded-xl font-bold hover:bg-[#1D4ED8] transition-colors text-sm shadow-lg shadow-blue-900/40">Subscribe to Calendar</button>
          </div>
        </div>
      </section>
    </div>
  );
}
