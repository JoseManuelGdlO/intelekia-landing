import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const AccountDeletionAutobot = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-3xl py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">
          Formulario de eliminación de cuenta (Autobot)
        </h1>
        <p className="mt-4 text-muted-foreground">
          Completa este formulario para solicitar la eliminación de tu cuenta y datos asociados de
          Autobot. Nuestro equipo validará la información y te contactará por correo electrónico.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium">
              Nombre completo
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Correo asociado a la cuenta
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Teléfono (opcional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="+52..."
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="reason" className="text-sm font-medium">
              Motivo de la solicitud
            </label>
            <textarea
              id="reason"
              name="reason"
              required
              rows={5}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Cuéntanos brevemente el motivo de la eliminación."
            />
          </div>

          <div className="flex items-start gap-2">
            <input id="confirm" name="confirm" type="checkbox" required className="mt-1" />
            <label htmlFor="confirm" className="text-sm text-muted-foreground">
              Confirmo que soy titular de la cuenta y solicito voluntariamente la eliminación de mi
              cuenta y datos, sujeto a los periodos legales de retención aplicables.
            </label>
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-smooth"
          >
            Enviar solicitud
          </button>
        </form>

        {sent && (
          <div className="mt-6 rounded-md border border-primary/30 bg-primary/10 p-4 text-sm text-foreground">
            Solicitud enviada correctamente. Te contactaremos para confirmar la eliminación.
          </div>
        )}

        <p className="mt-8 text-sm text-muted-foreground">
          También puedes solicitar la eliminación por correo en{" "}
          <a
            href="mailto:privacidad@tudominio.com?subject=Solicitud%20de%20eliminacion%20Autobot"
            className="text-primary underline hover:text-primary/90"
          >
            privacidad@tudominio.com
          </a>
          .
        </p>

        <div className="mt-12">
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AccountDeletionAutobot;
