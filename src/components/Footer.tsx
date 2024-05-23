import React from "react";
import NextLink from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-[#061A40] relative z-[200]">
      <div className="grid grid-cols-2 lg:grid-cols-4 py-12 lg:py-24">
        <div className="mx-auto p-5">
          <img src="/assets/images/logo.png" className="w-[200px] lg:w-[300px]" alt="" />
        </div>

        <div className="p-5">
          <a href="#" className="text-white p-2 block font-bold	">Contenido de Interés</a>
          <NextLink href="/catalogo" className="text-white p-2 block opacity-70">Catálogo</NextLink>
          <NextLink href="/trabajos" className="text-white p-2 block opacity-70">Trabajos</NextLink>
          <NextLink href="/empresa" className="text-white p-2 block opacity-70">Empresa</NextLink>
          <NextLink href="/politica" className="text-white p-2 block opacity-70">Política de Privacidad</NextLink>
          <NextLink href="/cookies" className="text-white p-2 block opacity-70">Política de Cookies</NextLink>
          <NextLink href="/aviso" className="text-white p-2 block opacity-70">Aviso Legal</NextLink>




        </div>


        <div className="p-5">

          <a href="#" className="text-white p-2 block font-bold	">¿Necesitas ayuda?</a>
          <a href="#" className="text-white p-2 block opacity-70">Contáctanos</a>
          <a href="#" className="text-white p-2 block opacity-70">WhatsApp</a>
          <a href="#" className="text-white p-2 block opacity-70">Email</a>
          <a href="#" className="text-white p-2 block opacity-70">Telegram</a>
          <a href="#" className="text-white p-2 block opacity-70">Signal</a>


        </div>


        <div className="p-5">

          <a href="#" className="text-white p-2 block font-bold	">Seguinos en:</a>
          <a href="#" className="text-white p-2 block opacity-70">Instagram</a>
          <a href="#" className="text-white p-2 block opacity-70">Facebook</a>
          <a href="#" className="text-white p-2 block opacity-70">Twitter</a>
          <a href="#" className="text-white p-2 block opacity-70">TikTok</a>


        </div>

      </div>

      <hr className="bg-white text-white opacity-50"/>

      <p className="text-center text-white p-5 opacity-70">
      Marmopar® es una empresa registrada de EMCOPY S.A,  una empresa de Grupo Solano
      </p>
    </footer>
  );
}
