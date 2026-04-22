import { Rocket, Target, HeartHandshake } from "lucide-react";

const pillars = [
  { icon: Rocket, title: "Innovación", desc: "Aplicamos las últimas tecnologías de IA con criterio y propósito." },
  { icon: Target, title: "Resultados", desc: "Cada proyecto se mide por su impacto real en el negocio." },
  { icon: HeartHandshake, title: "Cercanía", desc: "Trabajamos como una extensión de tu equipo, no como proveedor." },
];

const team = [
  { name: "Jose Manuel G de la O", role: "CEO y Director de Tecnologia y Consultoria" },
  { name: "Delsy Felix Ortiz", role: "CEO y Directora de Capital Humano y Finanzas" },
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-muted/40">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">Nosotros</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 text-secondary">
              Somos un equipo apasionado por la <span className="text-gradient-brand">IA aplicada</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              En Intelekia ayudamos a empresas a tomar decisiones más brillantes con software inteligente.
              Combinamos experiencia técnica profunda con una mirada estratégica del negocio para entregar
              soluciones que generan valor desde el día uno.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-brand transition-smooth">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-secondary">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-secondary mb-8">Liderazgo estratégico de Intelekia</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {team.map((m) => (
              <div key={m.name} className="text-center group">
                <div className="aspect-square rounded-2xl bg-gradient-brand opacity-90 group-hover:opacity-100 shadow-card group-hover:shadow-brand transition-smooth flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground font-display">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div className="mt-4 font-semibold text-secondary">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
