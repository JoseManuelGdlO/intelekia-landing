const clientsRow1 = [
  "Miaumiau",
  "Saru Visass",
  "Visas Transelite",
  "Obras y Armados DGO",
  "Odontopediatra Xochitl G de la O",
];
const clientsRow2 = [
  "Odontopediatra Yomaira Garcia Flores",
  "Mobifest DGO",
  "Armonii MX",
  "Hanni Depilaciones Qto",
  "EnarMx Simulador Enarm"
];

const stats = [
  { n: "+20", l: "clientes activos" },
  { n: "+30", l: "proyectos entregados" },
  { n: "98%", l: "de satisfacción" },
];

const LogoPill = ({ name }: { name: string }) => (
  <div className="shrink-0 mx-4 px-8 py-5 rounded-2xl bg-card border border-border shadow-card flex items-center justify-center min-w-[180px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:border-primary/40 transition-smooth">
    <span className="font-display font-semibold text-lg text-secondary whitespace-nowrap">{name}</span>
  </div>
);

const Clients = () => {
  return (
    <section id="clientes" className="py-20 md:py-28 bg-muted/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Clientes</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-secondary">
            Empresas que confían en <span className="text-gradient-brand">Intelekia</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Hemos acompañado a organizaciones de distintas industrias en su camino hacia la IA.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="marquee-pause space-y-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee-left">
              {[...clientsRow1, ...clientsRow1].map((c, i) => (
                <LogoPill key={`r1-${i}`} name={c} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee-right">
              {[...clientsRow2, ...clientsRow2].map((c, i) => (
                <LogoPill key={`r2-${i}`} name={c} />
              ))}
            </div>
          </div>
        </div>

        {/* Métricas */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="text-center p-6 rounded-2xl bg-card border border-border shadow-card">
              <div className="text-4xl md:text-5xl font-bold text-gradient-brand font-display">{s.n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
