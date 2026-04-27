import { Link } from "react-router-dom";

const PrivacyAutobot = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-5xl py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">Política de Privacidad</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última actualización: Abril 2026</p>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">1. Introducción</h2>
          <p className="text-muted-foreground">
            Bienvenido a nuestra aplicación de gestión de chatbots para concesionarios de autos.
            Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos
            tu información personal cuando utilizas nuestra aplicación móvil y los servicios
            asociados. Al descargar, instalar y utilizar nuestra aplicación, aceptas las prácticas
            descritas en esta política.
          </p>
          <p className="text-muted-foreground">
            Nos comprometemos a proteger tu privacidad y la de tus clientes. Entendemos la
            importancia de la información que manejas —datos de leads, conversaciones de WhatsApp y
            Facebook Messenger, inventario de vehículos y registros de ventas— y por ello
            implementamos medidas de seguridad rigurosas para garantizar la confidencialidad,
            integridad y disponibilidad de toda la información.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">2. Información que Recopilamos</h2>
          <h3 className="text-lg font-medium">2.1 Información que nos proporcionas directamente</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Información de cuenta: Nombre completo, dirección de correo electrónico, número de
              teléfono, nombre del concesionario o agencia, y contraseña de acceso.
            </li>
            <li>
              Información de perfil profesional: Foto de perfil, cargo o puesto, años de
              experiencia, especialización en marcas o tipos de vehículos, y horarios de atención.
            </li>
            <li>
              Información de tu inventario: Detalles de los vehículos que gestionas, incluyendo
              marca, modelo, año, precio, kilometraje, fotografías, descripciones técnicas, estado
              del vehículo (nuevo, seminuevo, usado), y número de serie o VIN cuando apliquen.
            </li>
            <li>
              Información de leads y clientes: Nombres, números telefónicos, direcciones de correo
              electrónico, historial de interacciones, preferencias de vehículos, presupuestos
              estimados, historial de cotizaciones, registros de visitas al lote, y cualquier otra
              información que los clientes compartan durante las conversaciones.
            </li>
            <li>
              Contenido de conversaciones: Mensajes de texto, archivos multimedia (fotos, videos,
              documentos PDF), ubicaciones compartidas, y registros de llamadas que se gestionen a
              través de nuestros canales integrados (WhatsApp Business, Facebook Messenger, y otros
              canales de mensajería).
            </li>
            <li>
              Configuraciones del chatbot: Respuestas automáticas configuradas, preguntas frecuentes
              (FAQs), promociones activas, flujos de conversación personalizados, y reglas de
              respuesta.
            </li>
          </ul>

          <h3 className="text-lg font-medium">2.2 Información recopilada automáticamente</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Información del dispositivo: Modelo del dispositivo móvil, sistema operativo
              (iOS/Android), versión del sistema operativo, identificadores únicos del dispositivo
              (IDFA en iOS, AAID en Android, donde sea aplicable), y configuraciones de idioma.
            </li>
            <li>
              Información de uso: Patrones de navegación dentro de la app, funciones más utilizadas,
              tiempo de sesión, frecuencia de acceso, interacciones con notificaciones push, y
              métricas de rendimiento de las conversaciones gestionadas.
            </li>
            <li>
              Información de rendimiento: Logs técnicos, reportes de errores, diagnósticos de
              fallos, rendimiento de la app, tiempos de carga, y métricas de consumo de datos
              móviles vs. Wi-Fi.
            </li>
            <li>
              Información de ubicación: Con tu consentimiento explícito, podemos recopilar datos de
              ubicación aproximada o precisa para funcionalidades como la detección del concesionario
              más cercano, registro de visitas al lote, o envío de notificaciones basadas en
              ubicación. Puedes desactivar esta función en cualquier momento desde la configuración
              de tu dispositivo.
            </li>
          </ul>

          <h3 className="text-lg font-medium">2.3 Información de terceros</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              WhatsApp Business API: Cuando conectas tu cuenta de WhatsApp Business, recopilamos los
              mensajes y metadatos de conversación necesarios para operar la bandeja de entrada
              unificada.
            </li>
            <li>
              Facebook Messenger: De manera similar, al conectar Facebook Messenger, recopilamos
              mensajes y datos de perfil público de los usuarios que interactúan con tu página de
              negocio.
            </li>
            <li>
              Proveedores de pago: Si habilitas funcionalidades de pago o facturación dentro de la
              app, recopilamos la información de transacción necesaria a través de nuestros
              procesadores de pago certificados (PCI-DSS compliant). Nosotros no almacenamos números
              completos de tarjetas de crédito.
            </li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">3. Cómo Utilizamos tu Información</h2>
          <h3 className="text-lg font-medium">3.1 Provisión del servicio principal</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Operar y mantener la plataforma de gestión de chatbots para que puedas atender leads y
              clientes de manera eficiente.
            </li>
            <li>Mostrar tu inventario de vehículos a los clientes potenciales a través del chatbot.</li>
            <li>Gestionar la bandeja de entrada unificada de WhatsApp y Facebook Messenger.</li>
            <li>
              Enviar notificaciones push sobre nuevos leads, mensajes pendientes, citas programadas y
              alertas de seguimiento.
            </li>
          </ul>

          <h3 className="text-lg font-medium">3.2 Mejora y personalización</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Analizar patrones de uso para mejorar la interfaz de usuario y la experiencia general.</li>
            <li>
              Personalizar recomendaciones de funcionalidades basadas en tu perfil de vendedor y el
              tamaño de tu operación.
            </li>
            <li>
              Entrenar y mejorar los modelos de respuesta automática del chatbot para que brinden
              respuestas más precisas y útiles.
            </li>
            <li>Realizar pruebas A/B de nuevas funcionalidades con grupos de usuarios seleccionados.</li>
          </ul>

          <h3 className="text-lg font-medium">3.3 Análisis de negocio e inteligencia comercial</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Generar reportes de KPIs (indicadores clave de rendimiento) como leads nuevos, tasas de
              conversión, tiempo promedio de respuesta, productos más consultados, y rendimiento de
              promociones.
            </li>
            <li>
              Identificar tendencias de mercado en tu zona geográfica para sugerir estrategias de
              inventario.
            </li>
            <li>
              Crear benchmarks anónimos y agregados comparando el desempeño de tu concesionario con
              promedios de la industria (sin identificar a tu negocio específicamente).
            </li>
          </ul>

          <h3 className="text-lg font-medium">3.4 Seguridad y cumplimiento</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Detectar, prevenir y mitigar actividades fraudulentas, spam o abuso de la plataforma.</li>
            <li>Verificar tu identidad y la legitimidad de tu concesionario.</li>
            <li>
              Cumplir con obligaciones legales, regulatorias y requisitos de autoridades competentes.
            </li>
            <li>
              Resolver disputas, hacer cumplir nuestros términos de servicio, y proteger nuestros
              derechos legales.
            </li>
          </ul>

          <h3 className="text-lg font-medium">3.5 Comunicaciones</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Enviarte actualizaciones sobre la app, notas de versión, y avisos de mantenimiento.</li>
            <li>
              Compartir newsletters con mejores prácticas de venta de autos, casos de éxito, y nuevas
              funcionalidades.
            </li>
            <li>Responder a tus solicitudes de soporte técnico y atención al cliente.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">4. Base Legal para el Tratamiento de Datos</h2>
          <p className="text-muted-foreground">
            Tratamos tu información personal con base en una o más de las siguientes bases legales:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Ejecución de contrato: El tratamiento es necesario para cumplir con nuestros términos de
              servicio y brindarte la funcionalidad contratada.
            </li>
            <li>
              Consentimiento: Cuando nos das consentimiento explícito para actividades como el envío
              de notificaciones push, acceso a tu ubicación, o conexión con canales de terceros.
            </li>
            <li>
              Intereses legítimos: Para mejorar nuestros servicios, garantizar la seguridad, prevenir
              fraudes, y operar nuestro negocio de manera eficiente, siempre que estos intereses no
              prevalezcan sobre tus derechos y libertades fundamentales.
            </li>
            <li>
              Obligación legal: Cuando la ley nos exige conservar o revelar información, por ejemplo,
              por requerimiento de autoridades fiscales o judiciales.
            </li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">5. Cómo Compartimos tu Información</h2>
          <h3 className="text-lg font-medium">5.1 Dentro de tu organización</h3>
          <p className="text-muted-foreground">
            La información de leads, clientes e inventario es visible para los usuarios autorizados
            dentro de tu concesionario que tengan acceso a la plataforma. Tú como administrador puedes
            controlar los permisos de cada vendedor desde la configuración de equipo.
          </p>

          <h3 className="text-lg font-medium">5.2 Con proveedores de servicios</h3>
          <p className="text-muted-foreground">
            Compartimos información con terceros de confianza que nos ayudan a operar, mantener y
            mejorar nuestra plataforma. Estos proveedores están contractualmente obligados a proteger
            tu información y solo pueden utilizarla para los fines específicos que les asignemos:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Proveedores de infraestructura en la nube: Para almacenamiento seguro de datos y
              procesamiento de información.
            </li>
            <li>
              Servicios de mensajería: WhatsApp Business API (Meta Platforms, Inc.) y Facebook
              Messenger para el envío y recepción de mensajes.
            </li>
            <li>
              Servicios de notificaciones push: Apple Push Notification Service (APNS) y Firebase
              Cloud Messaging (Google) para enviar alertas a tu dispositivo.
            </li>
            <li>
              Herramientas de analítica: Para entender el comportamiento de uso de la app y mejorar la
              experiencia.
            </li>
            <li>
              Soporte técnico y atención al cliente: Para resolver incidencias y responder consultas.
            </li>
          </ul>

          <h3 className="text-lg font-medium">5.3 Por razones legales</h3>
          <p className="text-muted-foreground">
            Podemos divulgar tu información si creemos de buena fe que dicha divulgación es necesaria
            para:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Cumplir con una ley, regulación, proceso legal o solicitud gubernamental aplicable.</li>
            <li>
              Proteger la seguridad, derechos o propiedad de nuestros usuarios, del público, o de
              nuestra empresa.
            </li>
            <li>
              Detectar, prevenir o abordar problemas técnicos, fraudes, actividades ilegales o
              violaciones de nuestros términos de servicio.
            </li>
          </ul>

          <h3 className="text-lg font-medium">5.4 En caso de transacciones corporativas</h3>
          <p className="text-muted-foreground">
            Si participamos en una fusión, adquisición, reestructuración, venta de activos o quiebra,
            tu información podría ser transferida como parte de esa transacción. Te notificaremos con
            antelación razonable y te daremos la oportunidad de eliminar tu información antes de
            cualquier transferencia material.
          </p>

          <h3 className="text-lg font-medium">5.5 Con tu consentimiento</h3>
          <p className="text-muted-foreground">
            Compartiremos tu información con terceros cuando nos hayas dado tu consentimiento explícito
            para hacerlo.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">6. Seguridad de la Información</h2>
          <p className="text-muted-foreground">
            La seguridad de tu información es nuestra prioridad. Implementamos medidas técnicas,
            administrativas y físicas diseñadas para proteger tus datos contra acceso no autorizado,
            alteración, divulgación o destrucción:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Cifrado en tránsito: Toda la comunicación entre tu dispositivo y nuestros servidores
              utiliza TLS 1.3 (Transport Layer Security) con certificados de 2048 bits.
            </li>
            <li>
              Cifrado en reposo: Los datos almacenados en nuestros servidores se cifran utilizando
              estándares de la industria (AES-256).
            </li>
            <li>
              Autenticación segura: Implementamos autenticación basada en tokens JWT con rotación
              periódica, autenticación biométrica (donde el dispositivo lo soporte), y opciones de
              autenticación de dos factores (2FA).
            </li>
            <li>
              Control de acceso basado en roles (RBAC): Los usuarios solo pueden acceder a la
              información estrictamente necesaria para su función dentro del concesionario.
            </li>
            <li>
              Auditoría y monitoreo: Registramos logs de acceso para detectar actividades sospechosas y
              realizamos monitoreo continuo de seguridad.
            </li>
            <li>
              Copias de seguridad: Realizamos backups automáticos y periódicos de toda la información
              crítica para garantizar la recuperación ante desastres.
            </li>
            <li>
              Pruebas de penetración: Contratamos auditorías de seguridad externas de forma trimestral
              para identificar y corregir vulnerabilidades.
            </li>
          </ul>
          <p className="text-muted-foreground">
            A pesar de nuestros esfuerzos, ningún sistema de seguridad es impenetrable. No podemos
            garantizar la seguridad absoluta de tu información, pero nos comprometemos a notificarte
            de manera oportuna en caso de cualquier incidente de seguridad que afecte tus datos
            personales, de conformidad con las leyes aplicables.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">7. Retención y Eliminación de Datos</h2>
          <p className="text-muted-foreground">
            Conservamos tu información personal durante el tiempo necesario para cumplir con los fines
            descritos en esta política, a menos que un período de retención más largo sea requerido o
            permitido por la ley:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Datos de cuenta: Conservados mientras tu cuenta esté activa. Si cierras tu cuenta, los
              datos se eliminan o anonimizan dentro de los 90 días siguientes, excepto cuando la ley
              exija retención (por ejemplo, registros fiscales o comerciales).
            </li>
            <li>
              Conversaciones y leads: Retenidos durante la vigencia de tu suscripción y hasta 12 meses
              adicionales para cumplir con obligaciones legales y permitir recuperación ante disputas.
            </li>
            <li>
              Logs técnicos y de seguridad: Retenidos entre 6 y 24 meses, según su naturaleza y
              requisitos regulatorios.
            </li>
          </ul>
          <p className="text-muted-foreground">
            Cuando eliminamos datos, lo hacemos de manera segura utilizando técnicas de borrado
            irreversible que impiden la recuperación.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">8. Tus Derechos y Opciones</h2>
          <h3 className="text-lg font-medium">8.1 Derechos básicos</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Acceso: Solicitar una copia de la información personal que tenemos sobre ti.</li>
            <li>Rectificación: Corregir información inexacta, incompleta o desactualizada.</li>
            <li>
              Eliminación ("Derecho al olvido"): Solicitar la eliminación de tu información personal,
              sujeto a ciertas excepciones legales.
            </li>
            <li>
              Portabilidad: Recibir tu información en un formato estructurado, de uso común y lectura
              mecánica, o solicitar que la transfiramos a otro responsable.
            </li>
            <li>
              Oposición: Oponerte al tratamiento de tu información para ciertos fines, como marketing
              directo o perfiles automatizados.
            </li>
            <li>
              Limitación: Solicitar que limitemos el tratamiento de tus datos en circunstancias
              específicas.
            </li>
          </ul>

          <h3 className="text-lg font-medium">8.2 Cómo ejercer tus derechos</h3>
          <p className="text-muted-foreground">
            Puedes ejercer tus derechos desde la configuración de la aplicación (Configuración &gt;
            Privacidad y Datos) o contactándonos directamente a través de los medios proporcionados al
            final de esta política. Responderemos a todas las solicitudes dentro de los plazos
            establecidos por la ley aplicable (generalmente 30 días hábiles, ampliables en casos
            complejos).
          </p>

          <h3 className="text-lg font-medium">8.3 Control de notificaciones y permisos</h3>
          <p className="text-muted-foreground">
            Puedes gestionar tus preferencias de notificaciones push desde la configuración de tu
            dispositivo móvil (iOS: Ajustes &gt; Notificaciones; Android: Ajustes &gt; Aplicaciones
            &gt; Notificaciones). También puedes revocar permisos de ubicación, cámara, micrófono y
            contactos desde la configuración de tu dispositivo, aunque esto puede limitar ciertas
            funcionalidades de la app.
          </p>

          <h3 className="text-lg font-medium">
            8.4 Derechos adicionales para residentes de ciertas regiones
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Residentes de la Unión Europea (GDPR): Además de los derechos anteriores, tienes derecho
              a retirar tu consentimiento en cualquier momento, derecho a no ser objeto de decisiones
              automatizadas con efectos legales significativos, y derecho a presentar una queja ante
              una autoridad de protección de datos.
            </li>
            <li>
              Residentes de California (CCPA/CPRA): Tienes derecho a conocer las categorías
              específicas de información personal que recopilamos, las fuentes de dicha información,
              los fines comerciales de recopilación, y las categorías de terceros con quienes
              compartimos la información. No vendemos tu información personal.
            </li>
            <li>
              Residentes de México (LFPDPPP): Tienes derecho a conocer el Aviso de Privacidad
              integral, acceder a tus datos ARCO (Acceso, Rectificación, Cancelación y Oposición), y
              revocar el consentimiento para el tratamiento de tus datos.
            </li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">9. Privacidad de Menores de Edad</h2>
          <p className="text-muted-foreground">
            Nuestra aplicación no está dirigida a personas menores de 18 años. No recopilamos
            intencionalmente información personal de menores. Si tienes razones para creer que un menor
            nos ha proporcionado información personal, contáctanos inmediatamente y tomaremos las
            medidas necesarias para eliminar dicha información y cerrar la cuenta asociada.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">10. Transferencias Internacionales de Datos</h2>
          <p className="text-muted-foreground">
            Nuestros servidores y proveedores de servicios pueden ubicarse en diferentes países. Al
            utilizar nuestra aplicación, aceptas que tu información pueda ser transferida, almacenada y
            procesada en jurisdicciones fuera de tu país de residencia, incluyendo Estados Unidos, la
            Unión Europea y otros países donde operamos.
          </p>
          <p className="text-muted-foreground">
            Cuando transferimos datos fuera del Espacio Económico Europeo (EEE), implementamos
            salvaguardias apropiadas, como Cláusulas Contractuales Tipo aprobadas por la Comisión
            Europea, para garantizar que tus datos reciban un nivel de protección equivalente al de la
            Unión Europea.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">11. Cookies y Tecnologías Similares</h2>
          <p className="text-muted-foreground">
            Nuestra aplicación móvil utiliza tecnologías de almacenamiento local y tokens de sesión
            para mantener tu sesión iniciada, recordar tus preferencias, y proporcionar una experiencia
            fluida. Estas tecnologías no rastrean tu actividad fuera de la aplicación. Puedes cerrar
            sesión en cualquier momento desde la configuración de la app para eliminar los tokens de
            sesión activos.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">12. Enlaces a Terceros</h2>
          <p className="text-muted-foreground">
            Nuestra aplicación puede contener enlaces a sitios web o servicios de terceros (por
            ejemplo, páginas de fabricantes de autos, sitios de financiamiento, o integraciones con
            plataformas de mensajería). Esta Política de Privacidad no se aplica a dichos sitios o
            servicios. Te recomendamos revisar las políticas de privacidad de cada tercero antes de
            proporcionarles tu información.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">13. Cambios a esta Política de Privacidad</h2>
          <p className="text-muted-foreground">
            Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en
            nuestras prácticas, funcionalidades de la app, o requisitos legales. Cuando realicemos
            cambios materiales:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Te notificaremos a través de la aplicación (notificación push o banner in-app) con al
              menos 30 días de anticipación.
            </li>
            <li>Publicaremos la versión actualizada en nuestro sitio web y dentro de la app.</li>
            <li>Actualizaremos la fecha de "Última actualización" al inicio de este documento.</li>
          </ul>
          <p className="text-muted-foreground">
            Te recomendamos revisar esta política regularmente. El uso continuado de la aplicación
            después de la publicación de cambios constituye tu aceptación de la política modificada.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">14. Contacto y Delegado de Protección de Datos</h2>
          <p className="text-muted-foreground">
            Para cualquier consulta, solicitud, queja o ejercicio de derechos relacionados con esta
            Política de Privacidad o el tratamiento de tus datos personales, puedes contactarnos a
            través de:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Correo electrónico: privacidad@intelekia.cloud</li>
            <li>
              Dirección postal:
              <br />
              Intelekia, S.C.
              <br />
              Attn: Departamento de Privacidad y Protección de Datos
              <br />
              Av del lago 230 Fracc del Country, Durango, Mexico
              <br />
               Durango, Mexico 34162
              <br />
              Mexico
            </li>
            <li>Teléfono: 6181020929</li>
            <li>
              Formulario web: Disponible dentro de la aplicación en Configuración &gt; Ayuda y Soporte
              &gt; Contactar al Delegado de Privacidad.
            </li>
          </ul>
          <p className="text-muted-foreground">
            Nuestro Delegado de Protección de Datos (DPD) está disponible para resolver cualquier
            inquietud relacionada con el tratamiento de información personal y garantizar el
            cumplimiento de las leyes de privacidad aplicables.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">15. Disposiciones Finales</h2>
          <p className="text-muted-foreground">
            Si alguna disposición de esta Política de Privacidad es considerada inválida o inaplicable
            por un tribunal de jurisdicción competente, dicha disposición será modificada o eliminada
            en la medida mínima necesaria, y las disposiciones restantes continuarán en pleno vigor y
            efecto.
          </p>
          <p className="text-muted-foreground">
            Esta política se rige por las leyes de Durango, Mexico y cualquier disputa relacionada
            con ella será sometida a los tribunales competentes de Durango, Mexico.
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

export default PrivacyAutobot;
