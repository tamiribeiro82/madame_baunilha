import SectionHeader from "@/components/SectionHeader";

const AboutPage = () => (
  <>
    <div className="pt-[72px] bg-offwhite min-h-[400px] flex items-center">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center py-20">
          <div>
            <span className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-3 block">Nossa história</span>
            <h1 className="font-display text-[clamp(28px,4vw,46px)] font-bold text-charcoal mb-6">
              Nascemos da paixão por cozinhar bem e com intenção
            </h1>
            <p className="text-base text-muted-foreground leading-[1.8] mb-5">
              Madame Baunilha surgiu da crença de que a cozinha é um dos lugares mais amorosos da casa.
              Que um prato bem feito conecta pessoas, desperta memórias e transforma o cotidiano em algo especial.
            </p>
            <p className="text-base text-muted-foreground leading-[1.8]">
              Aqui você encontra receitas testadas com carinho e produtos culinários selecionados com rigor,
              para que cada refeição seja uma experiência que vale a pena.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(44,36,33,0.15)]">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              alt="Nossa cozinha"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: "🌿", title: "Ingredientes com propósito", text: "Cada produto da nossa loja é cuidadosamente escolhido por qualidade, origem e impacto real na receita." },
            { icon: "📖", title: "Receitas que funcionam", text: "Testamos cada receita diversas vezes antes de publicar. Queremos que o seu resultado seja perfeito." },
            { icon: "💛", title: "Comunidade apaixonada", text: "Mais de 15 mil pessoas que amam cozinhar e descobrir novas formas de tornar a comida uma arte." },
          ].map((item) => (
            <div key={item.title} className="text-center px-8 py-10 bg-card rounded-3xl shadow-[0_2px_20px_rgba(44,36,33,0.06)]">
              <div className="text-5xl mb-5">{item.icon}</div>
              <h3 className="font-display text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[32px] p-[60px] text-center" style={{ background: "linear-gradient(135deg, hsl(var(--sage)), hsl(var(--brown)))", color: "white" }}>
          <span className="font-body text-[11px] font-semibold tracking-[3px] uppercase block mb-3" style={{ color: "#A8D5D3" }}>Nossa missão</span>
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-bold max-w-[600px] mx-auto mb-6 leading-tight" style={{ color: "white" }}>
            "Fazer da cozinha um espaço de criatividade, afeto e prazer genuíno."
          </h2>
          <p className="text-base max-w-[500px] mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Cada receita e cada produto que criamos carrega essa intenção.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
