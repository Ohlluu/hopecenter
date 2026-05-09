"use client";
import { useState } from "react";
import { Users, Edit, ToggleLeft, ToggleRight } from "lucide-react";
import { campaigns } from "@/lib/data";

const borderColors: Record<string, string> = {
  green: "border-l-green-400",
  amber: "border-l-amber-400",
  purple: "border-l-purple-400",
  blue: "border-l-blue-400",
  teal: "border-l-teal-400",
  red: "border-l-red-400",
  orange: "border-l-orange-400",
};

export default function AdminCampaignsPage() {
  const [active, setActive] = useState<string[]>(campaigns.map((c) => c.slug));

  const toggle = (slug: string) => {
    setActive((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#0F2E25]">Campaigns</h1>
          <p className="text-gray-500 text-sm mt-0.5">{active.length} of {campaigns.length} campaigns active</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm bg-[#C8922A] text-white rounded-xl font-medium hover:bg-[#b07a20] transition-colors">
          + Add Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {campaigns.map((campaign) => {
          const isActive = active.includes(campaign.slug);
          return (
            <div
              key={campaign.slug}
              className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden border-l-4 ${borderColors[campaign.color]} ${!isActive ? "opacity-60" : ""} transition-opacity`}
            >
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                        {isActive ? "Active" : "Paused"}
                      </span>
                      <span className="text-xs text-gray-400">{campaign.category}</span>
                    </div>
                    <h3 className="font-bold text-[#0F2E25]">{campaign.title}</h3>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#E8F4F0] transition-colors">
                      <Edit size={14} className="text-gray-500" />
                    </button>
                    <button
                      onClick={() => toggle(campaign.slug)}
                      className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#E8F4F0] transition-colors"
                    >
                      {isActive
                        ? <ToggleRight size={18} className="text-green-600" />
                        : <ToggleLeft size={18} className="text-gray-400" />
                      }
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{campaign.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Users size={14} />
                    <span>{campaign.members} members</span>
                  </div>
                  <span className="text-xs font-semibold text-[#C8922A]">{campaign.impact}</span>
                </div>
                {/* Member bar */}
                <div className="mt-3">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C8922A] rounded-full"
                      style={{ width: `${Math.min((campaign.members / 300) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
