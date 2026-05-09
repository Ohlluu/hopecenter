import Link from "next/link";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060E1F] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center font-black text-base shadow-lg shadow-blue-900/40">LB</div>
              <div>
                <div className="font-bold text-sm">Lugenia Burns</div>
                <div className="text-[#60A5FA] text-xs">Hope Center</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">Engaging Bronzeville Residents in Building Civic Capacity.</p>
            <div className="flex gap-2">
              {["f", "𝕏", "ig"].map((icon) => (
                <a key={icon} href="#" className="w-8 h-8 bg-[#1B2A4A] rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-colors text-xs font-bold">{icon}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#60A5FA] mb-4 text-xs uppercase tracking-widest">Navigate</h4>
            <ul className="space-y-2">
              {["About", "Campaigns", "Events", "News", "Resources", "Contact"].map((item) => (
                <li key={item}><Link href={`/${item.toLowerCase()}`} className="text-gray-400 text-sm hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#60A5FA] mb-4 text-xs uppercase tracking-widest">Get Involved</h4>
            <ul className="space-y-2">
              {[{ label: "Become a Member", href: "/membership" }, { label: "Donate", href: "/donate" }, { label: "Volunteer", href: "/membership" }, { label: "Join a Campaign", href: "/campaigns" }, { label: "Attend Events", href: "/events" }].map((item) => (
                <li key={item.label}><Link href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#60A5FA] mb-4 text-xs uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-start gap-2.5 text-gray-400 text-sm"><MapPin size={14} className="text-[#2563EB] mt-0.5 shrink-0" />Bronzeville, Chicago, IL</li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm"><Phone size={14} className="text-[#2563EB] shrink-0" />773-678-9834</li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm"><Mail size={14} className="text-[#2563EB] shrink-0" />mail@lbhopecenter.com</li>
            </ul>
            <Link href="/donate" className="inline-block px-5 py-2.5 bg-[#2563EB] text-white text-sm rounded-xl font-semibold hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-900/30">
              Donate Now
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2026 Lugenia Burns Hope Center. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-500 text-xs hover:text-gray-300">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 text-xs hover:text-gray-300">Terms</Link>
            <Link href="/admin" className="flex items-center gap-1 text-gray-500 text-xs hover:text-[#60A5FA] transition-colors">
              <Shield size={11} /> Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
