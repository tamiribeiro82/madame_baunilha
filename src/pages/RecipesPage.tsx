import { useState } from "react";
import type { PageName } from "@/components/SiteHeader";
import type { Recipe } from "@/data/madame-baunilha";
import { recipes } from "@/data/madame-baunilha";
import RecipeCard from "@/components/RecipeCard";

interface RecipesPageProps {
  setPage: (page: PageName) => void;
  setSelectedRecipe: (r: Recipe) => void;
}

const RecipesPage = ({ setPage, setSelectedRecipe }: RecipesPageProps) => {
  const [filter, setFilter] = useState("Todas");
  const [search, setSearch] = useState("");
  const cats = ["Todas", ...Array.from(new Set(recipes.map((r) => r.category)))];
  const filtered = recipes.filter(
    (r) =>
      (filter === "Todas" || r.category === filter) &&
      (r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <div className="pt-[100px] bg-offwhite min-h-[280px] flex items-center">
        <div className="container">
          <span className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-3 block">Todas as receitas</span>
          <h1 className="font-display text-[clamp(28px,4vw,46px)] font-bold text-charcoal mb-6">Receitas para cada momento</h1>
          <div className="flex bg-card rounded-full overflow-hidden border border-beige max-w-[460px]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar receitas..."
              className="flex-1 bg-transparent border-none px-5 py-3.5 text-sm outline-none font-body text-charcoal"
            />
            <button className="bg-primary border-none px-5 cursor-pointer text-base" style={{ color: "white" }}>🔍</button>
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <RecipeCard
                key={r.id}
                recipe={r}
                onClick={(recipe) => { setSelectedRecipe(recipe); setPage("recipe"); }}
              />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-[60px] text-muted-foreground">
              <div className="text-5xl mb-4">🍽️</div>
              <p>Nenhuma receita encontrada. Tente outra busca.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default RecipesPage;
