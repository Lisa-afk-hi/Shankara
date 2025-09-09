// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  isButton?: boolean;
  isModal?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Treatments", href: "/treatments", isModal: true },
  { label: "Contact Us", href: "/contact", isButton: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-[#e9f8e2] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.isButton ? (
                  <Link
                    href={item.href}
                    className="bg-[#f54078] text-white px-4 py-2 rounded-2xl font-semibold hover:opacity-90 transition"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition ${
                      isActive(item.href)
                        ? "text-[#f54078]"
                        : "text-black hover:text-[#f54078]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMobile}
            aria-label="Toggle Menu"
            className="text-black focus:outline-none"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <nav className="md:hidden bg-[#e9f8e2] border-t border-gray-200">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.isButton ? (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block bg-[#f54078] text-white px-4 py-3 font-semibold text-center"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 font-medium text-center transition ${
                      isActive(item.href)
                        ? "bg-[#f54078] text-white"
                        : "text-black hover:bg-[#f54078] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
