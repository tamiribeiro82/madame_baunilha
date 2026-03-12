import type { PageName } from "@/components/SiteHeader";
import type { Recipe, Product } from "@/data/madame-baunilha";
import { recipes, products } from "@/data/madame-baunilha";
import SectionHeader from "@/components/SectionHeader";
import RecipeCard from "@/components/RecipeCard";
import ProductCard from "@/components/ProductCard";

interface RecipeDetailPageProps {
  recipe: Recipe | null;
  setPage: (page: PageName) => void;
  setSelectedRecipe: (r: Recipe) => void;
  setSelectedProduct: (p: Product) => void;
}

const RecipeDetailPage = ({ recipe, setPage, setSelectedRecipe, setSelectedProduct }: RecipeDetailPageProps) => {
  if (!recipe) return null;
  const related = recipes.filter((r) => recipe.relatedRecipes?.includes(r.id));
  const relatedProds = products.filter((p) => recipe.relatedProducts?.includes(p.id));

  return (
    <>
      {/* Hero */}
      <div className="relative h-[480px] mt-[72px]">
        <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(44,36,33,0.9) 0%, rgba(44,36,33,0.2) 50%, transparent 100%)" }} />
        <div className="absolute bottom-10 left-0 right-0">
          <div className="container">
            <button
              onClick={() => setPage("recipes")}
              className="border-none rounded-full px-4 py-2 text-[13px] cursor-pointer mb-4 backdrop-blur-sm font-body"
              style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
            >
              ← Voltar
            </button>
            <div className="flex gap-3 flex-wrap mb-3">
              {[recipe.category, recipe.difficulty, recipe.time, recipe.servings].map((tag) => (
                <span key={tag} className="bg-cream/85 backdrop-blur-sm rounded-full px-3.5 py-1 text-xs text-brown font-medium">{tag}</span>
              ))}
            </div>
            <h1 className="font-display text-[clamp(28px,5vw,48px)] font-bold max-w-[700px]" style={{ color: "white" }}>{recipe.title}</h1>
          </div>
        </div>
      </div>

      <section className="py-20 pt-[60px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-[60px]">
            {/* Ingredients */}
            <div>
              <div className="bg-offwhite rounded-3xl p-8 sticky top-[100px]">
                <h2 className="font-display text-[22px] mb-6 text-charcoal">Ingredientes</h2>
                <p className="text-[13px] text-muted-foreground mb-5">Para {recipe.servings}</p>
                {recipe.ingredients.map((ing, i) => (
                  <div key={i} className="flex items-start gap-2.5 py-2.5" style={{ borderBottom: i < recipe.ingredients.length - 1 ? "1px solid hsl(var(--beige))" : "none" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] shrink-0" />
                    <span className="text-sm text-charcoal">{ing}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div>
              <p className="text-base text-muted-foreground leading-relaxed mb-10">{recipe.description}</p>
              <h2 className="font-display text-[26px] mb-8">Modo de Preparo</h2>
              {recipe.steps.map((step, i) => (
                <div key={i} className="flex gap-5 mb-7">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-primary flex items-center justify-center font-display text-base font-bold" style={{ color: "white" }}>
                    {i + 1}
                  </div>
                  <p className="text-[15px] leading-[1.75] pt-1.5 text-charcoal">{step}</p>
                </div>
              ))}
              {recipe.tip && (
                <div className="bg-accent/10 border border-accent/25 rounded-2xl p-6 mt-4">
                  <div className="text-accent font-semibold mb-2 text-sm">💡 Dica da cozinheira</div>
                  <p className="text-sm text-charcoal leading-relaxed">{recipe.tip}</p>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProds.length > 0 && (
            <div className="mt-20">
              <div className="rounded-3xl p-10 mb-6" style={{ background: "linear-gradient(135deg, hsla(var(--terracotta) / 0.08), hsl(var(--beige)))" }}>
                <SectionHeader label="Use nesta receita" title="Produtos recomendados" subtitle="Ingredientes que vão elevar ainda mais o resultado" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProds.map((p) => (
                    <ProductCard key={p.id} product={p} onClick={(prod) => { setSelectedProduct(prod); setPage("product"); }} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Related Recipes */}
          {related.length > 0 && (
            <div className="mt-[60px]">
              <SectionHeader label="Veja também" title="Receitas relacionadas" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r) => (
                  <RecipeCard key={r.id} recipe={r} onClick={(rec) => { setSelectedRecipe(rec); setPage("recipe"); window.scrollTo(0, 0); }} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default RecipeDetailPage;
