"use client";
import { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";
import { campaigns } from "@/lib/data";

export default function MembershipPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", zip: "", age: "", dob: "",
    gender: "", tshirt: "", campaign: "", emergencyName: "",
    emergencyPhone: "", medicalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF7] px-4">
        <div className="bg-white rounded-3xl p-12 shadow-lg text-center max-w-md">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#0F2E25] mb-2">Application Received!</h2>
          <p className="text-gray-500 mb-6">
            Thank you for applying to join the Lugenia Burns Hope Center. Your $10 membership fee will be collected at the link below. We&apos;ll follow up with next steps shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 bg-[#0F2E25] text-white rounded-lg font-medium"
          >
            Back to Form
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
          <p className="text-[#C8922A] text-sm font-semibold uppercase tracking-wider mb-3">Join Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl mb-4">Become a Member</h1>
          <p className="text-gray-300 max-w-xl leading-relaxed">
            Membership is $10/year. Join a campaign, attend meetings, and be part of the movement building a better Bronzeville.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { title: "Join a Campaign", desc: "Choose from 7 active campaigns and get directly involved in the work." },
              { title: "Attend Meetings", desc: "Monthly general assemblies and campaign-specific meetings." },
              { title: "Build Power", desc: "Add your voice to a movement that has delivered real legislative victories." },
            ].map((b) => (
              <div key={b.title} className="p-5">
                <div className="w-10 h-10 bg-[#E8F4F0] rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle size={20} className="text-[#1A4A35]" />
                </div>
                <h3 className="font-bold text-[#0F2E25] mb-1">{b.title}</h3>
                <p className="text-sm text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-[#FAFAF7]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-[#0F2E25] mb-1">Membership Application</h2>
            <p className="text-sm text-gray-500 mb-8">Fill out the form below. $10 fee due upon submission.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input required type="email" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                  <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input type="number" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })}>
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non-binary</option>
                      <option>Prefer not to say</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">T-Shirt Size</label>
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.tshirt} onChange={(e) => setForm({ ...form, tshirt: e.target.value })}>
                      <option value="">Select</option>
                      {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((s) => <option key={s}>{s}</option>)}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Choose Campaign / Project *</label>
                <div className="relative">
                  <select required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.campaign} onChange={(e) => setForm({ ...form, campaign: e.target.value })}>
                    <option value="">Select a campaign</option>
                    <option>General Member</option>
                    {campaigns.map((c) => <option key={c.slug}>{c.title}</option>)}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="font-semibold text-[#0F2E25] mb-4">Emergency Contact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.emergencyName} onChange={(e) => setForm({ ...form, emergencyName: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A]" value={form.emergencyPhone} onChange={(e) => setForm({ ...form, emergencyPhone: e.target.value })} />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Medical Conditions / Allergies</label>
                  <textarea rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8922A] resize-none" value={form.medicalNotes} onChange={(e) => setForm({ ...form, medicalNotes: e.target.value })} />
                </div>
              </div>

              <div className="bg-[#E8F4F0] rounded-xl p-4 text-sm text-[#1A4A35]">
                <strong>Membership Fee: $10/year</strong><br />
                After submitting, you&apos;ll be directed to complete payment via our secure portal.
              </div>

              <button type="submit" className="w-full py-3.5 bg-[#C8922A] text-white rounded-xl font-bold text-base hover:bg-[#b07a20] transition-colors">
                Submit Application — $10
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
