import { useState, useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import type { PageName } from "@/components/SiteHeader";
import type { Recipe, Product } from "@/data/madame-baunilha";
import HomePage from "@/pages/HomePage";
import RecipesPage from "@/pages/RecipesPage";
import RecipeDetailPage from "@/pages/RecipeDetailPage";
import ShopPage from "@/pages/ShopPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";

interface CartItem extends Product {
  qty: number;
}

const Index = () => {
  const [page, setPage] = useState<PageName>("home");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...product, qty: 1 }];
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      <SiteHeader page={page} setPage={setPage} cartCount={cartCount} />
      <main>
        {page === "home" && (
          <HomePage setPage={setPage} setSelectedRecipe={setSelectedRecipe} setSelectedProduct={setSelectedProduct} />
        )}
        {page === "recipes" && (
          <RecipesPage setPage={setPage} setSelectedRecipe={setSelectedRecipe} />
        )}
        {page === "recipe" && (
          <RecipeDetailPage recipe={selectedRecipe} setPage={setPage} setSelectedRecipe={setSelectedRecipe} setSelectedProduct={setSelectedProduct} />
        )}
        {page === "shop" && (
          <ShopPage setPage={setPage} setSelectedProduct={setSelectedProduct} />
        )}
        {page === "product" && (
          <ProductDetailPage product={selectedProduct} setPage={setPage} setSelectedRecipe={setSelectedRecipe} setSelectedProduct={setSelectedProduct} addToCart={addToCart} />
        )}
        {page === "about" && <AboutPage />}
        {page === "contact" && <ContactPage />}
      </main>
    </>
  );
};

export default Index;
