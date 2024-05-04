import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "../../config/axios";
import Head from "next/head";

export default function Catalogo() {
  const router = useRouter();

  const [currentCatalogo, setCurrentCatalogo] = useState<any>(null);
  const [errorCatalogo, setErrorCatalogo] = useState<any>(null);

  const [catalogos, setCatalogos] = useState<any>(null);
  const [errorCatalogos, setErrorCatalogos] = useState<any>(null);

  useEffect(() => {
    if (!router.query.slug) return;

    const fetchCatalogos = async () => {
      try {
        const response = await axios.get("/catalogos");
        setCatalogos(response?.data);
      } catch (error) {
        setErrorCatalogos(error);
      }
    };

    const fetchCatalogo = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}catalogo/${router.query.slug}`
        );
        setCurrentCatalogo(response?.data);
      } catch (error) {
        setErrorCatalogo(error);
      }
    };

    fetchCatalogo();
    fetchCatalogos();
  }, [router.query.slug]);

  if (!currentCatalogo && !errorCatalogo)
    return (
      <div className="w-screen h-screen grid place-items-center text-2xl text-gray-600">
        Cargando..
      </div>
    );

  if (errorCatalogo)
    return (
      <div className="w-screen h-screen grid place-items-center text-2xl text-gray-600">
        Ha ocurrido un error
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
          <h3 className="text-4xl text-white font-bold ">Catalogos</h3>
        </div>
      </header>

      <div className="container">
        <button
          onClick={() => router.back()}
          className="my-5 block text-black"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <i className="fa-solid fa-angle-left"></i> Volver a Catálogo
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
          </div>
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="ml-auto max-w-lg bg-red-800 rounded-xl px-10 pt-14 pb-8"
            >
              <h3 className="text-white text-xl border-b-2 border-white pb-3">
                Quizás te puede interesar
              </h3>

              <div className="py-10 grid gap-y-14">
                {!catalogos && !errorCatalogos ? (
                  <div>Cargando...</div>
                ) : errorCatalogos ? (
                  <div>Ha ocurrido un error</div>
                ) : (
                  catalogos?.data.map((item: any) => {
                    if (item.slug === router.query.slug) return;

                    return (
                      <Link
                        key={item.id}
                        href={`/catalogos/${item.slug}`}
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
