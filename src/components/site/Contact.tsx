import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { services } from "./Services";

type ContactFormValues = {
  nombre: string;
  empresa: string;
  email: string;
  servicios: string[];
  mensaje: string;
  aceptaPrivacidad: boolean;
};

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;

const Contact = () => {
  const serviceTitles = useMemo(() => services.map((s) => s.title), []);
  const serviceSchema = useMemo(
    () =>
      z
        .string()
        .refine((v) => serviceTitles.includes(v), { message: "Servicio inválido" }),
    [serviceTitles],
  );

  const schema = useMemo(
    () =>
      z.object({
        nombre: z.string().min(1, { message: "Ingresa tu nombre" }),
        empresa: z.string().min(1, { message: "Ingresa tu empresa" }),
        email: z.string().email({ message: "Ingresa un email válido" }),
        servicios: z.array(serviceSchema).min(1, { message: "Elige al menos un servicio" }),
        mensaje: z.string().min(10, { message: "Cuéntanos un poco más (mín. 10 caracteres)" }),
        aceptaPrivacidad: z.literal(true, { message: "Debes aceptar la política de privacidad" }),
      }),
    [serviceSchema],
  );

  const [step, setStep] = useState<1 | 2>(1);
  const [isSending, setIsSending] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      servicios: [],
      mensaje: "",
      aceptaPrivacidad: false,
    },
    mode: "onTouched",
  });

  const { control, handleSubmit, trigger, reset } = form;

  const progressValue = step === 1 ? 50 : 100;

  const goNext = async () => {
    const ok = await trigger(["nombre", "empresa", "email"]);
    if (!ok) return;
    setStep(2);
  };

  const goBack = () => setStep(1);

  const onFinalSubmit = async (values: ContactFormValues) => {
    const resolveFormspreeEndpoint = () => {
      const rawEndpoint = FORMSPREE_ENDPOINT?.trim();
      if (rawEndpoint) {
        // Permite configurar:
        // - endpoint completo: https://formspree.io/f/xxxx
        // - o solo el path/id: f/xxxx o xxxx
        if (/^https?:\/\//i.test(rawEndpoint)) return rawEndpoint;
        const id = rawEndpoint.replace(/^f\//i, "").replace(/^\/f\//i, "").trim();
        return id ? `https://formspree.io/f/${id}` : undefined;
      }

      const formId = FORMSPREE_FORM_ID?.trim();
      return formId ? `https://formspree.io/f/${formId}` : undefined;
    };

    const endpoint = resolveFormspreeEndpoint();

    if (!endpoint) {
      toast.error("Configura Formspree: define `VITE_FORMSPREE_ENDPOINT` o `VITE_FORMSPREE_FORM_ID`.");
      return;
    }

    try {
      setIsSending(true);

      const formData = new FormData();
      const servicesText = values.servicios.join(", ");
      const privacyAccepted = values.aceptaPrivacidad ? "true" : "false";

      // Envío “estándar” para Formspree (para minimizar problemas de mapeo de campos).
      formData.append("name", values.nombre);
      formData.append("company", values.empresa);
      formData.append("email", values.email);
      formData.append("services", servicesText);
      formData.append("message", values.mensaje);
      formData.append("accept_privacy", privacyAccepted);

      // Compatibilidad con los nombres en español que ya se usaban en el formulario.
      formData.append("nombre", values.nombre);
      formData.append("empresa", values.empresa);
      formData.append("servicios", servicesText);
      formData.append("mensaje", values.mensaje);
      formData.append("acepta_privacidad", privacyAccepted);
      formData.append("privacy_accepted", privacyAccepted);
      formData.append("_subject", `Consulta de consultoría - ${values.nombre}`);
      formData.append("_replyto", values.email);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
        mode: "cors",
      });

      if (!response.ok) {
        const maybeText = await response.text().catch(() => "");
        throw new Error(maybeText || `Error HTTP ${response.status}`);
      }

      toast.success("¡Gracias! Te contactaremos en menos de 24h.");
      reset();
      setStep(1);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Ocurrió un error al enviar el formulario.";
      toast.error(message);
    } finally {
      setIsSending(false);
    }
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
              <a
                href="mailto:direccion@intelekia.cloud"
                className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-smooth"
              >
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                direccion@intelekia.cloud
              </a>
              <a
                href="https://wa.me/526182327598"
                className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-smooth"
              >
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

          <Form {...form}>
            <form
              onSubmit={handleSubmit(onFinalSubmit)}
              className="bg-card rounded-3xl p-8 shadow-brand space-y-5"
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-secondary">Cuéntanos de tu proyecto</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Paso {step} de 2</span>
                    <span>{progressValue}%</span>
                  </div>
                  <Progress value={progressValue} />
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary">Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" className="mt-1 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name="empresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary">Empresa</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu empresa" className="mt-1 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="tu@empresa.com"
                            type="email"
                            className="mt-1 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-lg font-semibold text-secondary">Selecciona servicios</h4>
                    </div>
                    <FormField
                      control={control}
                      name="servicios"
                      render={({ field }) => (
                        <FormItem>
                          <div className="grid sm:grid-cols-2 gap-3 mt-3">
                            {services.map((s) => {
                              const checked = field.value?.includes(s.title) ?? false;
                              return (
                                <label
                                  key={s.title}
                                  className="flex items-start gap-3 rounded-xl border border-border bg-background/40 p-3 cursor-pointer hover:border-primary/30 transition-smooth"
                                >
                                  <Checkbox
                                    checked={checked}
                                    onCheckedChange={(v) => {
                                      const current = field.value ?? [];
                                      const next = v === true ? [...current, s.title] : current.filter((x) => x !== s.title);
                                      field.onChange(next);
                                    }}
                                  />
                                  <div>
                                    <div className="text-sm font-medium text-secondary">{s.title}</div>
                                    <div className="text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
                                  </div>
                                </label>
                              );
                            })}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary">Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="¿En qué podemos ayudarte?"
                            className="mt-1 rounded-xl resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="aceptaPrivacidad"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-start gap-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(v) => field.onChange(v === true)}
                              aria-label="Aceptar política de privacidad"
                              className="mt-0.5"
                            />
                          </FormControl>
                          <div className="text-sm text-muted-foreground leading-relaxed">
                            Acepto la{" "}
                            <Link to="/privacidad" className="text-secondary underline underline-offset-2 hover:text-primary transition-smooth">
                              política de privacidad
                            </Link>
                            .
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <div className="flex gap-3 pt-2">
                {step === 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 rounded-xl"
                    onClick={goBack}
                    disabled={isSending}
                  >
                    Atrás
                  </Button>
                )}

                {step === 1 ? (
                  <Button
                    type="button"
                    size="lg"
                    className="w-full bg-gradient-brand hover:opacity-90 rounded-xl text-base flex-1"
                    onClick={goNext}
                    disabled={isSending}
                  >
                    Continuar <Send className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-brand hover:opacity-90 rounded-xl text-base flex-1"
                    disabled={isSending}
                  >
                    {isSending ? "Enviando..." : "Enviar mensaje"} <Send className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
