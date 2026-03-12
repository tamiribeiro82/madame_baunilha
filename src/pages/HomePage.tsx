import { useState } from "react";
import type { PageName } from "@/components/SiteHeader";
import type { Recipe, Product } from "@/data/madame-baunilha";
import { recipes, products, categories, testimonials } from "@/data/madame-baunilha";
import SectionHeader from "@/components/SectionHeader";
import RecipeCard from "@/components/RecipeCard";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";

interface HomePageProps {
  setPage: (page: PageName) => void;
  setSelectedRecipe: (r: Recipe) => void;
  setSelectedProduct: (p: Product) => void;
}

const HomePage = ({ setPage, setSelectedRecipe, setSelectedProduct }: HomePageProps) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-sage-dark via-brown to-charcoal">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.18]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1600&q=60)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsla(var(--sage-dark) / 0.75), hsla(var(--brown) / 0.5) 50%, hsla(var(--charcoal) / 0.88))" }} />
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsla(var(--sage-light) / 0.13), transparent 70%)" }} />
        <div className="absolute -bottom-[100px] -left-[100px] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsla(var(--terracotta) / 0.09), transparent 70%)" }} />

        <div className="container relative z-[1] py-[140px_100px] px-5">
          <div className="max-w-[700px]">
            <span className="font-body text-[11px] font-semibold tracking-[4px] uppercase text-sage-light inline-block mb-6">
              ✦ Sabor que inspira, ingredientes que transformam
            </span>
            <h1 className="font-display text-[clamp(44px,7vw,78px)] font-bold leading-[1.05] mb-7 tracking-tight" style={{ color: "white" }}>
              Receitas com{" "}
              <em className="italic text-terracotta-light">alma</em>{" "}
              e ingredientes que{" "}
              <em className="italic" style={{ color: "#A8D5D3" }}>encantam</em>
            </h1>
            <p className="text-lg leading-[1.75] mb-11 font-light max-w-[560px]" style={{ color: "rgba(255,255,255,0.68)" }}>
              Da Madame Baunilha para a sua cozinha — receitas exclusivas e produtos culinários
              selecionados com carinho para transformar cada refeição em memória afetiva.
            </p>

            {/* Search */}
            <div className="flex rounded-full overflow-hidden max-w-[500px] mb-9 border border-white/20" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(16px)" }}>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar receitas..."
                className="flex-1 bg-transparent border-none px-6 py-4 text-[15px] outline-none font-body"
                style={{ color: "white" }}
              />
              <button onClick={() => setPage("recipes")} className="bg-primary border-none px-6 text-lg cursor-pointer" style={{ color: "white" }}>
                🔍
              </button>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button onClick={() => setPage("recipes")} className="btn-hover bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all inline-flex items-center gap-2 border-none cursor-pointer">
                Explorar Receitas ↗
              </button>
              <button onClick={() => setPage("shop")} className="px-7 py-3 rounded-full text-sm font-semibold border-2 border-white/40 bg-transparent inline-flex items-center gap-2 transition-all cursor-pointer" style={{ color: "white" }}>
                Ver Loja →
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-10 right-10 hidden sm:flex gap-8 z-[1]">
          {[
            { num: "120+", label: "Receitas" },
            { num: "30+", label: "Produtos" },
            { num: "15k+", label: "Seguidores" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-[28px] font-bold" style={{ color: "white" }}>{s.num}</div>
              <div className="text-xs tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
            <SectionHeader label="Em destaque" title="Receitas para se inspirar" subtitle="Selecionadas com cuidado para você" />
            <button onClick={() => setPage("recipes")} className="border-2 border-primary bg-transparent text-primary px-7 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer inline-flex items-center gap-2">
              Ver todas →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.filter((r) => r.featured).map((r) => (
              <RecipeCard key={r.id} recipe={r} onClick={(recipe) => { setSelectedRecipe(recipe); setPage("recipe"); }} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-offwhite">
        <div className="container">
          <SectionHeader label="Navegue por" title="Categorias de receitas" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} cat={cat} onClick={() => setPage("recipes")} />
            ))}
          </div>
        </div>
      </section>

      {/* Bridge Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-sage to-sage-dark">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.07) 0%, transparent 60%)" }} />
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
            <div>
              <span className="font-body text-[11px] font-semibold tracking-[3px] uppercase block mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>Receitas + Produtos</span>
              <h2 className="font-display text-[clamp(28px,4vw,46px)] font-bold mb-5" style={{ color: "white" }}>Do ingrediente à mesa, com intenção</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
                Cada receita é pensada junto com os produtos certos. Descubra como ingredientes de qualidade transformam preparações simples em experiências memoráveis.
              </p>
              <button onClick={() => setPage("shop")} className="bg-card text-primary px-8 py-3.5 rounded-full text-sm font-semibold transition-all border-none cursor-pointer">
                Conhecer produtos →
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🫒", text: "Ingredientes selecionados" },
                { icon: "📖", text: "Receitas exclusivas" },
                { icon: "🚚", text: "Entrega para todo Brasil" },
                { icon: "💚", text: "Produção responsável" },
              ].map((item) => (
                <div key={item.text} className="rounded-2xl p-5 backdrop-blur-[10px]" style={{ background: "rgba(255,255,255,0.12)" }}>
                  <div className="text-[28px] mb-2">{item.icon}</div>
                  <div className="text-sm font-medium" style={{ color: "white" }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
            <SectionHeader label="Nossa loja" title="Produtos culinários premium" subtitle="Ingredientes que fazem a diferença" />
            <button onClick={() => setPage("shop")} className="border-2 border-primary bg-transparent text-primary px-7 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer inline-flex items-center gap-2">
              Ver todos →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter((p) => p.featured).map((p) => (
              <ProductCard key={p.id} product={p} onClick={(prod) => { setSelectedProduct(prod); setPage("product"); }} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-offwhite">
        <div className="container">
          <SectionHeader label="Depoimentos" title="Quem já experimentou" subtitle="A comunidade que cozinha e confia" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-card rounded-lg p-8 shadow-[0_2px_20px_rgba(44,36,33,0.06)]">
                <div className="text-primary text-lg mb-4 tracking-widest">{"★".repeat(t.rating)}</div>
                <p className="text-[15px] text-charcoal leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold" style={{ color: "white" }}>
                    {t.avatar}
                  </div>
                  <div className="font-semibold text-sm">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(var(--charcoal)), hsl(var(--sage-dark)))" }}>
        <div className="container">
          <div className="max-w-[560px] mx-auto text-center">
            <span className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-terracotta-light block mb-3">Comunidade</span>
            <h2 className="font-display text-[clamp(28px,4vw,46px)] font-bold mb-4" style={{ color: "white" }}>Receitas todo semana, direto no seu email</h2>
            <p className="mb-9 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Junte-se a mais de 15 mil pessoas que recebem receitas exclusivas, dicas de culinária e ofertas especiais.
            </p>
            {subscribed ? (
              <div className="bg-sage/20 border border-accent rounded-2xl p-5 text-accent text-base">
                ✓ Perfeito! Você está na lista. Prepare-se para se inspirar!
              </div>
            ) : (
              <div className="flex rounded-full overflow-hidden border border-white/10" style={{ background: "rgba(255,255,255,0.06)" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail..."
                  className="flex-1 bg-transparent border-none px-6 py-4 text-sm outline-none font-body"
                  style={{ color: "white" }}
                />
                <button
                  onClick={() => email && setSubscribed(true)}
                  className="bg-primary border-none px-7 font-body text-sm font-semibold cursor-pointer tracking-wide"
                  style={{ color: "white" }}
                >
                  Quero receber
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-[60px] pb-8" style={{ background: "#1A1512", color: "rgba(255,255,255,0.6)" }}>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-primary rounded-[10px] flex items-center justify-center text-base">🌿</div>
                <div className="font-display text-base font-bold" style={{ color: "white" }}>Madame Baunilha</div>
              </div>
              <p className="text-sm leading-relaxed max-w-[240px]">
                Receitas com alma e ingredientes com propósito. Um espaço para quem ama cozinhar bem.
              </p>
            </div>
            {[
              { title: "Conteúdo", links: ["Receitas", "Categorias", "Novidades", "Favoritos"] },
              { title: "Loja", links: ["Todos os Produtos", "Óleos & Azeites", "Temperos", "Kits"] },
              { title: "Marca", links: ["Sobre nós", "Contato", "Instagram", "WhatsApp"] },
            ].map((col) => (
              <div key={col.title}>
                <div className="font-display text-base mb-4" style={{ color: "white" }}>{col.title}</div>
                {col.links.map((link) => (
                  <div key={link} className="mb-2 text-sm">
                    <a href="#" className="transition-colors hover:text-white/80" style={{ color: "rgba(255,255,255,0.5)" }}>{link}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="border-t border-white/[0.08] pt-6 flex justify-between items-center flex-wrap gap-3">
            <span className="text-[13px]">© 2024 Madame Baunilha. Todos os direitos reservados.</span>
            <span className="text-[13px]">Feito com 🌿 e muito carinho</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
