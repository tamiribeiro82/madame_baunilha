import { useState } from "react";
import type { Recipe } from "@/data/madame-baunilha";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(recipe)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-card rounded-lg overflow-hidden cursor-pointer transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
      style={{
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 50px rgba(44,36,33,0.15)"
          : "0 2px 20px rgba(44,36,33,0.06)",
      }}
    >
      <div className="relative overflow-hidden h-[220px]">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
        <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm rounded-full px-3.5 py-1 text-[11px] font-semibold text-primary tracking-wide">
          {recipe.category}
        </div>
        <div className="absolute bottom-4 right-4 bg-cream/90 backdrop-blur-sm rounded-full px-3.5 py-1 text-xs text-muted-foreground">
          ⏱ {recipe.time}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-[19px] font-semibold mb-2 text-charcoal leading-tight">
          {recipe.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {recipe.description.substring(0, 90)}...
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-accent font-semibold bg-accent/10 rounded-full px-3 py-1">
            {recipe.difficulty}
          </span>
          <span
            className="text-[13px] font-medium transition-colors duration-300"
            style={{ color: hovered ? "hsl(var(--terracotta))" : "hsl(var(--muted-foreground))" }}
          >
            Ver receita →
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
