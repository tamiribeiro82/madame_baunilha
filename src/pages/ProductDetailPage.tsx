import { useState } from "react";
import type { PageName } from "@/components/SiteHeader";
import type { Recipe, Product } from "@/data/madame-baunilha";
import { recipes, products } from "@/data/madame-baunilha";
import SectionHeader from "@/components/SectionHeader";
import RecipeCard from "@/components/RecipeCard";
import ProductCard from "@/components/ProductCard";

interface ProductDetailPageProps {
  product: Product | null;
  setPage: (page: PageName) => void;
  setSelectedRecipe: (r: Recipe) => void;
  setSelectedProduct: (p: Product) => void;
  addToCart: (p: Product) => void;
}

const ProductDetailPage = ({ product, setPage, setSelectedRecipe, setSelectedProduct, addToCart }: ProductDetailPageProps) => {
  const [added, setAdded] = useState(false);
  if (!product) return null;

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);
  const relatedRecs = recipes.filter((r) => product.relatedRecipes?.includes(r.id));

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="pt-[100px] py-20">
      <div className="container">
        <button
          onClick={() => setPage("shop")}
          className="bg-transparent border border-beige text-muted-foreground rounded-full px-4 py-2 text-[13px] cursor-pointer mb-10 font-body"
        >
          ← Voltar à loja
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
          <div className="rounded-3xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-[480px] object-cover" />
          </div>
          <div>
            <span className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-3 block">{product.category}</span>
            <h1 className="font-display text-[clamp(28px,4vw,46px)] font-bold text-charcoal mb-3">{product.name}</h1>
            <div className="font-display text-[42px] font-bold text-primary mb-6">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            <div className="mb-8">
              <div className="font-display text-lg mb-4">Diferenciais</div>
              <div className="grid grid-cols-2 gap-2.5">
                {product.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 px-4 py-2.5 bg-offwhite rounded-xl text-[13px] text-charcoal">
                    <span className="text-accent">✓</span> {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAdd}
                className="flex-1 justify-center px-8 py-4 rounded-full text-[15px] font-semibold transition-all border-none cursor-pointer inline-flex items-center gap-2"
                style={{
                  background: added ? "hsl(var(--sage))" : "hsl(var(--terracotta))",
                  color: "white",
                }}
              >
                {added ? "✓ Adicionado!" : "Adicionar ao carrinho"}
              </button>
              <button className="w-[52px] h-[52px] border-2 border-beige rounded-full bg-transparent cursor-pointer text-xl">♡</button>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6 p-4 rounded-[14px] flex items-center gap-3" style={{ background: "#E8F5E9" }}>
              <span className="text-2xl">💬</span>
              <div>
                <div className="text-[13px] font-semibold" style={{ color: "#2E7D32" }}>Dúvidas? Fale pelo WhatsApp</div>
                <div className="text-xs" style={{ color: "#4CAF50" }}>Resposta em até 2 horas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Recipes */}
        {relatedRecs.length > 0 && (
          <div className="mt-20">
            <SectionHeader label="Use este produto em" title="Receitas sugeridas" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedRecs.map((r) => (
                <RecipeCard key={r.id} recipe={r} onClick={(rec) => { setSelectedRecipe(rec); setPage("recipe"); }} />
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        <div className="mt-[60px]">
          <SectionHeader label="Explore também" title="Outros produtos" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} onClick={(prod) => { setSelectedProduct(prod); setPage("product"); window.scrollTo(0, 0); }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
