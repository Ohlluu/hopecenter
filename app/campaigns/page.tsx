import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import { campaigns } from "@/lib/data";

const campaignColors: Record<string, string> = {
  green: "bg-green-100 text-green-800 border-green-200",
  amber: "bg-amber-100 text-amber-800 border-amber-200",
  purple: "bg-purple-100 text-purple-800 border-purple-200",
  blue: "bg-blue-100 text-blue-800 border-blue-200",
  teal: "bg-teal-100 text-teal-800 border-teal-200",
  red: "bg-red-100 text-red-800 border-red-200",
  orange: "bg-orange-100 text-orange-800 border-orange-200",
};

const borderColors: Record<string, string> = {
  green: "border-green-400",
  amber: "border-amber-400",
  purple: "border-purple-400",
  blue: "border-blue-400",
  teal: "border-teal-400",
  red: "border-red-400",
  orange: "border-orange-400",
};

export default function CampaignsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-3">Get Involved</p>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl mb-4">Our Active Campaigns</h1>
          <p className="text-gray-300 max-w-2xl leading-relaxed">
            Seven campaigns. One community. Find the fight that calls to you and join thousands of Bronzeville residents already in the work.
          </p>
        </div>
      </section>

      {/* Campaign Grid */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {campaigns.map((campaign) => (
              <div key={campaign.slug} id={campaign.slug} className={`campaign-card bg-white rounded-2xl overflow-hidden shadow-sm border-l-4 ${borderColors[campaign.color]} border border-gray-100`}>
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-48 h-48 sm:h-auto shrink-0">
                    <Image src={campaign.image} alt={campaign.title} fill className="object-cover" unoptimized />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${campaignColors[campaign.color]}`}>
                        {campaign.category}
                      </span>
                      <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full font-medium">
                        {campaign.status}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-[#0F2E25] mb-2">{campaign.title}</h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{campaign.longDescription}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <Users size={14} />
                        <span>{campaign.members} members</span>
                      </div>
                      <div className="text-sm font-semibold text-[#C8922A]">{campaign.impact}</div>
                    </div>
                    <Link
                      href="/membership"
                      className="mt-4 inline-block w-full text-center py-2.5 bg-[#0F2E25] text-white rounded-xl text-sm font-semibold hover:bg-[#1A4A35] transition-colors"
                    >
                      Join This Campaign
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F2E25] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-300 mb-8">Join as a General Member and attend a meeting to find your fit.</p>
          <Link href="/membership" className="px-8 py-3 bg-[#C8922A] text-white rounded-lg font-semibold hover:bg-[#b07a20] transition-all">
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}
