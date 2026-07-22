import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const apps = [
  "AutoBot",
  "EventivApp",
  "EnarMx Simulador Enarm",
  "Mobifest",
  "Miaumiau",
  "Saru Visas",
  "Otra app de Intelekia",
];

const faqs = [
  {
    q: "¿Cuánto tarda la respuesta de soporte?",
    a: "Respondemos en un máximo de 24 horas hábiles (lunes a viernes). En WhatsApp suele ser más rápido en horario de atención.",
  },
  {
    q: "¿Cómo reporto un error en una app?",
    a: "Indica el nombre de la app, una descripción del problema, capturas si es posible y el correo o usuario con el que inicias sesión. Puedes usar el formulario de esta página, el email o WhatsApp.",
  },
  {
    q: "¿Cómo restablezco mi contraseña?",
    a: "Usa la opción “Olvidé mi contraseña” dentro de la aplicación. Si no recibes el correo, revisa spam o contáctanos indicando la app y tu email registrado.",
  },
  {
    q: "¿Cómo solicito eliminar mi cuenta o mis datos?",
    a: "Consulta la página de eliminación de cuenta correspondiente a tu app. Para apps de Intelekia en general: /eliminacion-de-cuenta. Para Autobot: /eliminacion-autobot.",
  },
  {
    q: "¿Esta página aplica a todas las apps?",
    a: "Sí. Este centro de soporte cubre el sitio web y las aplicaciones publicadas o mantenidas por Intelekia que enlacen a esta URL.",
  },
];

const Support = () => {
  const [app, setApp] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") || "").trim();
    const email = String(data.get("email") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();
    const appName = app || "No especificada";

    if (!app) {
      toast.error("Selecciona la app relacionada con tu consulta.");
      return;
    }

    const subject = encodeURIComponent(`[Soporte] ${appName} — ${nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmail: ${email}\nApp: ${appName}\n\nMensaje:\n${mensaje}`,
    );

    window.location.href = `mailto:direccion@intelekia.cloud?subject=${subject}&body=${body}`;
    toast.success("Abriendo tu correo para enviar la solicitud de soporte.");
    form.reset();
    setApp("");
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-4xl py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">Soporte Intelekia</h1>
        <p className="mt-4 text-muted-foreground">
          Centro de ayuda para el sitio web y todas las aplicaciones de Intelekia. Aquí
          puedes contactarnos, consultar preguntas frecuentes o solicitar asistencia
          técnica.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Canales de contacto</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="mailto:direccion@intelekia.cloud?subject=Soporte%20Intelekia"
              className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card hover:border-primary/40 transition-smooth"
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-secondary">Email</div>
                <div className="text-sm text-muted-foreground break-all">
                  direccion@intelekia.cloud
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/526182327598"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card hover:border-primary/40 transition-smooth"
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-secondary">WhatsApp</div>
                <div className="text-sm text-muted-foreground">618 232 7598</div>
              </div>
            </a>
            <div className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-secondary">Horario</div>
                <div className="text-sm text-muted-foreground">
                  Lun–Vie · 9:00–18:00 (hora México)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Apps y productos cubiertos</h2>
          <p className="text-muted-foreground">
            Este soporte aplica a las aplicaciones y servicios publicados o mantenidos por
            Intelekia, entre ellos:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
            {apps.map((name) => (
              <li key={name} className="flex gap-2">
                <span className="text-primary font-bold">·</span>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Preguntas frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Enviar solicitud de soporte</h2>
          <p className="text-muted-foreground">
            Completa el formulario y se abrirá tu cliente de correo con los datos listos
            para enviar.
          </p>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 md:p-8 space-y-4 shadow-card"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="text-sm font-medium text-secondary">
                  Nombre
                </label>
                <Input
                  id="nombre"
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  className="mt-1 rounded-xl"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-secondary">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="mt-1 rounded-xl"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-secondary">App</label>
              <Select value={app} onValueChange={setApp} required>
                <SelectTrigger className="mt-1 rounded-xl">
                  <SelectValue placeholder="Selecciona la app" />
                </SelectTrigger>
                <SelectContent>
                  {apps.map((name) => (
                    <SelectItem key={name} value={name}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="mensaje" className="text-sm font-medium text-secondary">
                Mensaje
              </label>
              <Textarea
                id="mensaje"
                name="mensaje"
                required
                rows={4}
                placeholder="Describe el problema o tu consulta"
                className="mt-1 rounded-xl resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-brand hover:opacity-90 rounded-xl text-base"
            >
              Enviar por correo
            </Button>
          </form>
        </section>

        <section className="mt-10 space-y-2 text-sm text-muted-foreground">
          <p>
            Políticas relacionadas:{" "}
            <Link to="/privacidad" className="text-primary underline hover:text-primary/90">
              Privacidad
            </Link>
            {" · "}
            <Link
              to="/eliminacion-de-cuenta"
              className="text-primary underline hover:text-primary/90"
            >
              Eliminación de cuenta
            </Link>
            {" · "}
            <Link
              to="/terminos-y-condiciones"
              className="text-primary underline hover:text-primary/90"
            >
              Términos
            </Link>
          </p>
        </section>

        <div className="mt-12">
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Support;
