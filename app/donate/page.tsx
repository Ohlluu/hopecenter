"use client";
import { useState } from "react";
import { CheckCircle, Heart } from "lucide-react";
import { campaigns } from "@/lib/data";

const amounts = [10, 25, 50, 100, 250, 500];

export default function DonatePage() {
  const [amount, setAmount] = useState<number | null>(25);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [campaign, setCampaign] = useState("General Fund");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", card: "", exp: "", cvv: "" });

  const finalAmount = custom ? parseFloat(custom) : amount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF7] px-4">
        <div className="bg-white rounded-3xl p-12 shadow-lg text-center max-w-md">
          <Heart size={64} className="text-[#C8922A] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#0F2E25] mb-2">Thank You!</h2>
          <p className="text-gray-500 mb-2">Your donation of <strong>${finalAmount}</strong> to <strong>{campaign}</strong> has been received.</p>
          {recurring && <p className="text-sm text-green-600 mb-4">You&apos;ve set up a recurring monthly gift. You&apos;re a champion.</p>}
          <p className="text-sm text-gray-400 mb-6">A receipt has been sent to {form.email}</p>
          <button onClick={() => setSubmitted(false)} className="px-6 py-2 bg-[#0F2E25] text-white rounded-lg font-medium">
            Make Another Donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-3">Support the Work</p>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl mb-4">Donate to the Hope Center</h1>
          <p className="text-gray-300 max-w-xl leading-relaxed">
            Every dollar funds campaigns, mutual aid, leadership training, and the organizing that creates lasting change in Bronzeville.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF7]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-[#0F2E25] mb-6">Make a Donation</h2>

            {/* Recurring toggle */}
            <div className="flex gap-3 mb-6">
              {["One-time", "Monthly"].map((type) => (
                <button
                  key={type}
                  onClick={() => setRecurring(type === "Monthly")}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    recurring === (type === "Monthly")
                      ? "bg-[#0F2E25] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Amount grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {amounts.map((a) => (
                <button
                  key={a}
                  onClick={() => { setAmount(a); setCustom(""); }}
                  className={`py-3 rounded-xl text-sm font-bold transition-all ${
                    amount === a && !custom
                      ? "bg-[#C8922A] text-white"
                      : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#C8922A]"
                  }`}
                >
                  ${a}
                </button>
              ))}
            </div>
            <div className="mb-6">
              <input
                type="number"
                placeholder="Custom amount"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setAmount(null); }}
              />
            </div>

            {/* Campaign selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Designate to a Campaign (optional)</label>
              <select
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                value={campaign}
                onChange={(e) => setCampaign(e.target.value)}
              >
                <option>General Fund</option>
                {campaigns.map((c) => <option key={c.slug}>{c.title}</option>)}
              </select>
            </div>

            {/* Payment form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input required type="email" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number *</label>
                <input required placeholder="•••• •••• •••• ••••" maxLength={19} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.card} onChange={(e) => setForm({ ...form, card: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry *</label>
                  <input required placeholder="MM/YY" maxLength={5} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.exp} onChange={(e) => setForm({ ...form, exp: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV *</label>
                  <input required placeholder="•••" maxLength={4} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.cvv} onChange={(e) => setForm({ ...form, cvv: e.target.value })} />
                </div>
              </div>

              <div className="bg-[#E8F4F0] rounded-xl p-4 flex items-center justify-between text-sm">
                <span className="text-[#1A4A35] font-medium">
                  {recurring ? "Monthly donation to" : "One-time donation to"} {campaign}
                </span>
                <span className="text-[#0F2E25] font-bold text-lg">${finalAmount || "0"}</span>
              </div>

              <button type="submit" className="w-full py-3.5 bg-[#C8922A] text-white rounded-xl font-bold text-base hover:bg-[#b07a20] transition-colors flex items-center justify-center gap-2">
                <Heart size={18} /> Donate ${finalAmount || "0"} {recurring ? "/month" : ""}
              </button>
              <p className="text-xs text-gray-400 text-center">This is a demo — no real charges will be made.</p>
            </form>
          </div>

          {/* Impact breakdown */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { amount: "$10", impact: "Covers supplies for one senior wellness check-in" },
              { amount: "$25", impact: "Funds a family&apos;s groceries through the Hope Project" },
              { amount: "$50", impact: "Supports one community organizing training session" },
              { amount: "$100", impact: "Powers a campaign meeting for 20 members" },
            ].map((item) => (
              <div key={item.amount} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold text-[#C8922A] mb-1">{item.amount}</div>
                <p className="text-xs text-gray-500">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
