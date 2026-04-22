import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import isotipo from "@/assets/intelekia-isotipo.png";

const Hero = () => {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-hero">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-[420px] h-[420px] bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-[380px] h-[380px] bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" /> Consultoría en IA
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-secondary">
            Software inteligente,{" "}
            <span className="text-gradient-brand">decisiones brillantes</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            Transformamos tu negocio con Inteligencia Artificial: agentes inteligentes,
            automatización de procesos y analítica avanzada para acelerar tus resultados.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-brand hover:opacity-90 shadow-brand rounded-full text-base px-7">
              <a href="#contacto">Habla con un experto <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-secondary/20 hover:border-primary hover:text-primary text-base px-7">
              <a href="#casos">Ver casos de éxito</a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "+5", l: "años" },
              { n: "+30", l: "proyectos" },
              { n: "+20", l: "clientes" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-bold text-gradient-brand font-display">{s.n}</div>
                <div className="text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-scale-in">
          <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
          <img
            src={isotipo}
            alt="Isotipo Intelekia · cerebro IA"
            className="relative w-72 md:w-96 lg:w-[440px] h-auto animate-float drop-shadow-[0_20px_40px_hsl(var(--primary)/0.3)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
