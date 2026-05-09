import { DollarSign, TrendingUp, Download } from "lucide-react";
import { adminDonations, adminStats } from "@/lib/data";

export default function AdminDonationsPage() {
  const total = adminDonations.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#0F2E25]">Donations</h1>
          <p className="text-gray-500 text-sm mt-0.5">Financial overview and transaction history</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-xl text-gray-600 hover:border-[#C8922A] transition-colors">
          <Download size={16} /> Export Report
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {[
          { label: "Total Raised", value: `$${adminStats.totalDonations.toLocaleString()}`, sub: "All time", icon: DollarSign, bg: "bg-green-50 text-green-600" },
          { label: "This Month", value: `$${adminStats.donationsThisMonth.toLocaleString()}`, sub: "April 2026", icon: TrendingUp, bg: "bg-amber-50 text-amber-600" },
          { label: "Recent Transactions", value: adminDonations.length, sub: "Last 30 days", icon: DollarSign, bg: "bg-blue-50 text-blue-600" },
        ].map((card) => (
          <div key={card.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${card.bg}`}>
              <card.icon size={20} />
            </div>
            <div className="text-2xl font-bold text-[#0F2E25]">{card.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{card.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Campaign breakdown */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="font-bold text-[#0F2E25] mb-4">Donations by Campaign</h2>
        {[
          { name: "General Fund", amount: 575, pct: 40 },
          { name: "Seniors Program", amount: 1100, pct: 30 },
          { name: "Housing / Rent Control", amount: 2000, pct: 20 },
          { name: "Education", amount: 250, pct: 10 },
        ].map((item) => (
          <div key={item.name} className="mb-4">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-[#0F2E25] font-medium">{item.name}</span>
              <span className="text-gray-500">${item.amount.toLocaleString()}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#C8922A] rounded-full transition-all" style={{ width: `${item.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Transactions table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-bold text-[#0F2E25]">Recent Transactions</h2>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Donor</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Campaign</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Method</th>
              <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {adminDonations.map((d) => (
              <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-[#0F2E25]">{d.donor}</td>
                <td className="px-6 py-4 text-gray-500 text-xs">{d.campaign}</td>
                <td className="px-6 py-4 text-gray-500 text-xs">{new Date(d.date).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${d.method === "Card" ? "bg-blue-50 text-blue-600" : "bg-gray-100 text-gray-600"}`}>
                    {d.method}
                  </span>
                </td>
                <td className="px-6 py-4 text-right font-bold text-green-600">${d.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t-2 border-gray-200 bg-gray-50">
            <tr>
              <td colSpan={4} className="px-6 py-3 text-sm font-bold text-[#0F2E25]">Shown Total</td>
              <td className="px-6 py-3 text-right font-bold text-green-600">${total.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
