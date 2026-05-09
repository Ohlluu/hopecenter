import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Flag, Award, Heart, ChevronRight, MapPin, Star } from "lucide-react";
import { campaigns, victories, events, news, stats } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={26} />,
  flag: <Flag size={26} />,
  award: <Award size={26} />,
  heart: <Heart size={26} />,
};

const categoryColors: Record<string, string> = {
  "Housing Justice": "bg-blue-100 text-blue-700",
  "Mutual Aid": "bg-sky-100 text-sky-700",
  "Education": "bg-indigo-100 text-indigo-700",
  "Faith & Community": "bg-violet-100 text-violet-700",
};

export default function HomePage() {
  const featuredCampaigns = campaigns.slice(0, 4);
  const recentVictories = victories.slice(0, 4);
  const upcomingEvents = events.slice(0, 3);
  const latestNews = news.slice(0, 3);

  return (
    <div className="bg-[#F8FAFF]">

      {/* ── HERO ── */}
      <section className="hero-gradient text-white relative overflow-hidden min-h-[92vh] flex items-center">
        {/* background grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 50%),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"60px 60px"}} />
        {/* blue glow orbs */}
        <div className="absolute top-20 right-40 w-96 h-96 bg-[#2563EB] rounded-full opacity-10 blur-[100px]" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-[#38BDF8] rounded-full opacity-8 blur-[80px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#93C5FD] px-4 py-1.5 rounded-full text-xs font-semibold mb-7 uppercase tracking-widest">
                <MapPin size={11} /> Bronzeville, Chicago
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#38BDF8]">Civic</span>
                <br />Power in<br />
                <span className="text-white">Bronzeville</span>
              </h1>
              <p className="text-lg text-gray-300 mb-9 leading-relaxed max-w-lg">
                The Lugenia Burns Hope Center organizes residents through education, leadership development, and community action — delivering real legislative victories since our founding.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/campaigns" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563EB] text-white rounded-xl font-bold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-blue-900/40 text-sm">
                  Join a Campaign <ArrowRight size={16} />
                </Link>
                <Link href="/donate" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all text-sm">
                  Donate Now
                </Link>
              </div>
              {/* mini stats */}
              <div className="flex flex-wrap gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-[#60A5FA]">{s.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stacked cards */}
            <div className="hidden lg:block relative h-[520px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80" alt="Community" fill className="object-cover opacity-60" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent" />
              </div>
              {/* floating victory card */}
              <div className="absolute bottom-8 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center"><Award size={16} /></div>
                  <span className="text-xs font-bold text-[#93C5FD] uppercase tracking-wider">Latest Victory</span>
                </div>
                <p className="text-white font-semibold text-sm">HB116 Rent Control Bill passed through Housing Committee</p>
                <span className="text-[#60A5FA] text-xs mt-1 block">2024 · Housing Justice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS BAR ── */}
      <section className="bg-[#0F2347] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`text-center text-white ${i > 0 ? "pl-6" : ""}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2563EB]/20 text-[#60A5FA] rounded-xl mb-2">
                  {iconMap[stat.icon]}
                </div>
                <div className="text-3xl font-black">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPAIGNS ── */}
      <section className="py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-3">Active Campaigns</span>
              <h2 className="text-4xl font-black text-[#0A1628] tracking-tight">Fighting for Bronzeville</h2>
              <p className="text-gray-500 mt-2 max-w-md">Seven campaigns. One community. Find the fight that calls to you.</p>
            </div>
            <Link href="/campaigns" className="hidden sm:flex items-center gap-1 text-[#2563EB] font-semibold hover:underline text-sm">
              All campaigns <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredCampaigns.map((campaign) => (
              <Link key={campaign.slug} href={`/campaigns#${campaign.slug}`}
                className="card-hover bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-sm block group">
                <div className="relative h-44 overflow-hidden">
                  <Image src={campaign.image} alt={campaign.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[campaign.category] || "bg-blue-100 text-blue-700"}`}>
                      {campaign.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0A1628] text-sm mb-2 leading-snug">{campaign.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3">{campaign.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 flex items-center gap-1"><Users size={11} />{campaign.members}</span>
                    <span className="text-[#2563EB] font-semibold">{campaign.impact}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VICTORIES ── */}
      <section className="py-24 bg-[#0A1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)",backgroundSize:"30px 30px"}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#60A5FA] text-xs font-bold uppercase tracking-widest bg-[#2563EB]/20 px-3 py-1 rounded-full mb-4">Track Record</span>
            <h2 className="text-4xl font-black tracking-tight">Victories We&apos;ve Won Together</h2>
            <p className="text-gray-400 mt-3 max-w-md mx-auto text-sm">Real legislative change, won through organizing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {recentVictories.map((victory) => (
              <div key={victory.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center font-black text-xs shrink-0 shadow-lg shadow-blue-900/50">
                    {victory.year}
                  </div>
                  <div>
                    <span className="text-[#60A5FA] text-xs font-bold uppercase tracking-widest">{victory.category}</span>
                    <h3 className="font-bold text-white mt-1 mb-1.5 text-sm leading-snug">{victory.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{victory.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/about" className="inline-flex items-center gap-2 text-[#60A5FA] text-sm font-semibold hover:underline">
              See full history <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EVENTS + NEWS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Events */}
            <div>
              <div className="flex items-end justify-between mb-7">
                <div>
                  <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-2">Calendar</span>
                  <h2 className="text-2xl font-black text-[#0A1628]">Upcoming Events</h2>
                </div>
                <Link href="/events" className="text-xs text-[#2563EB] font-semibold hover:underline">View all</Link>
              </div>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex gap-4 p-4 rounded-2xl border border-blue-50 bg-[#F8FAFF] hover:border-[#2563EB]/30 hover:shadow-sm transition-all">
                    <div className="shrink-0 w-14 h-14 bg-[#0A1628] text-white rounded-xl flex flex-col items-center justify-center text-center">
                      <span className="text-[#60A5FA] text-[9px] font-black uppercase">{new Date(event.date).toLocaleString("default",{month:"short"})}</span>
                      <span className="text-xl font-black leading-none">{new Date(event.date).getDate()}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#0A1628] text-sm leading-snug">{event.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{event.time} · {event.location}</p>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-1">{event.description}</p>
                    </div>
                    <Link href="/events" className="shrink-0 self-start text-xs bg-[#2563EB] text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-[#1D4ED8] transition-colors">RSVP</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* News */}
            <div>
              <div className="flex items-end justify-between mb-7">
                <div>
                  <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-2">Updates</span>
                  <h2 className="text-2xl font-black text-[#0A1628]">Latest News</h2>
                </div>
                <Link href="/news" className="text-xs text-[#2563EB] font-semibold hover:underline">View all</Link>
              </div>
              <div className="space-y-3">
                {latestNews.map((article) => (
                  <div key={article.id} className="flex gap-4 p-4 rounded-2xl border border-blue-50 bg-[#F8FAFF] hover:border-[#2563EB]/30 hover:shadow-sm transition-all">
                    <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0">
                      <Image src={article.image} alt={article.title} fill className="object-cover" unoptimized />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] text-[#2563EB] font-bold uppercase tracking-widest">{article.category}</span>
                      <h4 className="font-bold text-[#0A1628] text-sm leading-snug mt-0.5 line-clamp-2">{article.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{article.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ── */}
      <section className="py-20 bg-[#F8FAFF]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#0A1628] via-[#0F2347] to-[#1B2A4A] rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563EB] rounded-full opacity-10 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38BDF8] rounded-full opacity-5 blur-[80px]" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-[#60A5FA] text-xs font-bold uppercase tracking-widest bg-[#2563EB]/20 px-3 py-1 rounded-full mb-4">Support the Work</span>
                <h2 className="text-3xl lg:text-4xl font-black mb-4 tracking-tight">Your Donation Fuels the Fight</h2>
                <p className="text-gray-300 text-sm leading-relaxed">Every dollar goes directly to campaigns, mutual aid, and the community organizing that creates lasting change in Bronzeville.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[10, 25, 50, 100].map((amt) => (
                  <Link key={amt} href="/donate"
                    className="py-4 border-2 border-white/20 text-white rounded-2xl font-black text-2xl text-center hover:bg-[#2563EB] hover:border-[#2563EB] transition-all">
                    ${amt}
                  </Link>
                ))}
                <Link href="/donate" className="col-span-2 py-4 bg-[#2563EB] text-white rounded-2xl font-bold text-sm text-center hover:bg-[#1D4ED8] transition-all shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2">
                  Custom Amount <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
