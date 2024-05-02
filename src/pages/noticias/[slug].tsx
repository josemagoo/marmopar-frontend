import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "../../config/axios";
import Head from "next/head";

export default function Noticia() {
  const router = useRouter();

  const [currentNew, setCurrentNew] = useState<any>(null);
  const [errorNew, setErrorNew] = useState<any>(null);

  const [news, setNews] = useState<any>(null);
  const [errorNews, setErrorNews] = useState<any>(null);

  useEffect(() => {
    if (!router.query.slug) return;

    const fetchNews = async () => {
      try {
        const response = await axios.get("/noticias");
        setNews(response?.data);
      } catch (error) {
        setErrorNews(error);
      }
    };

    const fetchNew = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}/noticia/${router.query.slug}`
        );
        setCurrentNew(response?.data);
      } catch (error) {
        setErrorNew(error);
      }
    };

    fetchNew();
    fetchNews();
  }, [router.query.slug]);

  if (!currentNew && !errorNew)
    return (
      <div className="w-screen h-screen grid place-items-center text-2xl text-gray-600">
        Cargando..
      </div>
    );

  if (errorNew)
    return (
      <div className="w-screen h-screen grid place-items-center text-2xl text-gray-600">
        Ha ocurrido un error
      </div>
    );

  return (
    <Layout>
      <Head>
        <title>{currentNew.name}</title>
      </Head>

      <header
        data-aos="fade-up"
        data-aos-delay="100"
        className="mx-4 lg:mx-16 relative bg-[url('/assets/images/banner-noticias.png')] h-[180px] lg:h-[300px] bg-cover bg-center"
      >
        <div className="container h-full flex items-center">
          <h3 className="text-4xl text-white font-bold ">Noticias</h3>
        </div>
      </header>

      <div className="container">
        <button
          onClick={() => router.back()}
          className="my-5 block text-black"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <i className="fa-solid fa-angle-left"></i> Volver a noticias
        </button>

        <div className="grid xl:grid-cols-2 pb-20 xl:pb-0 xl:gap-20">
          <div className="py-10 xl:pb-20">
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xl font-bold text-acgroup-primary"
            >
              {currentNew.name}
            </h3>

            <img
              data-aos="fade-up"
              data-aos-delay="100"
              src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${currentNew.cover}`}
              alt=""
              className="my-5 w-full object-cover"
            />

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-justify new-description"
              dangerouslySetInnerHTML={{
                __html: currentNew.description,
              }}
            />
          </div>
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="ml-auto max-w-lg bg-acgroup-primary rounded-xl px-10 pt-14 pb-8"
            >
              <h3 className="text-white text-xl border-b-2 border-white pb-3">
                Quizás te puede interesar
              </h3>

              <div className="py-10 grid gap-y-14">
                {!news && !errorNews ? (
                  <div>Cargando...</div>
                ) : errorNews ? (
                  <div>Ha ocurrido un error</div>
                ) : (
                  news?.data.map((item: any) => {
                    if (item.slug === router.query.slug) return;

                    return (
                      <Link
                        key={item.id}
                        href={`/noticias/${item.slug}`}
                        className="block text-white"
                      >
                        {item.name}
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
