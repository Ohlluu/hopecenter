"use client";
import { useState } from "react";
import { MapPin, Clock, Users, Calendar } from "lucide-react";
import { events } from "@/lib/data";

const typeColors: Record<string, string> = {
  "Meeting": "bg-blue-100 text-blue-700",
  "Town Hall": "bg-purple-100 text-purple-700",
  "Volunteer Event": "bg-green-100 text-green-700",
  "Workshop": "bg-amber-100 text-amber-700",
  "Community Event": "bg-pink-100 text-pink-700",
};

export default function EventsPage() {
  const [rsvped, setRsvped] = useState<number[]>([]);
  const [filter, setFilter] = useState("All");

  const types = ["All", ...Array.from(new Set(events.map((e) => e.type)))];
  const filtered = filter === "All" ? events : events.filter((e) => e.type === filter);

  const handleRsvp = (id: number) => {
    setRsvped((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-3">Stay Connected</p>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl mb-4">Upcoming Events & Meetings</h1>
          <p className="text-gray-300 max-w-2xl leading-relaxed">
            From monthly general assemblies to town halls, workshops, and volunteer days — there&apos;s always something happening at the Hope Center.
          </p>
        </div>
      </section>

      {/* Filter + Events */}
      <section className="py-16 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === type
                    ? "bg-[#0F2E25] text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#C8922A] hover:text-[#C8922A]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Events list */}
          <div className="space-y-5">
            {filtered.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row">
                  {/* Date block */}
                  <div className="sm:w-24 bg-[#0F2E25] text-white flex flex-row sm:flex-col items-center justify-center p-4 gap-3 sm:gap-0 text-center">
                    <span className="text-[#C8922A] text-xs font-bold uppercase">
                      {new Date(event.date).toLocaleString("default", { month: "short" })}
                    </span>
                    <span className="text-3xl font-bold sm:my-1">{new Date(event.date).getDate()}</span>
                    <span className="text-xs text-gray-400">{new Date(event.date).getFullYear()}</span>
                  </div>
                  {/* Content */}
                  <div className="p-5 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${typeColors[event.type] || "bg-gray-100 text-gray-600"}`}>
                            {event.type}
                          </span>
                          <span className="text-xs text-[#C8922A] font-medium">{event.campaign}</span>
                        </div>
                        <h3 className="font-bold text-[#0F2E25] text-lg mb-1">{event.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1"><Clock size={12} /> {event.time}</span>
                          <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                          <span className="flex items-center gap-1"><Users size={12} /> {event.rsvps + (rsvped.includes(event.id) ? 1 : 0)} RSVPs</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRsvp(event.id)}
                        className={`shrink-0 px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                          rsvped.includes(event.id)
                            ? "bg-green-600 text-white"
                            : "bg-[#C8922A] text-white hover:bg-[#b07a20]"
                        }`}
                      >
                        {rsvped.includes(event.id) ? "✓ Going" : "RSVP"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Calendar prompt */}
          <div className="mt-10 bg-[#0F2E25] rounded-2xl p-8 text-white text-center">
            <Calendar size={36} className="text-[#C8922A] mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Never Miss a Meeting</h3>
            <p className="text-gray-300 text-sm mb-5">Add the Hope Center calendar to your Google Calendar or iCal.</p>
            <button className="px-6 py-2.5 bg-[#C8922A] text-white rounded-lg font-medium hover:bg-[#b07a20] transition-colors text-sm">
              Subscribe to Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
