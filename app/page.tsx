import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Flag, Award, Heart, ChevronRight } from "lucide-react";
import { campaigns, victories, events, news, stats } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={28} />,
  flag: <Flag size={28} />,
  award: <Award size={28} />,
  heart: <Heart size={28} />,
};

const campaignColors: Record<string, string> = {
  green: "bg-green-100 text-green-800 border-green-200",
  amber: "bg-amber-100 text-amber-800 border-amber-200",
  purple: "bg-purple-100 text-purple-800 border-purple-200",
  blue: "bg-blue-100 text-blue-800 border-blue-200",
  teal: "bg-teal-100 text-teal-800 border-teal-200",
  red: "bg-red-100 text-red-800 border-red-200",
  orange: "bg-orange-100 text-orange-800 border-orange-200",
};

export default function HomePage() {
  const featuredCampaigns = campaigns.slice(0, 4);
  const recentVictories = victories.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);
  const latestNews = news.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
            alt="Community"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C8922A]/20 border border-[#C8922A]/40 text-[#E8B84B] px-4 py-1.5 rounded-full text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C8922A] animate-pulse" />
              Bronzeville, Chicago
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Engaging Bronzeville{" "}
              <span className="text-[#C8922A]">Residents</span>{" "}
              in Building Civic Capacity
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              The Lugenia Burns Hope Center develops civic engagement through education, leadership development,
              and community organizing — because our people are our greatest resource.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/campaigns" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8922A] text-white rounded-lg font-semibold hover:bg-[#b07a20] transition-all">
                Join a Campaign <ArrowRight size={18} />
              </Link>
              <Link href="/donate" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0F2E25] transition-all">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#E8F4F0] text-[#1A4A35] rounded-full mb-3">
                  {iconMap[stat.icon]}
                </div>
                <div className="text-3xl font-bold text-[#0F2E25] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGNS */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-2">Active Campaigns</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2E25]">Fighting for Bronzeville</h2>
            </div>
            <Link href="/campaigns" className="hidden sm:flex items-center gap-1 text-[#1A4A35] font-medium hover:text-[#C8922A] transition-colors">
              All campaigns <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCampaigns.map((campaign) => (
              <Link key={campaign.slug} href={`/campaigns#${campaign.slug}`} className="campaign-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 block group">
                <div className="relative h-44 overflow-hidden">
                  <Image src={campaign.image} alt={campaign.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${campaignColors[campaign.color]}`}>
                      {campaign.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0F2E25] mb-2 leading-snug">{campaign.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">{campaign.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{campaign.members} members</span>
                    <span className="text-[#C8922A] font-medium">{campaign.impact}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VICTORIES TIMELINE */}
      <section className="py-20 bg-[#0F2E25] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-2">Our Track Record</p>
            <h2 className="text-3xl lg:text-4xl font-bold">Victories We&apos;ve Won Together</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">Decades of community organizing turned into real, lasting change.</p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {recentVictories.map((victory) => (
              <div key={victory.title} className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-full bg-[#C8922A] flex items-center justify-center font-bold text-sm text-white shrink-0">
                  {victory.year}
                </div>
                <div className="bg-[#1A4A35]/50 rounded-2xl p-5 border border-green-800 flex-1">
                  <span className="text-[#C8922A] text-xs font-bold uppercase tracking-wider">{victory.category}</span>
                  <h3 className="font-bold text-lg mt-1 mb-1">{victory.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{victory.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/about" className="inline-flex items-center gap-2 text-[#C8922A] font-medium hover:underline">
              See all victories <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTS + NEWS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-1">Calendar</p>
                  <h2 className="text-2xl font-bold text-[#0F2E25]">Upcoming Events</h2>
                </div>
                <Link href="/events" className="text-sm text-[#1A4A35] font-medium hover:text-[#C8922A]">View all</Link>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#C8922A]/30 transition-colors">
                    <div className="shrink-0 w-14 h-14 bg-[#0F2E25] text-white rounded-xl flex flex-col items-center justify-center text-center">
                      <span className="text-[#C8922A] text-xs font-bold">{new Date(event.date).toLocaleString("default", { month: "short" }).toUpperCase()}</span>
                      <span className="text-xl font-bold leading-none">{new Date(event.date).getDate()}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[#0F2E25] text-sm">{event.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{event.time} · {event.location}</p>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-1">{event.description}</p>
                    </div>
                    <Link href="/events" className="shrink-0 text-xs bg-[#E8F4F0] text-[#1A4A35] px-3 py-1 rounded-lg font-medium hover:bg-[#C8922A] hover:text-white transition-colors self-start">
                      RSVP
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-1">Updates</p>
                  <h2 className="text-2xl font-bold text-[#0F2E25]">Latest News</h2>
                </div>
                <Link href="/news" className="text-sm text-[#1A4A35] font-medium hover:text-[#C8922A]">View all</Link>
              </div>
              <div className="space-y-4">
                {latestNews.map((article) => (
                  <div key={article.id} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#C8922A]/30 transition-colors">
                    <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
                      <Image src={article.image} alt={article.title} fill className="object-cover" unoptimized />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-[#C8922A] font-semibold">{article.category}</span>
                      <h4 className="font-semibold text-[#0F2E25] text-sm leading-snug mt-0.5 line-clamp-2">{article.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{article.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#0F2E25] rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8922A]/10 rounded-full translate-x-20 -translate-y-20" />
            <div className="relative">
              <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-3">Support the Work</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Your Donation Fuels the Fight</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">Every dollar goes directly to campaigns, mutual aid, and the community organizing that makes real change possible.</p>
              <div className="flex flex-wrap justify-center gap-4">
                {[10, 25, 50, 100].map((amt) => (
                  <Link key={amt} href="/donate" className="px-6 py-3 border-2 border-[#C8922A] text-[#C8922A] rounded-xl font-bold text-lg hover:bg-[#C8922A] hover:text-white transition-all">
                    ${amt}
                  </Link>
                ))}
                <Link href="/donate" className="px-6 py-3 bg-[#C8922A] text-white rounded-xl font-bold text-lg hover:bg-[#b07a20] transition-all">
                  Other Amount
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
