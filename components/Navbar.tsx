"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Shield } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0A1628] text-white sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center font-black text-sm tracking-tight shadow-lg shadow-blue-900/40">
              LB
            </div>
            <div className="leading-tight">
              <div className="font-bold text-sm text-white">Lugenia Burns</div>
              <div className="text-[#60A5FA] text-xs font-medium">Hope Center</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/admin" className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#60A5FA] border border-[#1E3A6E] rounded-lg hover:bg-[#1E3A6E] transition-all">
              <Shield size={13} /> Admin
            </Link>
            <Link href="/membership" className="px-4 py-2 text-sm border border-[#2563EB] text-[#60A5FA] rounded-lg hover:bg-[#1E3A6E] transition-all font-medium">
              Join
            </Link>
            <Link href="/donate" className="px-4 py-2 text-sm bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] transition-all font-semibold shadow-lg shadow-blue-900/30">
              Donate
            </Link>
          </div>

          <button className="lg:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#060E1F] border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/admin" className="block px-3 py-2 text-sm text-[#60A5FA]" onClick={() => setMenuOpen(false)}>Admin Portal</Link>
          <div className="pt-3 flex gap-3">
            <Link href="/membership" className="flex-1 text-center py-2 text-sm border border-[#2563EB] text-[#60A5FA] rounded-lg" onClick={() => setMenuOpen(false)}>Join</Link>
            <Link href="/donate" className="flex-1 text-center py-2 text-sm bg-[#2563EB] text-white rounded-lg font-semibold" onClick={() => setMenuOpen(false)}>Donate</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
