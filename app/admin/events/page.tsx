"use client";
import { useState } from "react";
import { MapPin, Clock, Users, Plus, Edit, Trash2 } from "lucide-react";
import { events } from "@/lib/data";

export default function AdminEventsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#0F2E25]">Events</h1>
          <p className="text-gray-500 text-sm mt-0.5">{events.length} upcoming events</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-[#C8922A] text-white rounded-xl font-medium hover:bg-[#b07a20] transition-colors"
        >
          <Plus size={16} /> Add Event
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-20 bg-[#0F2E25] text-white flex flex-row sm:flex-col items-center justify-center p-4 gap-3 sm:gap-0 text-center shrink-0">
                <span className="text-[#C8922A] text-xs font-bold uppercase">{new Date(event.date).toLocaleString("default", { month: "short" })}</span>
                <span className="text-2xl font-bold">{new Date(event.date).getDate()}</span>
              </div>
              <div className="p-5 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-1.5">
                      <span className="text-xs font-medium px-2 py-0.5 bg-[#E8F4F0] text-[#1A4A35] rounded-full">{event.type}</span>
                      <span className="text-xs text-[#C8922A] font-medium">{event.campaign}</span>
                    </div>
                    <h3 className="font-bold text-[#0F2E25] mb-1">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1"><Clock size={12} /> {event.time}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                      <span className="flex items-center gap-1"><Users size={12} /> {event.rsvps} RSVPs</span>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#E8F4F0] hover:text-[#1A4A35] transition-colors">
                      <Edit size={14} />
                    </button>
                    <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
                {/* RSVP bar */}
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span>RSVP Progress</span>
                    <span>{event.rsvps} / 100</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C8922A] rounded-full" style={{ width: `${Math.min(event.rsvps, 100)}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Event Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl">
            <h2 className="text-xl font-bold text-[#0F2E25] mb-5">Add New Event</h2>
            <div className="space-y-4">
              <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" placeholder="Event title" />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" />
                <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" placeholder="Time (e.g. 6:00 PM)" />
              </div>
              <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" placeholder="Location" />
              <textarea rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A] resize-none" placeholder="Description" />
            </div>
            <div className="flex gap-3 mt-6">
              <button className="flex-1 py-2.5 bg-[#C8922A] text-white rounded-xl font-medium text-sm hover:bg-[#b07a20]" onClick={() => setShowModal(false)}>
                Save Event
              </button>
              <button className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm hover:bg-gray-50" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
