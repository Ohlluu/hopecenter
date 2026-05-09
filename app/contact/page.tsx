"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-3">Reach Out</p>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl mb-4">Get in Touch</h1>
          <p className="text-gray-300 max-w-xl leading-relaxed">
            Questions about membership, campaigns, or events? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-[#0F2E25] mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#E8F4F0] rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-[#1A4A35]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0F2E25]">Location</div>
                      <div className="text-sm text-gray-500">Bronzeville, Chicago, IL</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#E8F4F0] rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-[#1A4A35]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0F2E25]">Phone (Tricey Robinson)</div>
                      <div className="text-sm text-gray-500">773-678-9834</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#E8F4F0] rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-[#1A4A35]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0F2E25]">Email</div>
                      <div className="text-sm text-gray-500">mail@lbhopecenter.com</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#E8F4F0] rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-[#1A4A35]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0F2E25]">Office Hours</div>
                      <div className="text-sm text-gray-500">Mon–Fri, 9:00 AM – 5:00 PM</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0F2E25] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="/membership" className="hover:text-[#C8922A] transition-colors">→ Become a Member</a></li>
                  <li><a href="/events" className="hover:text-[#C8922A] transition-colors">→ Upcoming Events</a></li>
                  <li><a href="/donate" className="hover:text-[#C8922A] transition-colors">→ Make a Donation</a></li>
                  <li><a href="/campaigns" className="hover:text-[#C8922A] transition-colors">→ Join a Campaign</a></li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm text-center">
                  <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#0F2E25] mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-5">We&apos;ll get back to you within 1-2 business days.</p>
                  <button onClick={() => setSent(false)} className="px-5 py-2 bg-[#0F2E25] text-white rounded-lg font-medium text-sm">
                    Send Another
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-[#0F2E25] mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input required type="email" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea required rows={6} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A] resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-[#C8922A] text-white rounded-xl font-bold hover:bg-[#b07a20] transition-colors">
                      Send Message
                    </button>
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
