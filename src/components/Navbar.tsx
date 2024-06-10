import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { getTranslation, Locale } from '../config/translation';

export default function Navbar() {
  const router = useRouter();
  const { locales, asPath } = router;

  const [currentLocale, setCurrentLocale] = useState<Locale>('es');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    setCurrentLocale(savedLocale || router.locale || 'es');
  }, [router.locale]);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    setShowMenu(false);
  }, [router.query.slug]);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value as Locale;
    setCurrentLocale(selectedLocale);
    localStorage.setItem('locale', selectedLocale);
    router.push(asPath, asPath, { locale: selectedLocale }).then(() => window.location.reload());
  };

  const isActive = (path: string) => asPath === path ? "text-red-700" : "text-[#2C363F]";

  return (
    <nav className="container py-3 flex items-center justify-between">
      <div>
        <NextLink href="/" className="block">
          <img
            src="/assets/images/logo.png"
            alt=""
            className="w-[150px] lg:w-[200px] object-contain"
          />
        </NextLink>
      </div>

      <button
        id="menu-open"
        className="block lg:hidden text-4xl"
        onClick={() => setShowMenu(true)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <div
        id="menu-body"
        className={`${
          showMenu ? "flex" : "hidden"
        } z-50 bg-white fixed lg:static lg:transparent w-screen h-screen lg:w-auto lg:h-auto flex-col lg:flex-row lg:flex top-0 left-0 xl:flex-row gap-x-10 gap-y-3 items-center justify-center lg:items-end xl:items-center`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <button
            id="menu-close"
            className="block lg:hidden text-3xl bg-red-400 py-2 text-white fixed top-8 right-4 px-4 rounded-md"
            onClick={() => setShowMenu(false)}
          >
            <i className="fa-solid fa-times"></i>
          </button>

          <NextLink
            href="/"
            className={`block text-3xl lg:text-base font-bold ${isActive('/')}`}
          >
            {getTranslation('inicio', currentLocale)}
          </NextLink>
          <NextLink
            href="/catalogo"
            className={`block text-3xl lg:text-base font-bold ${isActive('/catalogo')}`}
          >
            {getTranslation('catalogo', currentLocale)}
          </NextLink>

          <NextLink
            href="/trabajos"
            className={`block text-3xl lg:text-base font-bold ${isActive('/trabajos')}`}
          >
            {getTranslation('trabajos', currentLocale)}
          </NextLink>
          
          <NextLink
            href="/empresa"
            className={`block text-3xl lg:text-base font-bold ${isActive('/empresa')}`}
          >
            {getTranslation('empresa', currentLocale)}
          </NextLink>
          <NextLink
            href="/contacto"
            className={`block text-3xl lg:text-base font-bold ${isActive('/contacto')}`}
          >
            {getTranslation('contactanos', currentLocale)}
          </NextLink>

          <select
            value={currentLocale}
            onChange={changeLanguage}
            className="block text-3xl lg:text-base font-bold text-[#2C363F]"
          >
            {locales?.map((loc) => (
              <option key={loc} value={loc}>
                {loc.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}
