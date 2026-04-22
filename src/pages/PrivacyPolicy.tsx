import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-4xl py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">Politica de Privacidad</h1>
        <p className="mt-4 text-muted-foreground">
          Esta Politica de Privacidad describe como Intelekia recopila, usa y protege la
          informacion personal de los usuarios en este sitio web y en las aplicaciones que
          enlacen a este documento.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">1. Informacion que recopilamos</h2>
          <p className="text-muted-foreground">
            Podemos recopilar datos de contacto, informacion de uso del sitio, datos enviados
            a traves de formularios y cualquier otra informacion necesaria para prestar nuestros
            servicios.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">2. Uso de la informacion</h2>
          <p className="text-muted-foreground">
            Utilizamos los datos para responder consultas, mejorar nuestros productos y servicios,
            brindar soporte, analizar el uso de la plataforma y cumplir obligaciones legales.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">3. Comparticion de datos</h2>
          <p className="text-muted-foreground">
            No vendemos informacion personal. Solo compartimos datos con proveedores y aliados
            cuando sea necesario para operar los servicios o por requerimiento legal.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">4. Seguridad</h2>
          <p className="text-muted-foreground">
            Aplicamos medidas tecnicas y organizativas razonables para proteger la informacion
            personal frente a accesos no autorizados, perdida o alteracion.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">5. Derechos de los usuarios</h2>
          <p className="text-muted-foreground">
            Los usuarios pueden solicitar acceso, correccion o eliminacion de sus datos personales,
            sujeto a la normativa aplicable.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">6. Actualizaciones</h2>
          <p className="text-muted-foreground">
            Esta politica puede actualizarse periodicamente. Publicaremos los cambios en esta misma
            pagina con su fecha de vigencia.
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

export default PrivacyPolicy;
