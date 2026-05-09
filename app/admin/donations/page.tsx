import { DollarSign, TrendingUp, Download } from "lucide-react";
import { adminDonations, adminStats } from "@/lib/data";

export default function AdminDonationsPage() {
  const total = adminDonations.reduce((s, d) => s + d.amount, 0);
  const bars = [{name:"General Fund",amount:575,pct:40},{name:"Seniors Program",amount:1100,pct:30},{name:"Housing / Rent Control",amount:2000,pct:20},{name:"Education",amount:250,pct:10}];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Donations</h1>
          <p className="text-gray-500 text-sm mt-0.5">Financial overview and transaction history</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-xs border border-blue-100 rounded-xl text-gray-600 hover:border-[#2563EB] font-bold transition-colors">
          <Download size={14}/> Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {[{label:"Total Raised",value:`$${adminStats.totalDonations.toLocaleString()}`,sub:"All time",icon:DollarSign,color:"bg-blue-50 text-[#2563EB]"},
          {label:"This Month",value:`$${adminStats.donationsThisMonth.toLocaleString()}`,sub:"April 2026",icon:TrendingUp,color:"bg-sky-50 text-sky-600"},
          {label:"Transactions",value:adminDonations.length,sub:"Last 30 days",icon:DollarSign,color:"bg-indigo-50 text-indigo-600"}
        ].map((card) => (
          <div key={card.label} className="bg-white rounded-2xl p-5 border border-blue-50 shadow-sm">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${card.color}`}><card.icon size={20}/></div>
            <div className="text-2xl font-black text-[#0A1628]">{card.value}</div>
            <div className="text-xs font-bold text-gray-500 mt-0.5">{card.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{card.sub}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-blue-50 shadow-sm p-6 mb-6">
        <h2 className="font-black text-[#0A1628] mb-5">Donations by Campaign</h2>
        {bars.map((item) => (
          <div key={item.name} className="mb-4">
            <div className="flex items-center justify-between text-sm mb-1.5">
              <span className="font-bold text-[#0A1628] text-xs">{item.name}</span>
              <span className="text-gray-500 text-xs font-semibold">${item.amount.toLocaleString()}</span>
            </div>
            <div className="h-2 bg-blue-50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-full transition-all" style={{width:`${item.pct}%`}} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-blue-50 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-blue-50">
          <h2 className="font-black text-[#0A1628]">Recent Transactions</h2>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-[#F8FAFF]">
            <tr>
              {["Donor","Campaign","Date","Method","Amount"].map((h,i) => (
                <th key={h} className={`px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider ${i===4?"text-right":"text-left"}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-50">
            {adminDonations.map((d) => (
              <tr key={d.id} className="hover:bg-[#F8FAFF] transition-colors">
                <td className="px-6 py-3 font-bold text-[#0A1628] text-xs">{d.donor}</td>
                <td className="px-6 py-3 text-xs text-gray-500">{d.campaign}</td>
                <td className="px-6 py-3 text-xs text-gray-400">{new Date(d.date).toLocaleDateString()}</td>
                <td className="px-6 py-3"><span className={`text-xs font-bold px-2 py-0.5 rounded-full ${d.method==="Card"?"bg-blue-50 text-blue-600":"bg-gray-100 text-gray-600"}`}>{d.method}</span></td>
                <td className="px-6 py-3 text-right font-black text-[#2563EB]">${d.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t-2 border-blue-100 bg-[#F8FAFF]">
            <tr>
              <td colSpan={4} className="px-6 py-3 text-xs font-black text-[#0A1628]">Shown Total</td>
              <td className="px-6 py-3 text-right font-black text-[#2563EB]">${total.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
