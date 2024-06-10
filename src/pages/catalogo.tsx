import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import axios from "../config/axios";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { getTranslation, Locale } from '../config/translation';

const Catalogos = () => {
  const [catalogos, setCatalogos] = useState<any>(null);
  const [errorCatalogos, setErrorCatalogos] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [locale, setLocale] = useState<Locale>('es'); // Estado para almacenar el idioma seleccionado
  const [filter, setFilter] = useState<string>(''); // Estado para almacenar el filtro seleccionado
  const [categories, setCategories] = useState<any[]>([]); // Estado para almacenar las categorías

  const router = useRouter();

  useEffect(() => {
    // Obtener el idioma preferido del localStorage o establecer el idioma predeterminado
    const storedLocale = localStorage.getItem('locale') as Locale;
    if (storedLocale) {
      setLocale(storedLocale);
    } else {
      setLocale('es'); // Idioma predeterminado
    }

    // Obtener parámetros de la URL
    const { page, filter: urlFilter } = router.query;
    if (page) {
      setCurrentPage(parseInt(page as string));
    }
    if (urlFilter) {
      setFilter(urlFilter as string); // Establecer el estado filter desde la URL
    }
  }, [router.query]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`/catalogos-categories?lang=${localStorage.getItem('locale')}`);
        setCategories(response?.data);
      } catch (error) {
        console.error('Error al cargar las categorías:', error);
      }
    };

    fetchCategories();
  }, [locale]);

  useEffect(() => {
    const fetchCatalogos = async () => {
      try {
        const response = await axios.get(
          `/catalogos?page=${currentPage}&lang=${localStorage.getItem('locale')}&filter=${filter}`
        );
        console.log(`/catalogos?page=${currentPage}&lang=${localStorage.getItem('locale')}&filter=${filter}`);
        setCatalogos(response?.data);
      } catch (error) {
        setErrorCatalogos(error);
      }
    };

    fetchCatalogos();
  }, [currentPage, locale, filter]);

  let cantidadDeBotones = Math.ceil(catalogos?.total / catalogos?.per_page);

  const maximoBotonesEnPaginacion = 15; // Establece tu límite máximo
  if (cantidadDeBotones > maximoBotonesEnPaginacion) {
    cantidadDeBotones = maximoBotonesEnPaginacion;
  }

  const botones = Array.from(
    { length: cantidadDeBotones },
    (_, index) => index + 1
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    setCurrentPage(1); // Reiniciar a la primera página al cambiar el filtro
    router.push({
      pathname: router.pathname,
      query: { ...router.query, filter: newFilter, page: 1 },
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };

  return (
    <Layout>
      <Head>
        <title>Catálogo</title>
      </Head>

      <header
        data-aos="fade-up"
        data-aos-delay="100"
        className="mx-4 lg:mx-16 relative bg-[url('/assets/images/banner-noticias.png')] h-[180px] lg:h-[300px] bg-cover bg-center rounded-bl-2xl rounded-br-2xl"
      >
        <div className="container h-full flex items-center">
          <h3 className="text-4xl text-white font-bold">{getTranslation('catalogo', locale)}</h3>
        </div>
      </header>

      <div className="container mt-6">
        <div className="flex mt-6">
          <div className="text-2xl font-bold">{getTranslation('filtros', locale)} </div>
          <select
            className="p-2 ms-3 border rounded px-5"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="">{getTranslation('todos', locale)}</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:gap-16">
        {catalogos ? (
          catalogos?.data.map((catalogoItem: any, index: number) => (
            <Link
              href={`/catalogo/${catalogoItem.slug}`}
              className="block"
              key={catalogoItem.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${catalogoItem.img}`}
                alt=""
                className="w-full object-cover"
              />
              <p className="text-lg font-bold">{catalogoItem.title}</p>
            </Link>
          ))
        ) : errorCatalogos ? (
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
          <span className="block">
            {getTranslation('ver_mas_catalogo', locale)}
          </span>
          <i className="fa-solid fa-angle-right"></i>
        </div>

        {botones?.map((boton) => (
          <button
            onClick={() => handlePageChange(boton)}
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
              handlePageChange(currentPage + 1);
            }
          }}
        >
          {getTranslation('siguiente', locale)}
        </button>
      </div>
    </Layout>
  );
};

export default Catalogos;
