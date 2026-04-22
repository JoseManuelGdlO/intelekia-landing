import { TrendingUp } from "lucide-react";

const cases = [
  {
    industry: "Miaumiau - Venta de arena para gato",
    challenge:
      "La operación tenía procesos manuales que consumían tiempo, generaban errores y dificultaban la toma de decisiones.",
    solution:
      "Se implementó un software de gestión que automatiza procesos clave y centraliza datos para seguimiento en tiempo real.",
    impacts: [
      "Eficiencia: Se redujo en un 35% el tiempo de gestión de procesos clave.",
      "Costos: Se logró una disminución del 20% en costos operativos mensuales.",
      "Productividad: El equipo procesa 1.8x más tareas con la misma capacidad.",
      "Calidad: Se redujeron los errores operativos en un 40%.",
      "Ventas/ingresos: Se incrementó la conversión comercial en un 15%.",
    ],
    result: "+35%",
    metric: "eficiencia operativa",
  },
  {
    industry: "Saru Visas",
    challenge:
      "El proceso comercial tenía seguimiento manual, tiempos altos de respuesta y poca trazabilidad del embudo.",
    solution:
      "Este software optimiza el proceso comercial de punta a punta: reduce tiempos operativos con automatización de mensajes, mejora la experiencia del cliente con respuestas más consistentes y aumenta la conversión al dar trazabilidad completa del embudo en tiempo real.",
    impacts: [
      "Eficiencia operativa: Reducción del tiempo de gestión manual entre 30% y 50%.",
      "Velocidad de atención: Disminución del tiempo de primera respuesta en 40%+.",
      "Conversión comercial: Incremento de leads calificados/conversión entre 10% y 20%.",
      "Control del negocio: Mayor visibilidad del pipeline con métricas en tiempo real para decisiones semanales.",
    ],
    result: "+40%",
    metric: "velocidad de atención",
  },
  {
    industry: "Mobifest",
    challenge:
      "La operación inmobiliaria requería coordinación manual entre ventas, cobranza, gastos y seguimiento de equipos, con baja visibilidad en tiempo real.",
    solution:
      "La plataforma digitaliza la operación inmobiliaria end-to-end, integrando ventas, cobranza, gastos y seguimiento de equipos en tiempo real. Esto mejora la visibilidad del negocio, reduce tiempos de respuesta y permite decisiones basadas en datos.",
    impacts: [
      "Tiempo de respuesta operativo: Medición antes/después en asignaciones y seguimiento de agentes.",
      "Productividad del equipo: trackedWorkers y activeConnections como señal de adopción y actividad real.",
      "Calidad del dato: Reducción de incidencias por payload inválido o no autorizado (authFailures y errores de validación).",
      "Continuidad comercial: Volumen de operaciones registradas (clientes, pagos, cotizaciones) por semana/mes.",
      "Eficiencia de gestión: Tiempo de cierre de tareas/eventos y reducción de reprocesos manuales.",
    ],
    result: "End-to-end",
    metric: "operación inmobiliaria digitalizada",
  },
];

const Cases = () => {
  return (
    <section id="casos" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Casos de éxito</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-secondary">
            Resultados que <span className="text-gradient-brand">hablan por sí solos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {cases.map((c) => (
            <article
              key={c.industry}
              className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-brand hover:-translate-y-1 transition-smooth flex flex-col"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold w-fit">
                {c.industry}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-secondary">Reto</h3>
              <p className="text-muted-foreground">{c.challenge}</p>
              <h3 className="mt-4 text-lg font-semibold text-secondary">Solución</h3>
              <p className="text-muted-foreground">{c.solution}</p>
              <h3 className="mt-4 text-lg font-semibold text-secondary">Impacto</h3>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                {c.impacts.map((impact) => (
                  <li key={impact} className="flex gap-2">
                    <span className="text-primary font-bold">-</span>
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-border flex items-end gap-3">
                <div>
                  <div className="text-5xl font-bold text-gradient-brand font-display leading-none">{c.result}</div>
                  <div className="text-sm text-muted-foreground mt-1">{c.metric}</div>
                </div>
                <TrendingUp className="h-6 w-6 text-primary mb-1 ml-auto" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
