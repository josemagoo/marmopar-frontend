import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { getTranslation, Locale } from '../config/translation';

export default function Footer() {
  const router = useRouter();
  const { locales, asPath } = router;

  // Obtener el idioma actual del local storage o del router, o usar 'es' como valor por defecto
  const [currentLocale, setCurrentLocale] = useState<Locale>('es');

  useEffect(() => {
    // Solo intentar obtener el idioma del localStorage en el cliente
    const savedLocale = localStorage.getItem('locale') as Locale;
    setCurrentLocale(savedLocale || router.locale || 'es');
  }, [router.locale]); // Dependencia solo en router.locale

  return (
    <footer className="footer bg-[#061A40] relative z-[200]">
      <div className="grid grid-cols-2 lg:grid-cols-4 py-12 lg:py-24">
        <div className="mx-auto p-5">
          <img src="/assets/images/logo.png" className="w-[200px] lg:w-[300px]" alt="" />
        </div>

        <div className="p-5">
          <p className="text-white p-2 block font-bold">
            {getTranslation('contenido_interes', currentLocale)}
          </p>
          <NextLink href="/catalogo" passHref>
            <span className="text-white p-2 block opacity-70">
              {getTranslation('catalogo', currentLocale)}
            </span>
          </NextLink>
          <NextLink href="/trabajos" passHref>
            <span className="text-white p-2 block opacity-70">
              {getTranslation('trabajos', currentLocale)}
            </span>
          </NextLink>
          <NextLink href="/empresa" passHref>
            <span className="text-white p-2 block opacity-70">
              {getTranslation('empresa', currentLocale)}
            </span>
          </NextLink>
          <NextLink href="/politica" passHref>
            <span className="text-white p-2 block opacity-70">
              {getTranslation('politica_privacidad', currentLocale)}
            </span>
          </NextLink>
          <NextLink href="/cookies" passHref>
            <span className="text-white p-2 block opacity-70">
              {getTranslation('politica_cookies', currentLocale)}
            </span>
          </NextLink>
          <NextLink href="/aviso" passHref>
            <span className="text-white p-2 block opacity-70">
              {getTranslation('aviso_legal', currentLocale)}
            </span>
          </NextLink>
        </div>

        <div className="p-5">
          <p className="text-white p-2 block font-bold">
            {getTranslation('necesitas_ayuda', currentLocale)}
          </p>
          <a href="#" className="text-white p-2 block opacity-70">
            {getTranslation('contactanos', currentLocale)}
          </a>
          <a href="#" className="text-white p-2 block opacity-70">WhatsApp</a>
          <a href="#" className="text-white p-2 block opacity-70">Email</a>
          <a href="#" className="text-white p-2 block opacity-70">Telegram</a>
          <a href="#" className="text-white p-2 block opacity-70">Signal</a>
        </div>

        <div className="p-5">
          <p className="text-white p-2 block font-bold">
            {getTranslation('seguinos_en', currentLocale)}
          </p>
          <a href="#" className="text-white p-2 block opacity-70">Instagram</a>
          <a href="#" className="text-white p-2 block opacity-70">Facebook</a>
          <a href="#" className="text-white p-2 block opacity-70">Twitter</a>
          <a href="#" className="text-white p-2 block opacity-70">TikTok</a>
        </div>
      </div>

      <hr className="bg-white text-white opacity-50" />

      <p className="text-center text-white p-5 opacity-70">
        {getTranslation('marca', currentLocale)}
      </p>
    </footer>
  );
}
