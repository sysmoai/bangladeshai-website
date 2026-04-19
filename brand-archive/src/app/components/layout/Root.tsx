import { NavLink, Outlet, useLocation } from "react-router";
import Logo from "../Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageToggle } from "../shared/LanguageToggle";

const navItems = [
  { to: "/", label: "Overview" },
  { to: "/logos", label: "Logo System" },
  { to: "/colors", label: "Colors" },
  { to: "/typography", label: "Typography" },
  { to: "/components", label: "Components" },
  { to: "/social", label: "Social Assets" },
  { to: "/homepage", label: "Homepage" },
  { to: "/research", label: "Research" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/dos-donts", label: "Do's & Don'ts" },
  { to: "/bilingual", label: "Bilingual" },
  { to: "/export", label: "Export Prep" },
];

const banglaNavItems = [
  { to: "/bn", label: "মূল পাতা" },
  { to: "/bn/blog", label: "ব্লগ" },
  { to: "/bn/about", label: "পরিচিতি" },
  { to: "/bn/citizens", label: "নাগরিকদের জন্য" },
];

export default function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isBangla = location.pathname.startsWith("/bn");
  const currentNavItems = isBangla ? banglaNavItems : navItems;

  return (
    <div className="size-full bg-[#F5F5F0] overflow-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavLink to={isBangla ? "/bn" : "/"} className="flex items-center gap-3">
              <div className="w-9 h-9"><Logo size={36} /></div>
              <span 
                className="text-[#1A2332] tracking-tight" 
                style={{ 
                  fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : "'Plus Jakarta Sans', sans-serif", 
                  fontWeight: 700, 
                  fontSize: isBangla ? '20px' : '18px' 
                }}
              >
                {isBangla ? "বাংলাদেশ " : "Bangladesh"}
                <span style={{ fontWeight: 800 }}>{isBangla ? "এআই" : " AI"}</span>
              </span>
            </NavLink>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {currentNavItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/" || item.to === "/bn"}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-[13px] transition-colors ${
                      isActive
                        ? "bg-[#006A4E]/10 text-[#006A4E]"
                        : "text-[#1A2332]/70 hover:text-[#1A2332] hover:bg-gray-100"
                    }`
                  }
                  style={{ 
                    fontWeight: 500,
                    fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : undefined,
                    fontSize: isBangla ? '15px' : '13px'
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="hidden md:block">
              <LanguageToggle />
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
            {currentNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/" || item.to === "/bn"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-[14px] ${
                    isActive ? "bg-[#006A4E]/10 text-[#006A4E]" : "text-[#1A2332]/70"
                  }`
                }
                style={{ 
                  fontWeight: 500,
                  fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : undefined,
                  fontSize: isBangla ? '16px' : '14px'
                }}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-gray-100 flex justify-center">
              <LanguageToggle />
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1A2332] text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10"><Logo size={40} color="#FFFFFF" /></div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '16px' }}>
                  Bangladesh AI
                </span>
              </div>
              <p className="text-white/60 text-[13px]" style={{ lineHeight: 1.6 }}>
                Independent AI research, advocacy, and education for Bangladesh.
              </p>
              <p className="text-white/40 text-[12px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>
                দেশ গড়ি বুদ্ধিমত্তায়
              </p>
            </div>
            {[
              { title: "Research", items: ["AI Readiness", "Policy Briefs", "Data Hub", "Publications"] },
              { title: "About", items: ["Mission", "Emon Hossain", "Methodology", "Partners"] },
              { title: "Connect", items: ["Contact", "Newsletter", "LinkedIn", "GitHub"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white/90 text-[13px] mb-3" style={{ fontWeight: 600 }}>{col.title}</h4>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item}>
                      <span className="text-white/50 text-[13px] hover:text-white/80 cursor-pointer transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-[12px]">
              © 2026 Bangladesh AI. Intelligence Builds Nations. দেশ গড়ি বুদ্ধিমত্তায়।
            </p>
            <p className="text-white/30 text-[11px]">
              Bangladesh AI is an independent research platform. Not affiliated with any government body.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}