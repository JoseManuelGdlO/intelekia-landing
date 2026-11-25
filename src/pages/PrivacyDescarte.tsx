import { Link } from "react-router-dom";

const PrivacyDescarte = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-4xl py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">
          Política de privacidad
        </h1>

        <div className="mt-10 space-y-6 text-muted-foreground">
          <p>
            Descarte, de Intelekia, te ayuda a revisar las fotos que ya están en tu teléfono.
          </p>
          <p>
            Las fotos y los videos se leen en el dispositivo para que decidas cuáles conservar o
            eliminar. No subimos tu galería a nuestros servidores.
          </p>
          <p>
            Si creas una cuenta, guardamos el identificador, el nombre, el correo y el estado de la
            suscripción. Puedes registrarte con correo, con Google o con Apple. Apple te deja
            ocultar tu correo.
          </p>
          <p>
            El pago de Descarte Pro lo cobra Apple. No vemos los datos de tu tarjeta. Sabemos solo
            si la suscripción está activa para quitar los anuncios.
          </p>
          <p>
            Sin Descarte Pro, Google AdMob puede mostrar anuncios. La suscripción los quita. AdMob
            no se usa para identificar tu galería.
          </p>
          <p>
            En Ajustes, Eliminar cuenta borra el acceso y el perfil de Descarte. Las fotos no se
            borran del teléfono con esa acción.
          </p>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PrivacyDescarte;
