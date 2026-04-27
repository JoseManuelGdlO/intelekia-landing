import logo from "@/assets/intelekia-horizontal.png";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Intelekia" className="h-10 w-auto brightness-0 invert" />
          <p className="mt-4 text-secondary-foreground/70 max-w-sm">
            Software inteligente, decisiones brillantes. Consultoría en transformación
            digital con IA.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/company/intelekia-consultoria" },
              { Icon: Instagram, href: "https://www.instagram.com/intelekiaconsultoria/" },
              { Icon: Facebook, href: "https://www.facebook.com/p/Intelekia-61580864693422/" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center"
                aria-label="Red social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold font-display">Navegación</h4>
          <ul className="mt-4 space-y-2 text-secondary-foreground/70">
            <li><a href="#servicios" className="hover:text-primary transition-smooth">Servicios</a></li>
            <li><a href="#clientes" className="hover:text-primary transition-smooth">Clientes</a></li>
            <li><a href="#casos" className="hover:text-primary transition-smooth">Casos</a></li>
            <li><a href="#nosotros" className="hover:text-primary transition-smooth">Nosotros</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold font-display">Contacto</h4>
          <ul className="mt-4 space-y-2 text-secondary-foreground/70">
            <li>direccion@intelekia.cloud</li>
            <li>Latinoamérica · Remoto</li>
            <li><a href="#contacto" className="hover:text-primary transition-smooth">Agenda una consultoría</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-5 text-sm text-secondary-foreground/60 flex flex-col md:flex-row gap-2 md:items-center justify-between">
          <span>© {new Date().getFullYear()} Intelekia. Todos los derechos reservados.</span>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacidad.html" className="hover:text-primary transition-smooth">
              Privacidad de datos
            </a>
            <a href="/terminos-y-condiciones.html" className="hover:text-primary transition-smooth">
              Terminos y condiciones
            </a>
            <a href="/eliminacion-de-cuenta.html" className="hover:text-primary transition-smooth">
              Eliminacion de cuenta
            </a>
            <span>Software inteligente, decisiones brillantes.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
