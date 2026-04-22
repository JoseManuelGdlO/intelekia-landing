import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-4xl py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">Terminos y Condiciones</h1>
        <p className="mt-4 text-muted-foreground">
          Estos Terminos y Condiciones regulan el acceso y uso de este sitio web y de las
          aplicaciones que remitan a este documento como marco legal base.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">1. Aceptacion de los terminos</h2>
          <p className="text-muted-foreground">
            Al utilizar este sitio o cualquier aplicacion vinculada, el usuario acepta cumplir
            con estos terminos y con la normativa aplicable.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">2. Uso permitido</h2>
          <p className="text-muted-foreground">
            El usuario se compromete a usar los servicios de forma licita, sin afectar su
            funcionamiento ni vulnerar derechos de terceros.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">3. Propiedad intelectual</h2>
          <p className="text-muted-foreground">
            Todos los contenidos, marcas, disenos y materiales del sitio pertenecen a Intelekia
            o a sus respectivos titulares, salvo indicacion expresa en contrario.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">4. Limitacion de responsabilidad</h2>
          <p className="text-muted-foreground">
            Intelekia no garantiza disponibilidad ininterrumpida y no sera responsable por danos
            indirectos derivados del uso o imposibilidad de uso de los servicios.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">5. Modificaciones</h2>
          <p className="text-muted-foreground">
            Podemos actualizar estos terminos en cualquier momento. Las versiones vigentes se
            publicaran en esta pagina.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">6. Ley aplicable</h2>
          <p className="text-muted-foreground">
            Estos terminos se interpretan conforme a la legislacion aplicable segun la operacion
            comercial de Intelekia y los acuerdos con sus clientes.
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

export default TermsAndConditions;
