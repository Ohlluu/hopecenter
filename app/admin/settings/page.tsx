"use client";
import { useState } from "react";
import { CheckCircle, Building, Bell, Shield, Mail } from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [org, setOrg] = useState({name:"Lugenia Burns Hope Center",email:"mail@lbhopecenter.com",phone:"773-678-9834",address:"Bronzeville, Chicago, IL",website:"lbhopecenter.com"});
  const [notif, setNotif] = useState({newMember:true,newDonation:true,eventRsvp:false,weeklyDigest:true});

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Settings</h1>
          <p className="text-gray-500 text-sm mt-0.5">Manage organization info and preferences</p>
        </div>
        {saved && (
          <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-xl text-sm font-bold border border-green-100">
            <CheckCircle size={16}/> Saved!
          </div>
        )}
      </div>

      <div className="space-y-6 max-w-2xl">
        {/* Org Info */}
        <div className="bg-white rounded-2xl border border-blue-50 shadow-sm p-6">
          <h2 className="font-black text-[#0A1628] mb-5 flex items-center gap-2"><Building size={18} className="text-[#2563EB]"/>Organization Info</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Organization Name</label>
              <input className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={org.name} onChange={(e)=>setOrg({...org,name:e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Email</label>
                <input className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={org.email} onChange={(e)=>setOrg({...org,email:e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Phone</label>
                <input className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={org.phone} onChange={(e)=>setOrg({...org,phone:e.target.value})} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Address</label>
              <input className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={org.address} onChange={(e)=>setOrg({...org,address:e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Website</label>
              <input className="w-full border border-blue-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-[#F8FAFF]" value={org.website} onChange={(e)=>setOrg({...org,website:e.target.value})} />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl border border-blue-50 shadow-sm p-6">
          <h2 className="font-black text-[#0A1628] mb-5 flex items-center gap-2"><Bell size={18} className="text-[#2563EB]"/>Notifications</h2>
          <div className="space-y-4">
            {[
              {key:"newMember",label:"New Member Application",desc:"Get notified when someone submits a membership application"},
              {key:"newDonation",label:"New Donation",desc:"Get notified when a donation is received"},
              {key:"eventRsvp",label:"Event RSVP Updates",desc:"Get notified on RSVP milestones"},
              {key:"weeklyDigest",label:"Weekly Summary Digest",desc:"Receive a weekly summary every Monday morning"},
            ].map(({key,label,desc}) => (
              <div key={key} className="flex items-center justify-between p-4 bg-[#F8FAFF] rounded-xl border border-blue-50">
                <div>
                  <div className="text-sm font-bold text-[#0A1628]">{label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{desc}</div>
                </div>
                <button onClick={() => setNotif({...notif,[key]:!notif[key as keyof typeof notif]})}
                  className={`w-11 h-6 rounded-full transition-colors relative shrink-0 ${notif[key as keyof typeof notif]?"bg-[#2563EB]":"bg-gray-200"}`}>
                  <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${notif[key as keyof typeof notif]?"translate-x-5":"translate-x-0.5"}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-2xl border border-blue-50 shadow-sm p-6">
          <h2 className="font-black text-[#0A1628] mb-5 flex items-center gap-2"><Shield size={18} className="text-[#2563EB]"/>Security</h2>
          <div className="space-y-3">
            <button className="w-full p-4 bg-[#F8FAFF] rounded-xl border border-blue-50 text-left hover:border-blue-200 transition-colors">
              <div className="text-sm font-bold text-[#0A1628]">Change Password</div>
              <div className="text-xs text-gray-400 mt-0.5">Update your admin account password</div>
            </button>
            <button className="w-full p-4 bg-[#F8FAFF] rounded-xl border border-blue-50 text-left hover:border-blue-200 transition-colors">
              <div className="text-sm font-bold text-[#0A1628]">Two-Factor Authentication</div>
              <div className="text-xs text-gray-400 mt-0.5">Add an extra layer of security to your account</div>
            </button>
          </div>
        </div>

        <button onClick={() => {setSaved(true);setTimeout(()=>setSaved(false),3000);}}
          className="w-full py-3.5 bg-[#2563EB] text-white rounded-xl font-black hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-500/30">
          Save All Changes
        </button>
      </div>
    </div>
  );
}
