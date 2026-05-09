"use client";
import { useState } from "react";
import { Heart, ArrowRight } from "lucide-react";
import { campaigns } from "@/lib/data";

const amounts = [10, 25, 50, 100, 250, 500];

export default function DonatePage() {
  const [amount, setAmount] = useState<number|null>(25);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [campaign, setCampaign] = useState("General Fund");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({name:"",email:"",card:"",exp:"",cvv:""});
  const finalAmount = custom ? parseFloat(custom) : amount;

  if (submitted) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFF] px-4">
      <div className="bg-white rounded-3xl p-12 shadow-xl text-center max-w-md border border-blue-50">
        <div className="w-20 h-20 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
          <Heart size={36} className="text-white" />
        </div>
        <h2 className="text-2xl font-black text-[#0A1628] mb-2">Thank You!</h2>
        <p className="text-gray-500 mb-6 text-sm">Your {recurring?"monthly":"one-time"} donation of <strong>${finalAmount}</strong> to <strong>{campaign}</strong> has been received. A receipt was sent to {form.email}.</p>
        <button onClick={() => setSubmitted(false)} className="px-6 py-2.5 bg-[#0A1628] text-white rounded-xl font-bold text-sm hover:bg-[#2563EB] transition-colors">Make Another Donation</button>
      </div>
    </div>
  );

  return (
    <div className="bg-[#F8FAFF]">
      <section className="hero-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 50%),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"60px 60px"}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#60A5FA] text-xs font-bold uppercase tracking-widest bg-[#2563EB]/20 px-3 py-1 rounded-full mb-4">Support the Work</span>
          <h1 className="text-5xl font-black max-w-2xl mb-4 tracking-tight">Donate to the Hope Center</h1>
          <p className="text-gray-300 max-w-xl">Every dollar funds campaigns, mutual aid, and organizing that creates lasting change.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl border border-blue-50 p-8">
            <h2 className="text-2xl font-black text-[#0A1628] mb-6">Make a Donation</h2>
            <div className="flex gap-3 mb-6">
              {["One-time","Monthly"].map((type) => (
                <button key={type} onClick={() => setRecurring(type==="Monthly")}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${recurring===(type==="Monthly") ? "bg-[#0A1628] text-white" : "bg-blue-50 text-gray-600 hover:bg-blue-100"}`}>
                  {type}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {amounts.map((a) => (
                <button key={a} onClick={() => {setAmount(a);setCustom("");}}
                  className={`py-3 rounded-xl text-sm font-black transition-all ${amount===a&&!custom ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/30" : "bg-blue-50 text-[#0A1628] hover:bg-blue-100"}`}>
                  ${a}
                </button>
              ))}
            </div>
            <input type="number" placeholder="Custom amount" className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] mb-5 bg-[#F8FAFF]" value={custom} onChange={(e) => {setCustom(e.target.value);setAmount(null);}} />
            <select className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] mb-6 bg-[#F8FAFF]" value={campaign} onChange={(e) => setCampaign(e.target.value)}>
              <option>General Fund</option>
              {campaigns.map((c) => <option key={c.slug}>{c.title}</option>)}
            </select>
            <form onSubmit={(e) => {e.preventDefault();setSubmitted(true);}} className="space-y-4">
              <input required placeholder="Full Name" className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={form.name} onChange={(e) => setForm({...form,name:e.target.value})} />
              <input required type="email" placeholder="Email" className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={form.email} onChange={(e) => setForm({...form,email:e.target.value})} />
              <input required placeholder="Card Number (demo)" className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={form.card} onChange={(e) => setForm({...form,card:e.target.value})} />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="MM/YY" className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={form.exp} onChange={(e) => setForm({...form,exp:e.target.value})} />
                <input required placeholder="CVV" className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={form.cvv} onChange={(e) => setForm({...form,cvv:e.target.value})} />
              </div>
              <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-between text-sm">
                <span className="text-[#1D4ED8] font-semibold">{recurring?"Monthly donation to":"One-time donation to"} {campaign}</span>
                <span className="text-[#0A1628] font-black text-xl">${finalAmount||0}</span>
              </div>
              <button type="submit" className="w-full py-4 bg-[#2563EB] text-white rounded-xl font-black text-base hover:bg-[#1D4ED8] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30">
                <Heart size={18}/> Donate ${finalAmount||0}{recurring?"/month":""}
              </button>
              <p className="text-xs text-gray-400 text-center">This is a demo — no real charges will be made.</p>
            </form>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[{a:"$10",i:"Supplies for one senior wellness check-in"},{a:"$25",i:"A family's groceries through the Hope Project"},{a:"$50",i:"One community organizing training session"},{a:"$100",i:"A campaign meeting for 20 members"}].map((item) => (
              <div key={item.a} className="bg-white rounded-2xl p-5 border border-blue-50 shadow-sm">
                <div className="text-3xl font-black text-[#2563EB] mb-1">{item.a}</div>
                <p className="text-xs text-gray-500">{item.i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
