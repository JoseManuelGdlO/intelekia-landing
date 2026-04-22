import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { FormEvent } from "react";

const Contact = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("¡Gracias! Te contactaremos en menos de 24h.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(0_0%_100%/0.15),transparent_50%)]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              ¿Listo para transformar tu negocio con IA?
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/90 max-w-lg">
              Agenda una consultoría gratuita de 30 minutos. Analizamos tu caso y te
              proponemos los primeros pasos hacia una organización inteligente.
            </p>

            <div className="mt-8 space-y-4">
              <a href="mailto:direccion@inelekia.cloud" className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-smooth">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                direccion@inelekia.cloud
              </a>
              <a href="https://wa.me/526182327598" className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-smooth">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                WhatsApp directo: 618 232 7598
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                Latinoamérica · 100% remoto
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-card rounded-3xl p-8 shadow-brand space-y-4"
          >
            <h3 className="text-2xl font-bold text-secondary">Cuéntanos de tu proyecto</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-secondary">Nombre</label>
                <Input required placeholder="Tu nombre" className="mt-1 rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium text-secondary">Empresa</label>
                <Input required placeholder="Tu empresa" className="mt-1 rounded-xl" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-secondary">Email</label>
              <Input required type="email" placeholder="tu@empresa.com" className="mt-1 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-medium text-secondary">Mensaje</label>
              <Textarea required rows={4} placeholder="¿En qué podemos ayudarte?" className="mt-1 rounded-xl resize-none" />
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-brand hover:opacity-90 rounded-xl text-base">
              Enviar mensaje <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
