import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "../../config/axios";
import Head from "next/head";

export default function Trabajos() {
  const router = useRouter();

  const [currentTrabajo, setCurrentTrabajo] = useState<any>(null);
  const [errorTrabajo, setErrorTrabajo] = useState<any>(null);

  const [trabajos, setTrabajos] = useState<any>(null);
  const [errorTrabajos, setErrorTrabajos] = useState<any>(null);

  useEffect(() => {
    if (!router.query.slug) return;

    const fetchTrabajos = async () => {
      try {
        const response = await axios.get("/trabajos");
        setTrabajos(response?.data);
      } catch (error) {
        setErrorTrabajos(error);
      }
    };

    const fetchTrabajo = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}trabajo/${router.query.slug}`
        );
        setCurrentTrabajo(response?.data);
      } catch (error) {
        setErrorTrabajo(error);
      }
    };

    fetchTrabajo();
    fetchTrabajos();
  }, [router.query.slug]);

  if (!currentTrabajo && !errorTrabajo)
    return (
      <div className="w-screen h-screen grid place-items-center text-2xl text-gray-600">
        Cargando..
      </div>
    );

  if (errorTrabajo)
    return (
      <div className="w-screen h-screen grid place-items-center text-2xl text-gray-600">
        Ha ocurrido un error
      </div>
    );

  return (
    <Layout>
      <Head>
        <title>{currentTrabajo.name}</title>
      </Head>

      <header
        data-aos="fade-up"
        data-aos-delay="100"
        className="mx-4 lg:mx-16 relative bg-[url('/assets/images/banner-noticias.png')] h-[180px] lg:h-[300px] bg-cover bg-center"
      >
        <div className="container h-full flex items-center">
          <h3 className="text-4xl text-white font-bold ">Trabajos</h3>
        </div>
      </header>

      <div className="container">
        <button
          onClick={() => router.back()}
          className="my-5 block text-black"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <i className="fa-solid fa-angle-left"></i> Volver a trabajos
        </button>

        <div className="grid xl:grid-cols-2 pb-20 xl:pb-0 xl:gap-20">
          <div className="py-10 xl:pb-20">
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xl font-bold"
            >
              {currentTrabajo.title}
            </h3>

            <img
              data-aos="fade-up"
              data-aos-delay="100"
              src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${currentTrabajo.img}`}
              alt=""
              className="my-5 w-full object-cover"
            />

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-justify new-description"
              dangerouslySetInnerHTML={{
                __html: currentTrabajo.description,
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
                {!trabajos && !errorTrabajos ? (
                  <div>Cargando...</div>
                ) : errorTrabajos ? (
                  <div>Ha ocurrido un error</div>
                ) : (
                  trabajos?.data.map((item: any) => {
                    if (item.slug === router.query.slug) return;

                    return (
                      <Link
                        key={item.id}
                        href={`/trabajos/${item.slug}`}
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
