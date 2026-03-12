import { useState } from "react";
import type { PageName } from "@/components/SiteHeader";
import type { Product } from "@/data/madame-baunilha";
import { products } from "@/data/madame-baunilha";
import ProductCard from "@/components/ProductCard";

interface ShopPageProps {
  setPage: (page: PageName) => void;
  setSelectedProduct: (p: Product) => void;
}

const ShopPage = ({ setPage, setSelectedProduct }: ShopPageProps) => {
  const [filter, setFilter] = useState("Todos");
  const cats = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];
  const filtered = filter === "Todos" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <div className="pt-[72px] min-h-[300px] flex items-center relative overflow-hidden" style={{ background: "linear-gradient(145deg, hsl(var(--sage)), hsl(var(--sage-dark)) 40%, hsl(var(--brown)))" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.15]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=1400&q=50)" }} />
        <div className="container relative py-[60px] px-5">
          <span className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-terracotta-light block mb-3">Nossa curadoria</span>
          <h1 className="font-display text-[clamp(28px,4vw,46px)] font-bold mb-3" style={{ color: "white" }}>Produtos culinários premium</h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.6)" }}>Ingredientes selecionados para elevar sua cozinha</p>
        </div>
      </div>

      <section className="py-20 pt-12">
        <div className="container">
          <div className="flex gap-2.5 flex-wrap mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="px-5 py-2 rounded-full text-[13px] font-medium cursor-pointer transition-all font-body border-[1.5px]"
                style={{
                  borderColor: filter === c ? "hsl(var(--terracotta))" : "hsl(var(--beige))",
                  background: filter === c ? "hsl(var(--terracotta))" : "hsl(var(--card))",
                  color: filter === c ? "white" : "hsl(var(--muted-foreground))",
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onClick={(prod) => { setSelectedProduct(prod); setPage("product"); }} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
