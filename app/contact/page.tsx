"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name:"",email:"",subject:"",message:""});

  return (
    <div className="bg-[#F8FAFF]">
      <section className="hero-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 50%),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"60px 60px"}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#60A5FA] text-xs font-bold uppercase tracking-widest bg-[#2563EB]/20 px-3 py-1 rounded-full mb-4">Reach Out</span>
          <h1 className="text-5xl font-black max-w-2xl mb-4 tracking-tight">Get in Touch</h1>
          <p className="text-gray-300 max-w-xl">Questions about membership, campaigns, or events? We&apos;d love to hear from you.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-6 border border-blue-50 shadow-sm">
                <h3 className="font-black text-[#0A1628] mb-5">Contact Information</h3>
                {[{Icon:MapPin,label:"Location",val:"Bronzeville, Chicago, IL"},{Icon:Phone,label:"Phone",val:"773-678-9834"},{Icon:Mail,label:"Email",val:"mail@lbhopecenter.com"},{Icon:Clock,label:"Hours",val:"Mon–Fri 9AM–5PM"}].map(({Icon,label,val}) => (
                  <div key={label} className="flex items-start gap-3 mb-4">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center shrink-0"><Icon size={15} className="text-[#2563EB]" /></div>
                    <div><div className="text-xs font-bold text-[#0A1628]">{label}</div><div className="text-sm text-gray-500">{val}</div></div>
                  </div>
                ))}
              </div>
              <div className="bg-[#0A1628] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3 text-sm">Quick Links</h3>
                {[["Become a Member","/membership"],["Upcoming Events","/events"],["Make a Donation","/donate"],["Join a Campaign","/campaigns"]].map(([label,href]) => (
                  <a key={label} href={href} className="block text-sm text-gray-300 hover:text-[#60A5FA] transition-colors py-1">→ {label}</a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              {sent ? (
                <div className="bg-white rounded-3xl p-12 border border-blue-50 shadow-sm text-center">
                  <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-[#0A1628] mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-5 text-sm">We&apos;ll get back to you within 1–2 business days.</p>
                  <button onClick={() => setSent(false)} className="px-5 py-2.5 bg-[#0A1628] text-white rounded-xl font-bold text-sm hover:bg-[#2563EB] transition-colors">Send Another</button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 border border-blue-50 shadow-sm">
                  <h2 className="text-2xl font-black text-[#0A1628] mb-6">Send a Message</h2>
                  <form onSubmit={(e) => {e.preventDefault();setSent(true);}} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input required placeholder="Name" className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={form.name} onChange={(e) => setForm({...form,name:e.target.value})} />
                      <input required type="email" placeholder="Email" className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={form.email} onChange={(e) => setForm({...form,email:e.target.value})} />
                    </div>
                    <input placeholder="Subject" className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={form.subject} onChange={(e) => setForm({...form,subject:e.target.value})} />
                    <textarea required rows={6} placeholder="Your message..." className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-none bg-[#F8FAFF]" value={form.message} onChange={(e) => setForm({...form,message:e.target.value})} />
                    <button type="submit" className="w-full py-3.5 bg-[#2563EB] text-white rounded-xl font-black hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-500/30">Send Message</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
