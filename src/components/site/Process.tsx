import isotipo from "@/assets/intelekia-isotipo.png";

const steps = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos tu negocio, datos y oportunidades de IA." },
  { n: "02", title: "Estrategia", desc: "Definimos roadmap, casos de uso y métricas de éxito." },
  { n: "03", title: "Implementación", desc: "Construimos y desplegamos la solución de forma ágil." },
  { n: "04", title: "Acompañamiento", desc: "Iteramos, escalamos y formamos a tu equipo." },
];

const Process = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Proceso</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-secondary">
            Cómo <span className="text-gradient-brand">trabajamos</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />
          {steps.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="relative mx-auto w-16 h-16 rounded-full bg-gradient-brand shadow-brand flex items-center justify-center">
                <img src={isotipo} alt="" className="w-9 h-9 brightness-0 invert" />
              </div>
              <div className="mt-5 text-sm font-semibold text-primary">{s.n}</div>
              <h3 className="mt-1 text-xl font-bold text-secondary font-display">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
