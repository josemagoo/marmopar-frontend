import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import Layout from "@/components/Layout";
import axios from "../config/axios";
import Link from "next/link";
import Head from "next/head";

export default function Catalogos() {
  const [news, setNews] = useState<any>(null);
  const [errorNews, setErrorNews] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<any>(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `/catalogo?page=${currentPage}`
        );
        setNews(response?.data);
      } catch (error) {
        setErrorNews(error);
      }
    })();
  }, [currentPage]);

  let cantidadDeBotones = Math.ceil(news?.total / news?.per_page);

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
        <title>Catalogos</title>
      </Head>

      <header
        data-aos="fade-up"
        data-aos-delay="100"
        className="mx-4 lg:mx-16 relative bg-[url('/assets/images/banner-noticias.png')] h-[180px] lg:h-[300px] bg-cover bg-center rounded-bl-2xl rounded-br-2xl"
      >
        <div className="container h-full flex items-center">
          <h3 className="text-4xl text-white font-bold ">Catalogos</h3>
        </div>
      </header>

      <div className="container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 lg:gap-16">
        {news ? (
          news?.data.map((newItem: any, index: number) => (
            <Link
              href={`/catalogo/${newItem.slug}`}
              className="block"
              key={newItem.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${newItem.cover}`}
                alt=""
                className="w-full object-cover"
              />
              <p className="text-sm py-2">
                {dayjs(newItem.created_at).format("DD/MM/YYYY")}
              </p>
              <p className="text-lg font-bold">{newItem.name}</p>
            </Link>
          ))
        ) : errorNews ? (
          <div>Error al cargar catálogos</div>
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
            Ver mas catálogos
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
