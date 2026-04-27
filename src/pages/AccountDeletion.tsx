import { Link } from "react-router-dom";

const AccountDeletion = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-4xl py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">
          Eliminacion de cuenta y datos
        </h1>
        <p className="mt-4 text-muted-foreground">
          Esta pagina aplica a las aplicaciones y servicios de Intelekia publicados por
          Intelekia. Aqui explicamos como solicitar la eliminacion de cuenta y el tratamiento
          de datos asociado.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">URL de eliminacion de cuenta</h2>
          <p className="text-muted-foreground">
            Para solicitar la eliminacion de tu cuenta y datos asociados, escribe a{" "}
            <a
              href="mailto:direccion@intelekia.cloud?subject=Solicitud%20de%20eliminacion%20de%20cuenta"
              className="text-primary underline hover:text-primary/90"
            >
              direccion@intelekia.cloud
            </a>{" "}
            desde el correo registrado en la cuenta.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Pasos para solicitar la eliminacion</h2>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li>Envia un correo con el asunto: "Solicitud de eliminacion de cuenta".</li>
            <li>Incluye tu nombre y el correo asociado a tu cuenta.</li>
            <li>Recibiras confirmacion de identidad y del inicio del proceso.</li>
            <li>
              Una vez verificada la solicitud, procederemos a eliminar la cuenta y los datos
              indicados en esta politica.
            </li>
          </ol>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Datos que se eliminan</h2>
          <p className="text-muted-foreground">
            Se eliminan los datos de perfil de cuenta, datos operativos asociados al uso normal
            de la aplicacion y datos de contacto vinculados a esa cuenta.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Datos que pueden conservarse temporalmente</h2>
          <p className="text-muted-foreground">
            Podemos conservar registros tecnicos minimos y comprobantes necesarios por
            obligaciones legales, prevencion de fraude o seguridad, durante un plazo adicional
            maximo de 30 dias despues de procesar la eliminacion, salvo que la ley exija un
            periodo mayor.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Eliminacion por inactividad</h2>
          <p className="text-muted-foreground">
            Si una cuenta no se conecta durante 90 dias continuos, Intelekia puede programar la
            eliminacion automatica de la cuenta y sus datos asociados.
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

export default AccountDeletion;
