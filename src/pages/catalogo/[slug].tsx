import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "../../config/axios";
import Head from "next/head";
import { getTranslation, Locale } from '../../config/translation';

export default function Catalogo() {
  const router = useRouter();

  const [currentCatalogo, setCurrentCatalogo] = useState<any>(null);
  const [errorCatalogo, setErrorCatalogo] = useState<any>(null);

  const [catalogos, setCatalogos] = useState<any>(null);
  const [errorCatalogos, setErrorCatalogos] = useState<any>(null);

  const [images, setImages] = useState<any[]>([]);
  const [errorImages, setErrorImages] = useState<any>(null);

  const [locale, setLocale] = useState<Locale>('es'); // Estado para almacenar el idioma seleccionado

  useEffect(() => {
    // Obtener el idioma preferido del localStorage o establecer el idioma predeterminado
    const storedLocale = localStorage.getItem('locale') as Locale;
    if (storedLocale) {
      setLocale(storedLocale);
    } else {
      setLocale('es'); // Idioma predeterminado
    }

    if (!router.query.slug) return;

    const fetchCatalogos = async () => {
      try {
        const response = await axios.get(`/catalogos?lang=${localStorage.getItem('locale')}`);
        setCatalogos(response?.data);
      } catch (error) {
        setErrorCatalogos(error);
      }
    };

    const fetchCatalogo = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}catalogo/${router.query.slug}?lang=${localStorage.getItem('locale')}`
        );
        setCurrentCatalogo(response?.data);
      } catch (error) {
        setErrorCatalogo(error);
      }
    };

    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}catalogo/images/${router.query.slug}`
        );
        setImages(response?.data);
      } catch (error) {
        setErrorImages(error);
      }
    };

    fetchCatalogo();
    fetchCatalogos();
    fetchImages();
  }, [router.query.slug]);

  if (!currentCatalogo && !errorCatalogo)
    return (
      <div className="w-screen h-screen grid place-items-center text-2xl text-gray-600">
        {getTranslation('cargando', locale)}
      </div>
    );

  if (errorCatalogo)
    return (
      <div className="w-screen h-screen grid place-items-center text-2xl text-gray-600">
        {getTranslation('error_ocurrido', locale)}
      </div>
    );

  return (
    <Layout>
      <Head>
        <title>{currentCatalogo.title}</title>
      </Head>

      <header
        data-aos="fade-up"
        data-aos-delay="100"
        className="mx-4 lg:mx-16 relative bg-[url('/assets/images/banner-noticias.png')] h-[180px] lg:h-[300px] bg-cover bg-center"
      >
        <div className="container h-full flex items-center">
          <h3 className="text-4xl text-white font-bold ">{getTranslation('catalogos', locale)}</h3>
        </div>
      </header>

      <div className="container">
        <button
          onClick={() => router.back()}
          className="my-5 block text-black"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <i className="fa-solid fa-angle-left"></i> {getTranslation('volver_a_catalogo', locale)}
        </button>

        <div className="grid xl:grid-cols-2 pb-20 xl:pb-0 xl:gap-20">
          <div className="py-10 xl:pb-20">
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xl font-bold text-acgroup-primary"
            >
              {currentCatalogo.title}
            </h3>

            <img
              data-aos="fade-up"
              data-aos-delay="100"
              src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${currentCatalogo.img}`}
              alt=""
              className="my-5 w-full object-cover"
            />

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-justify new-description"
              dangerouslySetInnerHTML={{
                __html: currentCatalogo.description,
              }}
            />

            {images.length > 0 && (
              <div className="mt-10">
                <h3 className="text-xl font-bold text-acgroup-primary">{getTranslation('imagenes', locale)}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                  {images.map((image) => (
                    <img
                      key={image.id}
                      src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${image.file}`}
                      alt={image.name || "Catalogo Image"}
                      className="w-full object-cover"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="ml-auto max-w-lg bg-red-800 rounded-xl px-10 pt-14 pb-8"
            >
              <h3 className="text-white text-xl border-b-2 border-white pb-3">
                {getTranslation('quizas_te_interese', locale)}
              </h3>

              <div className="py-10 grid gap-y-14">
                {!catalogos && !errorCatalogos ? (
                  <div>{getTranslation('cargando', locale)}</div>
                ) : errorCatalogos ? (
                  <div>{getTranslation('error_ocurrido', locale)}</div>
                ) : (
                  catalogos?.data.map((item: any) => {
                    if (item.slug === router.query.slug) return;

                    return (
                      <Link
                        key={item.id}
                        href={`/catalogo/${item.slug}`}
                        className="block text-white"
                      >
                        {item.title}
                      </Link>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
