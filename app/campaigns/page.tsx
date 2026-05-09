import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";
import { campaigns } from "@/lib/data";

export default function CampaignsPage() {
  return (
    <div className="bg-[#F8FAFF]">
      <section className="hero-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 50%),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"60px 60px"}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#60A5FA] text-xs font-bold uppercase tracking-widest bg-[#2563EB]/20 px-3 py-1 rounded-full mb-4">Get Involved</span>
          <h1 className="text-5xl font-black max-w-2xl mb-4 tracking-tight">Our Active Campaigns</h1>
          <p className="text-gray-300 max-w-xl">Seven campaigns. One community. Find the fight that calls to you.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {campaigns.map((campaign) => (
              <div key={campaign.slug} id={campaign.slug} className="card-hover bg-white rounded-2xl overflow-hidden border border-blue-50 shadow-sm group">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                    <Image src={campaign.image} alt={campaign.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A1628]/30" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-[#2563EB] rounded-full">{campaign.category}</span>
                      <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full font-semibold">{campaign.status}</span>
                    </div>
                    <h2 className="text-lg font-black text-[#0A1628] mb-2 tracking-tight">{campaign.title}</h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{campaign.longDescription}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400"><Users size={13} />{campaign.members} members</div>
                      <div className="text-xs font-bold text-[#2563EB]">{campaign.impact}</div>
                    </div>
                    {/* member bar */}
                    <div className="h-1.5 bg-blue-50 rounded-full mb-4 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-full" style={{width:`${Math.min((campaign.members/300)*100,100)}%`}} />
                    </div>
                    <Link href="/membership" className="w-full py-2.5 bg-[#0A1628] text-white rounded-xl text-sm font-bold hover:bg-[#2563EB] transition-colors text-center flex items-center justify-center gap-2">
                      Join Campaign <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A1628] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4 tracking-tight">Not Sure Where to Start?</h2>
          <p className="text-gray-300 mb-8 text-sm">Join as a General Member and attend a meeting to find your fit.</p>
          <Link href="/membership" className="px-8 py-3 bg-[#2563EB] text-white rounded-xl font-bold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-blue-900/40">Become a Member</Link>
        </div>
      </section>
    </div>
  );
}
