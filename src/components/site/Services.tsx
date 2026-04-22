import { Bot, Workflow, BarChart3, Cpu, Lightbulb, GraduationCap } from "lucide-react";

const services = [
  { icon: Bot, title: "Agentes de IA personalizados", desc: "Asistentes virtuales y agentes autónomos entrenados con tu información para automatizar tareas críticas." },
  { icon: Workflow, title: "Automatización inteligente", desc: "RPA combinado con IA para eliminar trabajo repetitivo y optimizar tus procesos end-to-end." },
  { icon: BarChart3, title: "Analítica de datos & BI", desc: "Dashboards y modelos predictivos que convierten tus datos en decisiones accionables." },
  { icon: Cpu, title: "Integración de LLMs", desc: "Conectamos modelos como GPT, Claude o Gemini a tus sistemas de forma segura y escalable." },
  { icon: Lightbulb, title: "Consultoría estratégica en IA", desc: "Diagnóstico, roadmap y casos de uso para implementar IA con ROI claro en tu industria." },
  { icon: GraduationCap, title: "Capacitación & change management", desc: "Formamos a tu equipo para adoptar la IA con confianza y sostener la transformación." },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Servicios</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-secondary">
            Soluciones de IA <span className="text-gradient-brand">end-to-end</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Acompañamos cada etapa: del diagnóstico al despliegue productivo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group p-7 rounded-2xl bg-card border border-border shadow-card hover:shadow-brand hover:-translate-y-1 hover:border-primary/30 transition-smooth"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-secondary">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
