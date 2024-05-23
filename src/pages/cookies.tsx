import React, { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import axios from "../config/axios";
import Link from "next/link";
import Head from "next/head";

export default function Trabajos() {
  const [trabajos, setTrabajos] = useState<any>(null);
  const [errorTrabajos, setErrorTrabajos] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<any>(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `/trabajos?page=${currentPage}`
        );

        setTrabajos(response?.data);
      } catch (error) {
        setErrorTrabajos(error);
      }
    })();
  }, [currentPage]);

  let cantidadDeBotones = Math.ceil(trabajos?.total / trabajos?.per_page);

  const maximoBotonesEnPaginacion = 15; // Establece tu límite máximo
  if (cantidadDeBotones > maximoBotonesEnPaginacion) {
    cantidadDeBotones = maximoBotonesEnPaginacion;
  }

  const botones = Array.from(
    { length: cantidadDeBotones },
    (_, index) => index + 1
  );

  return (
    <Layout>
      <Head>
        <title>Trabajos</title>
      </Head>

      <header
        data-aos="fade-up"
        data-aos-delay="100"
        className="mx-4 lg:mx-16 relative bg-[url('/assets/images/banner-noticias.png')] h-[180px] lg:h-[300px] bg-cover bg-center rounded-bl-2xl rounded-br-2xl"
      >
        <div className="container h-full flex items-center">
          <h3 className="text-4xl text-white font-bold ">Trabajos</h3>
        </div>
      </header>

      <div className="container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 lg:gap-16">
        {trabajos ? (
          trabajos?.data.map((trabajoItem: any, index: number) => (
            <Link
              href={`/trabajos/${trabajoItem.slug}`}
              className="block"
              key={trabajoItem.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${trabajoItem.img}`}
                alt=""
                className="w-full object-cover"
              />
              <p className="text-sm py-2">
              </p>
              <p className="text-lg font-bold">{trabajoItem.title}</p>
            </Link>
          ))
        ) : errorTrabajos ? (
          <div>Error al cargar trabajos</div>
        ) : (
          <div>Cargando...</div>
        )}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex flex-wrap items-center gap-3 container pb-20"
      >
        <div className="flex items-center gap-1">
          <span className="block text-acgroup-primary">
            Ver mas trabajos
          </span>
          <i className="fa-solid fa-angle-right"></i>
        </div>

        {botones?.map((boton) => (
          <button
            onClick={() => setCurrentPage(boton)}
            key={boton}
            className="text-gray-500 p-1"
          >
            {boton}
          </button>
        ))}
        <button
          className="text-gray-500 p-1"
          onClick={() => {
            if (currentPage < botones?.length) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Siguiente
        </button>
      </div>
    </Layout>
  );
}
