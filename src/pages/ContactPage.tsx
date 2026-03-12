import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section className="pt-[120px] py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-20 items-start">
          <div>
            <span className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-primary mb-3 block">Fale conosco</span>
            <h1 className="font-display text-[clamp(28px,4vw,46px)] font-bold text-charcoal mb-5">Adoramos conversar sobre comida</h1>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Dúvidas sobre pedidos, sugestões de receitas ou parcerias? Estamos aqui!
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: "✉️", label: "E-mail", value: "oi@madamebaunilha.com.br" },
                { icon: "📍", label: "Localização", value: "São Paulo, SP" },
                { icon: "📸", label: "Instagram", value: "@madamebaunilha" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-offwhite rounded-xl flex items-center justify-center text-xl shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <div className="mt-8 rounded-2xl p-5 flex items-center gap-4" style={{ background: "#E8F5E9" }}>
              <span className="text-[32px]">💬</span>
              <div>
                <div className="font-semibold mb-1" style={{ color: "#2E7D32" }}>WhatsApp</div>
                <div className="text-sm" style={{ color: "#388E3C" }}>Atendimento de seg. a sex. das 9h às 18h</div>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 rounded-full px-4 py-1.5 text-[13px] font-semibold"
                  style={{ background: "#25D366", color: "white" }}
                >
                  Chamar no WhatsApp →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-[28px] p-12 shadow-[0_4px_40px_rgba(44,36,33,0.08)]">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-[64px] mb-5">🎉</div>
                <h3 className="font-display text-2xl mb-3">Mensagem enviada!</h3>
                <p className="text-muted-foreground">Retornamos em até 24 horas úteis.</p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl mb-8">Envie sua mensagem</h2>
                <div className="flex flex-col gap-5">
                  {[
                    { label: "Seu nome", key: "name" as const, type: "text", placeholder: "Maria Silva" },
                    { label: "E-mail", key: "email" as const, type: "email", placeholder: "maria@email.com" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-[13px] font-semibold text-charcoal mb-2 tracking-wide">{field.label}</label>
                      <input
                        type={field.type}
                        value={form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        className="w-full px-[18px] py-3.5 border-[1.5px] border-beige rounded-xl text-sm font-body outline-none transition-colors bg-cream text-charcoal focus:border-primary"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-[13px] font-semibold text-charcoal mb-2">Mensagem</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Escreva sua mensagem aqui..."
                      rows={5}
                      className="w-full px-[18px] py-3.5 border-[1.5px] border-beige rounded-xl text-sm font-body outline-none resize-y bg-cream text-charcoal focus:border-primary"
                    />
                  </div>
                  <button
                    onClick={() => form.name && form.email && form.message && setSent(true)}
                    className="bg-primary text-primary-foreground rounded-full py-4 text-sm font-semibold tracking-wide transition-all border-none cursor-pointer justify-center inline-flex items-center gap-2"
                  >
                    Enviar mensagem ✦
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
