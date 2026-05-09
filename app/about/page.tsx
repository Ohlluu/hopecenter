import Image from "next/image";
import Link from "next/link";
import { victories, teamMembers } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="bg-[#F8FAFF]">
      <section className="hero-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 50%),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"60px 60px"}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#60A5FA] text-xs font-bold uppercase tracking-widest bg-[#2563EB]/20 px-3 py-1 rounded-full mb-4">About Us</span>
          <h1 className="text-5xl font-black max-w-2xl mb-4 tracking-tight">Who We Are &amp; Why We Fight</h1>
          <p className="text-gray-300 max-w-xl leading-relaxed">Named after Lugenia Burns Hope — a pioneering Black social reformer — our center carries her legacy forward in Bronzeville.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-4">Our Mission</span>
              <h2 className="text-3xl font-black text-[#0A1628] mb-5 tracking-tight">Building Civic Capacity from Within</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The Lugenia Burns Hope Center develops civic engagement through education, leadership development, and community organizing. We believe that strengthening communities means investing in their people as their greatest resource.</p>
              <blockquote className="border-l-4 border-[#2563EB] pl-5 italic text-[#0A1628] font-semibold text-lg mt-6">
                &ldquo;In order to understand our present and ensure our future, we must know our past.&rdquo;
              </blockquote>
            </div>
            <div className="bg-gradient-to-br from-[#0A1628] to-[#0F2347] rounded-3xl p-10 text-white text-center border border-white/10">
              <div className="text-6xl mb-4">🦅</div>
              <h3 className="text-2xl font-black text-[#60A5FA] mb-3">The Sankofa</h3>
              <p className="text-gray-300 leading-relaxed text-sm">Our symbol is the Sankofa Bird — moving forward while gazing backward, carrying an egg representing tomorrow&apos;s possibilities. We honor our roots while building the future Bronzeville deserves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Victories Timeline */}
      <section id="history" className="py-20 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-3">Our History</span>
            <h2 className="text-3xl font-black text-[#0A1628] tracking-tight">Decades of Organizing. Real Results.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#BFDBFE]" />
            <div className="space-y-6">
              {victories.map((victory) => (
                <div key={victory.title} id="victories" className="relative flex gap-8 items-start pl-20">
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-[10px] font-black -translate-x-1/2 shadow-lg shadow-blue-500/30">
                    {victory.year.slice(2)}
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-blue-50 shadow-sm flex-1 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-widest">{victory.category}</span>
                      <span className="text-xs text-gray-400 font-semibold">{victory.year}</span>
                    </div>
                    <h3 className="font-bold text-[#0A1628] mb-1">{victory.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{victory.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="leadership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-3">The Team</span>
            <h2 className="text-3xl font-black text-[#0A1628] tracking-tight">Our Leadership</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card-hover bg-white rounded-2xl overflow-hidden border border-blue-50 shadow-sm w-72">
                <div className="relative h-56">
                  <Image src={member.image} alt={member.name} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white font-bold">{member.name}</div>
                    <div className="text-[#60A5FA] text-xs font-semibold">{member.title}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A1628] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563EB] rounded-full opacity-10 blur-[80px]" />
        <div className="relative max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4 tracking-tight">Ready to Get Involved?</h2>
          <p className="text-gray-300 mb-8 text-sm">Join a campaign, attend a meeting, or donate to fuel the work.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/membership" className="px-7 py-3 bg-[#2563EB] text-white rounded-xl font-bold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-blue-900/40 text-sm">Become a Member</Link>
            <Link href="/campaigns" className="px-7 py-3 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all text-sm">View Campaigns</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
