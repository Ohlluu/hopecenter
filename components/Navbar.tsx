"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Mission", href: "/about" },
      { label: "Our History", href: "/about#history" },
      { label: "Leadership", href: "/about#leadership" },
    ],
  },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-[#0F2E25] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C8922A] rounded-full flex items-center justify-center text-white font-bold text-lg">
              LB
            </div>
            <div className="leading-tight">
              <div className="font-bold text-sm">Lugenia Burns</div>
              <div className="text-[#C8922A] text-xs font-medium">Hope Center</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm hover:text-[#C8922A] transition-colors">
                    {link.label} <ChevronDown size={14} />
                  </button>
                  {dropdown === link.label && (
                    <div className="absolute top-full left-0 bg-white text-[#0F2E25] rounded-lg shadow-xl py-2 min-w-[180px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm hover:bg-[#f0faf5] hover:text-[#1A4A35]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm hover:text-[#C8922A] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/membership"
              className="px-4 py-2 text-sm border border-[#C8922A] text-[#C8922A] rounded-lg hover:bg-[#C8922A] hover:text-white transition-all"
            >
              Join
            </Link>
            <Link
              href="/donate"
              className="px-4 py-2 text-sm bg-[#C8922A] text-white rounded-lg hover:bg-[#b07a20] transition-all font-medium"
            >
              Donate
            </Link>
            <Link
              href="/admin"
              className="px-3 py-2 text-xs text-gray-400 hover:text-white transition-colors border border-gray-600 rounded-lg"
            >
              Admin
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0B2117] border-t border-green-900 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-3 py-2 text-sm text-white hover:text-[#C8922A]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex gap-3">
            <Link
              href="/membership"
              className="flex-1 text-center py-2 text-sm border border-[#C8922A] text-[#C8922A] rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Join
            </Link>
            <Link
              href="/donate"
              className="flex-1 text-center py-2 text-sm bg-[#C8922A] text-white rounded-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
