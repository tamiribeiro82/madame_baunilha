import { useState } from "react";
import type { Category } from "@/data/madame-baunilha";

interface CategoryCardProps {
  cat: Category;
  onClick?: () => void;
}

const CategoryCard = ({ cat, onClick }: CategoryCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-lg p-7 text-center cursor-pointer transition-all duration-300"
      style={{
        background: hovered ? "hsl(var(--sage))" : "hsl(var(--card))",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered
          ? "0 16px 40px hsla(var(--sage) / 0.28)"
          : "0 2px 16px rgba(44,36,33,0.06)",
      }}
    >
      <div className="text-4xl mb-3">{cat.icon}</div>
      <div
        className="font-display text-[15px] font-semibold mb-1 transition-colors"
        style={{ color: hovered ? "white" : "hsl(var(--charcoal))" }}
      >
        {cat.name}
      </div>
      <div
        className="text-xs transition-colors"
        style={{ color: hovered ? "rgba(255,255,255,0.7)" : "hsl(var(--muted-foreground))" }}
      >
        {cat.count} receitas
      </div>
    </div>
  );
};

export default CategoryCard;
