import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B2117] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#C8922A] rounded-full flex items-center justify-center text-white font-bold text-xl">
                LB
              </div>
              <div>
                <div className="font-bold text-base">Lugenia Burns</div>
                <div className="text-[#C8922A] text-sm">Hope Center</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Engaging Bronzeville Residents in Building Civic Capacity since our founding.
            </p>
            <div className="flex gap-3">
              {["f", "𝕏", "ig"].map((icon) => (
                <a key={icon} href="#" className="w-9 h-9 bg-[#1A4A35] rounded-full flex items-center justify-center hover:bg-[#C8922A] transition-colors text-xs font-bold">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#C8922A] mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Campaigns", "Events", "News", "Resources", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 text-sm hover:text-[#C8922A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold text-[#C8922A] mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2">
              {[
                { label: "Become a Member", href: "/membership" },
                { label: "Donate", href: "/donate" },
                { label: "Volunteer", href: "/membership#volunteer" },
                { label: "Join a Campaign", href: "/campaigns" },
                { label: "Attend an Event", href: "/events" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-[#C8922A] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#C8922A] mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-[#C8922A] mt-0.5 shrink-0" />
                Bronzeville, Chicago, IL
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-[#C8922A] shrink-0" />
                773-678-9834
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-[#C8922A] shrink-0" />
                mail@lbhopecenter.com
              </li>
            </ul>
            <div className="mt-5">
              <Link
                href="/donate"
                className="inline-block px-5 py-2.5 bg-[#C8922A] text-white text-sm rounded-lg hover:bg-[#b07a20] transition-colors font-medium"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-green-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Lugenia Burns Hope Center. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 text-xs hover:text-gray-300">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 text-xs hover:text-gray-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
