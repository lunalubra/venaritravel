import { type FC } from "react";

import { Wordmark } from "./Wordmark";

const year = new Date().getFullYear();

export const Footer: FC = () => {
  return (
    <footer className="bg-tinta text-hueso">
      <div className="mx-auto max-w-[72rem] px-6 py-20 sm:px-10 sm:py-28">
        <div className="flex flex-col items-center gap-12 text-center">
          <Wordmark
            className="text-[clamp(1.5rem,2.5vw,2rem)] text-hueso/85"
          />

          <div
            aria-hidden="true"
            data-reveal="line"
            className="h-px w-16 origin-center bg-hueso/30"
          />

          <p
            data-reveal
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            className="font-serif text-[1rem] italic text-hueso/65 max-w-[32ch]"
          >
            Cazar en España, sin gestionar nada. Conversación privada.
          </p>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
            aria-label="Navegación legal"
          >
            <FooterLink href="#contacto">Contacto</FooterLink>
            <FooterLink href="/aviso-legal">Aviso legal</FooterLink>
            <FooterLink href="/privacidad">Privacidad</FooterLink>
          </nav>

          <p className="text-[0.75rem] text-hueso/40 mt-4">
            © {year} venaritravel. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      className="link-underline text-[0.8125rem] font-sans tracking-[0.04em] text-hueso/70 hover:text-hueso"
    >
      {children}
    </a>
  );
};
