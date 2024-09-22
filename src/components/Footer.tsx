import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { getTranslation, Locale } from '../config/translation';
import axios from "../config/axios";

export default function Footer() {
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState<Locale>('es');
  const [footerData, setFooterData] = useState<{ [key: number]: any[] }>({});

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    setCurrentLocale(savedLocale || router.locale || 'es');

    const fetchFooterData = async () => {
      try {
        const response = await axios.get(`/footer?lang=${savedLocale}`);
        setFooterData(response.data);
      } catch (error) {
        console.error('Error al cargar los datos del footer:', error);
      }
    };

    fetchFooterData();
  }, [router.locale]);

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
          {footerData[1]?.map(item => (
            <NextLink key={item.id} href={item.link} passHref>
              <span className="text-white p-2 block opacity-70">
                {item.title}
              </span>
            </NextLink>
          ))}
        </div>

        <div className="p-5">
          <p className="text-white p-2 block font-bold">
            {getTranslation('necesitas_ayuda', currentLocale)}
          </p>
          {footerData[2]?.map(item => (
            <a key={item.id} href={item.link} className="text-white p-2 block opacity-70">
              {item.title}
            </a>
          ))}
        </div>

        <div className="p-5">
          <p className="text-white p-2 block font-bold">
            {getTranslation('seguinos_en', currentLocale)}
          </p>
          {footerData[3]?.map(item => (
            <a key={item.id} href={item.link} className="text-white p-2 block opacity-70">
              {item.title}
            </a>
          ))}
        </div>
      </div>

      <hr className="bg-white text-white opacity-50" />

      <p className="text-center text-white p-5 opacity-70">
        {getTranslation('marca', currentLocale)}
      </p>
    </footer>
  );
}
