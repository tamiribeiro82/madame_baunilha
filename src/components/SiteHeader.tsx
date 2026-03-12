import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

type PageName = "home" | "recipes" | "recipe" | "shop" | "product" | "about" | "contact";

interface SiteHeaderProps {
  page: PageName;
  setPage: (page: PageName) => void;
  cartCount: number;
}

const navItems: { label: string; page: PageName }[] = [
  { label: "Início", page: "home" },
  { label: "Receitas", page: "recipes" },
  { label: "Loja", page: "shop" },
  { label: "Sobre", page: "about" },
  { label: "Contato", page: "contact" },
];

const SiteHeader = ({ page, setPage, cartCount }: SiteHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-400 px-5"
        style={{
          background: scrolled ? "hsla(var(--cream) / 0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid hsl(var(--beige))" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-[76px]">
          {/* Logo */}
          <button onClick={() => setPage("home")} className="bg-transparent border-none cursor-pointer">
            <img src={logo} alt="Madame Baunilha" className="h-12 w-auto" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setPage(item.page)}
                className={`nav-link bg-transparent border-none text-sm font-medium cursor-pointer font-body tracking-wide py-1 ${
                  page === item.page ? "active text-accent" : "text-charcoal"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage("shop")}
              className="relative bg-transparent border-none text-xl cursor-pointer p-2"
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden bg-transparent border-none cursor-pointer p-2 flex flex-col gap-[5px] items-end"
            >
              <span className="w-6 h-0.5 bg-charcoal rounded-sm block" />
              <span className="w-4 h-0.5 bg-charcoal rounded-sm block" />
              <span className="w-5 h-0.5 bg-charcoal rounded-sm block" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal/40 z-[999] backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 w-[280px] h-screen bg-card z-[1000] pt-20 px-8 shadow-[-20px_0_60px_rgba(44,36,33,0.12)] transition-transform duration-400">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 bg-transparent border-none text-2xl cursor-pointer text-muted-foreground"
            >
              ✕
            </button>
            <div className="mb-8">
              <div className="font-display text-2xl font-bold text-charcoal">Madame Baunilha</div>
            </div>
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setPage(item.page);
                  setMenuOpen(false);
                }}
                className="block w-full text-left bg-transparent border-none py-3.5 text-lg font-display cursor-pointer border-b border-beige"
                style={{
                  color: page === item.page ? "hsl(var(--sage))" : "hsl(var(--charcoal))",
                  fontWeight: page === item.page ? 600 : 400,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SiteHeader;
export type { PageName };
