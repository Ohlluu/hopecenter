import Image from "next/image";
import { news } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Housing": "bg-amber-100 text-amber-700",
  "Mutual Aid": "bg-green-100 text-green-700",
  "Education": "bg-blue-100 text-blue-700",
  "Community": "bg-purple-100 text-purple-700",
};

export default function NewsPage() {
  const [featured, ...rest] = news;

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-3">Stay Informed</p>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl mb-4">News & Updates</h1>
          <p className="text-gray-300 max-w-xl leading-relaxed">
            Campaign updates, legislative news, community stories, and more from the Lugenia Burns Hope Center.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured article */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image src={featured.image} alt={featured.title} fill className="object-cover" unoptimized />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[featured.category] || "bg-gray-100 text-gray-600"}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-gray-400">Featured</span>
                </div>
                <h2 className="text-2xl font-bold text-[#0F2E25] mb-3 leading-snug">{featured.title}</h2>
                <p className="text-gray-500 mb-5 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>By {featured.author}</span>
                  <span>{new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                </div>
                <button className="mt-5 self-start px-5 py-2.5 bg-[#0F2E25] text-white rounded-xl text-sm font-medium hover:bg-[#1A4A35] transition-colors">
                  Read Article
                </button>
              </div>
            </div>
          </div>

          {/* Rest of articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="relative h-44 overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                </div>
                <div className="p-5">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
                    {article.category}
                  </span>
                  <h3 className="font-bold text-[#0F2E25] mt-2 mb-2 leading-snug">{article.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
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
