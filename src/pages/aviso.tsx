import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import axios from "../config/axios";
import { getTranslation, Locale } from '../config/translation';

export default function Empresa() {
  const [empresa, setEmpresa] = useState<any>(null);
  const [errorEmpresa, setErrorEmpresa] = useState<any>(null);
  const [locale, setLocale] = useState<Locale>('es');

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale') as Locale;
    if (storedLocale) {
      setLocale(storedLocale);
    } else {
      setLocale('es');
    }

    const fetchEmpresa = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}page/aviso?lang=${localStorage.getItem('locale')}`
        );
        setEmpresa(response?.data);
      } catch (error) {
        setErrorEmpresa(error);
      }
    };

    fetchEmpresa();
  }, []);

  if (!empresa && !errorEmpresa)
    return (
      <div className="w-screen h-screen grid place-items-center text-2xl text-gray-600">
        {getTranslation('cargando', locale)}
      </div>
    );

  if (errorEmpresa)
    return (
      <div className="w-screen h-screen grid place-items-center text-2xl text-gray-600">
        {getTranslation('error_ocurrido', locale)}
      </div>
    );

  return (
    <Layout>
      <Head>
        <title>{empresa.title}</title>
      </Head>

      <header
        className="px-4 lg:px-12 relative z-40"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          src="/assets/images/banner-noticias.png"
          alt=""
          className="w-full object-cover h-[200px] lg:h-[250px]"
        />

        <div className="absolute container top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <p className="text-4xl font-bold text-white">
            {empresa.title}
          </p>
        </div>
      </header>

      <div className="relative">
        <div className="absolute top-[-250px] left-0">
          <img
            src="/assets/images/banner-down.png"
            alt=""
            className="w-full object-cover"
          />
        </div>

        <main className="relative z-10 container grid xl:grid-cols-2 gap-20 lg:32 xl:gap-32 2xl:gap-44 py-16 lg:py-32">
          <div
            className="text-justify new-description"
            dangerouslySetInnerHTML={{
              __html: empresa.description,
            }}
          />
          <div className="flex justify-center items-center">
            <img
              src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${empresa.img}`} // Asegúrate de que este campo contenga la URL de la imagen
              alt="Imagen de la empresa"
              className="max-w-full h-auto"
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
