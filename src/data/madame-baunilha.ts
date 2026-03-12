export interface Recipe {
  id: number;
  title: string;
  category: string;
  time: string;
  difficulty: string;
  servings: string;
  image: string;
  description: string;
  tags: string[];
  featured: boolean;
  ingredients: string[];
  steps: string[];
  tip: string;
  relatedProducts: number[];
  relatedRecipes: number[];
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  benefits: string[];
  relatedRecipes: number[];
  featured: boolean;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

export const recipes: Recipe[] = [
  {
    id: 1, title: "Risoto de Funghi com Parmesão", category: "Massas & Risotos",
    time: "40 min", difficulty: "Médio", servings: "4 porções",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
    description: "Um risoto cremoso e aromático com funghi secchi reidratados e parmesão italiano de qualidade.",
    tags: ["Risoto", "Vegetariano", "Italiano"], featured: true,
    ingredients: ["300g arroz arbóreo", "50g funghi secchi", "1 cebola média picada", "2 dentes de alho", "150ml vinho branco seco", "1L caldo de legumes quente", "80g parmesão ralado", "3 colheres de manteiga", "Sal e pimenta a gosto", "Salsinha fresca"],
    steps: ["Reidrate o funghi em água morna por 20 minutos. Reserve a água coada.", "Refogue cebola e alho na manteiga até ficarem translúcidos.", "Adicione o arroz e toste por 2 minutos em fogo médio-alto.", "Deglace com o vinho branco e mexa até evaporar.", "Adicione o caldo aos poucos, colher a colher, sempre mexendo.", "Acrescente o funghi e a água do funghi coada na metade do cozimento.", "Finalize com manteiga, parmesão, ajuste sal e sirva imediatamente."],
    tip: "O segredo do risoto perfeito é não parar de mexer e usar caldo sempre quente.",
    relatedProducts: [1, 3], relatedRecipes: [2, 5],
  },
  {
    id: 2, title: "Bolo de Limão Siciliano com Calda", category: "Doces & Bolos",
    time: "55 min", difficulty: "Fácil", servings: "8 fatias",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    description: "Bolo úmido e perfumado com raspas de limão siciliano, finalizado com calda cítrica irresistível.",
    tags: ["Bolo", "Cítrico", "Café da manhã"], featured: true,
    ingredients: ["3 ovos", "200g açúcar", "150ml azeite de oliva", "Raspas e suco de 2 limões sicilianos", "200g farinha de trigo", "1 colher de fermento", "1 pitada de sal"],
    steps: ["Bata os ovos com o açúcar até ficar claro e aerado.", "Adicione o azeite, raspas e suco de limão, misture.", "Incorpore a farinha, fermento e sal delicadamente.", "Asse em forma untada a 180°C por 35-40 minutos.", "Prepare a calda com suco de limão e açúcar de confeiteiro e regue o bolo ainda quente."],
    tip: "Use azeite de oliva extra virgem para um sabor mais sofisticado.",
    relatedProducts: [2, 4], relatedRecipes: [3, 6],
  },
  {
    id: 3, title: "Salmão Grelhado com Manteiga de Ervas", category: "Pratos Principais",
    time: "25 min", difficulty: "Fácil", servings: "2 porções",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
    description: "Salmão suculento grelhado com manteiga composta de ervas finas e limão.",
    tags: ["Peixe", "Proteína", "Saudável"], featured: true,
    ingredients: ["2 filés de salmão", "3 colheres de manteiga", "Alecrim e tomilho frescos", "1 limão", "Alho picado", "Sal grosso e pimenta"],
    steps: ["Tempere o salmão com sal, pimenta e alho.", "Grelhe em frigideira quente com azeite por 4 minutos de cada lado.", "Prepare a manteiga de ervas misturando manteiga amolecida com ervas e raspas de limão.", "Sirva o salmão com uma colher generosa da manteiga de ervas."],
    tip: "Não mova o salmão enquanto grelha — a crosta dourada é o segredo.",
    relatedProducts: [1, 5], relatedRecipes: [1, 4],
  },
  {
    id: 4, title: "Pão de Fermentação Natural", category: "Pães & Massas",
    time: "18h", difficulty: "Avançado", servings: "1 pão",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80",
    description: "Pão artesanal de fermentação lenta com casca crocante e miolo cheio de sabor.",
    tags: ["Pão", "Artesanal", "Fermentação Natural"], featured: false,
    ingredients: ["500g farinha tipo 1", "150g levain ativo", "350ml água filtrada", "10g sal marinho"],
    steps: ["Misture farinha e água, deixe autolisando por 1h.", "Adicione o levain e o sal, incorpore bem.", "Realize dobras a cada 30 min por 4h (bulk fermentation).", "Modele e leve à geladeira por 12h.", "Asse em dutch oven a 250°C por 20 min tampado e 25 min destampado."],
    tip: "A temperatura da cozinha influencia muito o tempo de fermentação.",
    relatedProducts: [2, 6], relatedRecipes: [5, 6],
  },
  {
    id: 5, title: "Tagliatelle ao Ragù Bolognese", category: "Massas & Risotos",
    time: "3h", difficulty: "Médio", servings: "6 porções",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
    description: "O clássico ragù à bolognese preparado lentamente, rico, encorpado e cheio de sabor.",
    tags: ["Massa", "Carne", "Italiano"], featured: false,
    ingredients: ["400g tagliatelle fresco", "300g carne moída bovina", "150g linguiça italiana", "200ml vinho tinto", "400g tomate pelado", "Cenoura, salsão, cebola", "Leite integral"],
    steps: ["Refogue o soffritto (cenoura, salsão, cebola) em manteiga.", "Doure as carnes e deglace com vinho tinto.", "Adicione o tomate, tampe e cozinhe em fogo baixo por 2h.", "Finalize com um fio de leite para suavizar a acidez.", "Sirva sobre tagliatelle al dente."],
    tip: "Quanto mais tempo no fogo baixo, melhor o sabor.",
    relatedProducts: [1, 3], relatedRecipes: [1, 3],
  },
  {
    id: 6, title: "Cheesecake de Maracujá", category: "Doces & Bolos",
    time: "4h", difficulty: "Médio", servings: "10 fatias",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    description: "Cheesecake cremoso com base de biscoito amanteigado e calda fresca de maracujá.",
    tags: ["Sobremesa", "Frutas", "Sem Forno"], featured: false,
    ingredients: ["200g cream cheese", "200ml creme de leite", "1 lata de leite condensado", "Suco de 3 maracujás", "200g biscoito maisena", "80g manteiga derretida", "1 envelope de gelatina sem sabor"],
    steps: ["Processe o biscoito com manteiga e forre a forma.", "Dissolva a gelatina e misture com cream cheese, leite condensado e creme.", "Despeje sobre a base e leve à geladeira por 4h.", "Prepare a calda com maracujá e açúcar e cubra antes de servir."],
    tip: "Use maracujá fresco para uma calda mais intensa e natural.",
    relatedProducts: [4, 6], relatedRecipes: [2, 4],
  },
];

export const products: Product[] = [
  {
    id: 1, name: "Azeite Extra Virgem Arbequina", category: "Óleos & Azeites",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
    description: "Azeite de oliva extra virgem de primeira prensagem a frio, com sabor frutado suave e aroma delicado.",
    benefits: ["Prensagem a frio", "Acidez < 0,5%", "Origem controlada", "Embalagem premium"],
    relatedRecipes: [1, 3, 5], featured: true,
  },
  {
    id: 2, name: "Mix de Especiarias Mediterrâneas", category: "Temperos",
    price: 34.90,
    image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&q=80",
    description: "Blend exclusivo com ervas mediterrâneas secas: manjericão, orégano, tomilho e alecrim.",
    benefits: ["Blend exclusivo", "100% natural", "Sem conservantes", "Aroma intenso"],
    relatedRecipes: [3, 5, 1], featured: true,
  },
  {
    id: 3, name: "Flor de Sal com Ervas", category: "Sais Especiais",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    description: "Flor de sal colhida artesanalmente, misturada com ervas finas para finalização de pratos.",
    benefits: ["Colheita artesanal", "Baixo teor de sódio", "Textura delicada", "Sabor mineral"],
    relatedRecipes: [3, 4, 1], featured: false,
  },
  {
    id: 4, name: "Extrato de Baunilha Bourbon", category: "Extratos & Essências",
    price: 56.90,
    image: "https://images.unsplash.com/photo-1611048661702-7b55eed346b4?w=800&q=80",
    description: "Extrato puro de baunilha bourbon madagascarense, ideal para doces e confeitaria.",
    benefits: ["Fava natural", "Intensidade real", "Sem álcool", "Rende muito"],
    relatedRecipes: [2, 6], featured: true,
  },
  {
    id: 5, name: "Manteiga Clarificada (Ghee)", category: "Laticínios",
    price: 48.50,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
    description: "Ghee puro de manteiga de vacas criadas a pasto, com ponto de fumaça elevado e sabor amendoado.",
    benefits: ["Sem caseína", "Ponto de fumaça alto", "Sabor rico", "Lactose reduzida"],
    relatedRecipes: [1, 3, 5], featured: false,
  },
  {
    id: 6, name: "Açúcar de Coco Orgânico", category: "Açúcares",
    price: 28.90,
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=800&q=80",
    description: "Açúcar de coco orgânico com índice glicêmico baixo e sabor levemente caramelado.",
    benefits: ["Orgânico", "Baixo IG", "Trace minerals", "Versátil"],
    relatedRecipes: [2, 6, 4], featured: false,
  },
];

export const categories: Category[] = [
  { id: 1, name: "Massas & Risotos", icon: "🍝", count: 24 },
  { id: 2, name: "Doces & Bolos", icon: "🎂", count: 18 },
  { id: 3, name: "Pratos Principais", icon: "🍽️", count: 32 },
  { id: 4, name: "Pães & Massas", icon: "🍞", count: 15 },
  { id: 5, name: "Saladas & Vegetariano", icon: "🥗", count: 21 },
  { id: 6, name: "Bebidas & Drinques", icon: "🍹", count: 9 },
];

export const testimonials: Testimonial[] = [
  { id: 1, name: "Mariana Costa", text: "As receitas são incríveis e os produtos têm uma qualidade absurda. O azeite arbequina transformou minhas preparações!", rating: 5, avatar: "MC" },
  { id: 2, name: "Fernanda Lima", text: "Finalmente encontrei um espaço que combina receitas reais com produtos que de fato usamos no dia a dia. Recomendo muito!", rating: 5, avatar: "FL" },
  { id: 3, name: "Beatriz Mendes", text: "O bolo de limão virou o favorito da família. A calda com extrato de baunilha é um diferencial incrível.", rating: 5, avatar: "BM" },
];
