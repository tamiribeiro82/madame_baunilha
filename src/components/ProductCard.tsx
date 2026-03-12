import { useState } from "react";
import type { Product } from "@/data/madame-baunilha";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(product)}
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
      <div className="relative overflow-hidden h-[240px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
        <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm rounded-full px-3.5 py-1 text-[11px] font-semibold text-muted-foreground tracking-wide">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-[17px] font-semibold mb-1.5 text-charcoal">
          {product.name}
        </h3>
        <p className="text-[13px] text-muted-foreground mb-4 leading-relaxed">
          {product.description.substring(0, 70)}...
        </p>
        <div className="flex justify-between items-center">
          <span className="font-display text-[22px] font-bold text-primary">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
          <button
            className="border-2 border-primary rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300"
            style={{
              background: hovered ? "hsl(var(--terracotta))" : "transparent",
              color: hovered ? "white" : "hsl(var(--terracotta))",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
