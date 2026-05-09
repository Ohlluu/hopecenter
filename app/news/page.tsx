import Image from "next/image";
import { news } from "@/lib/data";

const cat: Record<string,string> = {"Housing":"bg-blue-100 text-blue-700","Mutual Aid":"bg-sky-100 text-sky-700","Education":"bg-indigo-100 text-indigo-700","Community":"bg-violet-100 text-violet-700"};

export default function NewsPage() {
  const [featured, ...rest] = news;
  return (
    <div className="bg-[#F8FAFF]">
      <section className="hero-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 50%),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"60px 60px"}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#60A5FA] text-xs font-bold uppercase tracking-widest bg-[#2563EB]/20 px-3 py-1 rounded-full mb-4">Stay Informed</span>
          <h1 className="text-5xl font-black max-w-2xl mb-4 tracking-tight">News &amp; Updates</h1>
          <p className="text-gray-300 max-w-xl">Campaign updates, legislative news, and community stories.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-hover bg-white rounded-3xl overflow-hidden shadow-sm border border-blue-50 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image src={featured.image} alt={featured.title} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A1628]/20" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cat[featured.category]||"bg-blue-100 text-blue-700"}`}>{featured.category}</span>
                  <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest">Featured</span>
                </div>
                <h2 className="text-2xl font-black text-[#0A1628] mb-3 tracking-tight leading-tight">{featured.title}</h2>
                <p className="text-gray-500 mb-5 text-sm leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>By {featured.author}</span>
                  <span>{new Date(featured.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}</span>
                </div>
                <button className="mt-5 self-start px-5 py-2.5 bg-[#2563EB] text-white rounded-xl text-sm font-bold hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-500/30">Read Article</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <div key={article.id} className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-50 group">
                <div className="relative h-44 overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cat[article.category]||"bg-blue-100 text-blue-700"}`}>{article.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-[#0A1628] mb-2 leading-snug text-sm">{article.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
