import { FileText, Download } from "lucide-react";
import { resources } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Membership": "bg-purple-100 text-purple-700",
  "Housing": "bg-amber-100 text-amber-700",
  "Education": "bg-blue-100 text-blue-700",
  "Training": "bg-green-100 text-green-700",
  "Volunteer": "bg-teal-100 text-teal-700",
  "Mutual Aid": "bg-pink-100 text-pink-700",
  "Health": "bg-red-100 text-red-700",
};

const categories = ["All", ...Array.from(new Set(resources.map((r) => r.category)))];

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-3">Community Hub</p>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl mb-4">Resources & Documents</h1>
          <p className="text-gray-300 max-w-xl leading-relaxed">
            Forms, guides, fact sheets, and handbooks to help you engage, organize, and advocate for Bronzeville.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:border-[#C8922A] hover:text-[#C8922A] transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E8F4F0] rounded-xl flex items-center justify-center shrink-0">
                  <FileText size={22} className="text-[#1A4A35]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[resource.category] || "bg-gray-100 text-gray-600"}`}>
                      {resource.category}
                    </span>
                    <span className="text-xs text-gray-400">{resource.type}</span>
                  </div>
                  <h3 className="font-semibold text-[#0F2E25] text-sm mb-1">{resource.title}</h3>
                  <p className="text-xs text-gray-500">{resource.description}</p>
                </div>
                <button className="shrink-0 w-9 h-9 bg-[#0F2E25] text-white rounded-xl flex items-center justify-center hover:bg-[#C8922A] transition-colors">
                  <Download size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
