import { FileText, Download } from "lucide-react";
import { resources } from "@/lib/data";

const cat: Record<string,string> = {"Membership":"bg-violet-100 text-violet-700","Housing":"bg-blue-100 text-blue-700","Education":"bg-indigo-100 text-indigo-700","Training":"bg-sky-100 text-sky-700","Volunteer":"bg-cyan-100 text-cyan-700","Mutual Aid":"bg-pink-100 text-pink-700","Health":"bg-red-100 text-red-700"};
const categories = ["All",...Array.from(new Set(resources.map((r) => r.category)))];

export default function ResourcesPage() {
  return (
    <div className="bg-[#F8FAFF]">
      <section className="hero-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 50%),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"60px 60px"}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#60A5FA] text-xs font-bold uppercase tracking-widest bg-[#2563EB]/20 px-3 py-1 rounded-full mb-4">Community Hub</span>
          <h1 className="text-5xl font-black max-w-2xl mb-4 tracking-tight">Resources &amp; Documents</h1>
          <p className="text-gray-300 max-w-xl">Forms, guides, fact sheets, and handbooks for the community.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button key={c} className="px-4 py-2 rounded-xl text-xs font-bold bg-white border border-blue-100 text-gray-600 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">{c}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resources.map((resource) => (
              <div key={resource.id} className="card-hover bg-white rounded-2xl p-5 border border-blue-50 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <FileText size={22} className="text-[#2563EB]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cat[resource.category]||"bg-blue-100 text-blue-700"}`}>{resource.category}</span>
                    <span className="text-xs text-gray-400">{resource.type}</span>
                  </div>
                  <h3 className="font-bold text-[#0A1628] text-sm mb-0.5">{resource.title}</h3>
                  <p className="text-xs text-gray-500">{resource.description}</p>
                </div>
                <button className="shrink-0 w-9 h-9 bg-[#0A1628] text-white rounded-xl flex items-center justify-center hover:bg-[#2563EB] transition-colors">
                  <Download size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
