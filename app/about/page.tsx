import Image from "next/image";
import Link from "next/link";
import { victories, teamMembers } from "@/lib/data";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-3">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl mb-4">Who We Are & Why We Fight</h1>
          <p className="text-gray-300 max-w-2xl leading-relaxed">
            Named after Lugenia Burns Hope — a pioneering Black social reformer and activist — our center carries forward her legacy of community empowerment in Bronzeville.
          </p>
        </div>
      </section>

      {/* Mission + Sankofa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-3">Our Mission</p>
              <h2 className="text-3xl font-bold text-[#0F2E25] mb-5">Building Civic Capacity from Within</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Lugenia Burns Hope Center develops the civic engagement of residents in Chicago&apos;s Bronzeville neighborhood, and other communities, through education, leadership development, and community organizing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that strengthening communities means investing in their people as their most valuable resource. Our work is powered by residents — for residents.
              </p>
              <blockquote className="border-l-4 border-[#C8922A] pl-5 italic text-[#0F2E25] font-medium text-lg">
                &ldquo;In order to understand our present and ensure our future, we must know our past.&rdquo;
              </blockquote>
            </div>
            <div className="bg-[#0F2E25] rounded-3xl p-10 text-white text-center">
              <div className="text-6xl mb-4">🦅</div>
              <h3 className="text-2xl font-bold text-[#C8922A] mb-3">The Sankofa</h3>
              <p className="text-gray-300 leading-relaxed">
                Our symbol is the Sankofa Bird — a mythical bird that moves forward while gazing backward, carrying an egg that represents tomorrow&apos;s possibilities. We honor our roots while building the future Bronzeville deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="py-20 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-2">Our History</p>
            <h2 className="text-3xl font-bold text-[#0F2E25]">Decades of Organizing. Real Results.</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#C8922A]/30" />
            <div className="space-y-8">
              {victories.map((victory) => (
                <div key={victory.title} id="victories" className="relative flex gap-8 items-start pl-16">
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-[#C8922A] flex items-center justify-center text-white text-xs font-bold -translate-x-1/2 shadow-md">
                    {victory.year.slice(2)}
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#C8922A] uppercase tracking-wider">{victory.category}</span>
                      <span className="text-xs text-gray-400">{victory.year}</span>
                    </div>
                    <h3 className="font-bold text-[#0F2E25] mb-1">{victory.title}</h3>
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
            <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-2">The Team</p>
            <h2 className="text-3xl font-bold text-[#0F2E25]">Our Leadership</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-[#FAFAF7] rounded-2xl overflow-hidden shadow-sm border border-gray-100 w-72 text-center">
                <div className="relative h-56">
                  <Image src={member.image} alt={member.name} fill className="object-cover" unoptimized />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0F2E25] text-lg">{member.name}</h3>
                  <p className="text-[#C8922A] text-sm font-medium mb-2">{member.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F2E25] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
          <p className="text-gray-300 mb-8">Join a campaign, attend a meeting, or donate to fuel the work.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/membership" className="px-6 py-3 bg-[#C8922A] text-white rounded-lg font-semibold hover:bg-[#b07a20] transition-all">
              Become a Member
            </Link>
            <Link href="/campaigns" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0F2E25] transition-all">
              View Campaigns
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
