import armoniiLogo from "@/assets/logos/armonii.jpeg";
import tloLogo from "@/assets/logos/TLO.jpeg";
import autobotLogo from "@/assets/logos/autobot.png";
import asertoursLogo from "@/assets/logos/asertours.jpg";
import enarmxLogo from "@/assets/logos/enarmx.png";
import eventivaLogo from "@/assets/logos/Eventiva.png";
import hanniLogo from "@/assets/logos/hanni.png";
import miaumiuauLogo from "@/assets/logos/miaumiuau.jpeg";
import mobifestLogo from "@/assets/logos/mobifest.png";
import obrasyarmadosLogo from "@/assets/logos/obrasyarmados.png";
import odontopediatraXoxLogo from "@/assets/logos/odontopediatraxox.png";
import odontopediatraYomairaLogo from "@/assets/logos/odontopediatrayomaira.jpg";
import saruvisasLogo from "@/assets/logos/saruvisas.jpeg";
import transeliteLogo from "@/assets/logos/transelite.png";

type Client = {
  name: string;
  logo: string;
};

const clients: Client[] = [
  { name: "Miaumiuau", logo: miaumiuauLogo },
  { name: "Saru Visas", logo: saruvisasLogo },
  { name: "Visas Transelite", logo: transeliteLogo },
  { name: "Obras y Armados DGO", logo: obrasyarmadosLogo },
  { name: "Odontopediatra Xochitl G de la O", logo: odontopediatraXoxLogo },
  { name: "Odontopediatra Yomaira Garcia Flores", logo: odontopediatraYomairaLogo },
  { name: "Mobifest DGO", logo: mobifestLogo },
  { name: "Armonii MX", logo: armoniiLogo },
  { name: "Hanni Depilaciones Qto", logo: hanniLogo },
  { name: "EnarMx Simulador Enarm", logo: enarmxLogo },
  { name: "TLO Transportes Ligeros de Occidente GDL", logo: tloLogo },
  { name: "EventivApp", logo: eventivaLogo },
  { name: "AutoBot", logo: autobotLogo },
  { name: "AserTours", logo: asertoursLogo },
];

const midpoint = Math.ceil(clients.length / 2);
const clientsRow1 = clients.slice(0, midpoint);
const clientsRow2 = clients.slice(midpoint);

const stats = [
  { n: "+20", l: "clientes activos" },
  { n: "+30", l: "proyectos entregados" },
  { n: "98%", l: "de satisfacción" },
];

const LogoPill = ({ client }: { client: Client }) => (
  <div className="logo-pill shrink-0 mx-4 px-6 py-4 rounded-2xl bg-card border border-border shadow-card flex items-center gap-4 min-w-[280px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:border-primary/40 transition-smooth">
    <img
      src={client.logo}
      alt={`Logo de ${client.name}`}
      className="h-12 w-12 rounded-lg object-contain bg-white p-1"
      loading="eager"
    />
    <span className="font-display font-semibold text-base text-secondary leading-tight">{client.name}</span>
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
        <div className="space-y-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="overflow-hidden">
            <div className="marquee-track flex w-max animate-marquee-left">
              {[...clientsRow1, ...clientsRow1].map((client, i) => (
                <LogoPill key={`r1-${i}`} client={client} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="marquee-track flex w-max animate-marquee-right">
              {[...clientsRow2, ...clientsRow2].map((client, i) => (
                <LogoPill key={`r2-${i}`} client={client} />
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
