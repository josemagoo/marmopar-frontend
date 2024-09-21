import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import {
  Splide,
  SplideSlide,
  SplideTrack,
  // @ts-ignore
} from "@splidejs/react-splide";
import { PAGES_INTERS } from "data/interns";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import dayjs from "dayjs";
import Head from "next/head";
import { motion } from "framer-motion";
import NextLink from "next/link";


import {} from "framer-motion";
import axios from "../config/axios";

import { useRouter } from "next/router";
import { getTranslation, Locale } from '../config/translation';


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const [bannerss, setBannerss] = useState<any>(null);
  const [errorBannerss, setErrorBannerss] = useState<any>(null);

  const [bannersp2, setBannersp] = useState<any>(null);
  const [errorBannersp, setErrorBannersp] = useState<any>(null);

  const [linkActive, setLinkActive] = useState<number | null>(null);

  const [clients, setClients] = useState<any>(null);
  const [errorClients, setErrorClients] = useState<any>(null);

  const [soluciones, setSoluciones] = useState<any>(null);
  const [errorSoluciones, setErrorSoluciones] = useState<any>(null);

  const [clientes, setClientes] = useState<any>(null);
  const [errorClientes, setErrorClientes] = useState<any>(null);

  const [catalogo, setCatalogo] = useState<any>(null);
  const [errorCatalogo, setErrorCatalogo] = useState<any>(null);

  const [ubicacion, setUbicacion] = useState<any>(null);
  const [errorUbicacion, setErrorUbicacion] = useState<any>(null);

  const [contactanos, setContactanos] = useState<any>(null);
  const [errorContactanos, setErrorContactanos] = useState<any>(null);

  const router = useRouter();
  const { locales, asPath } = router;

  const [currentLocale, setCurrentLocale] = useState<Locale>('es');

  //Obtener el color despues de ponerle la opacidad
  const getRgbaColor = (hexColor: any, opacity: any) => {
    let r = parseInt(hexColor.slice(1, 3), 16);
    let g = parseInt(hexColor.slice(3, 5), 16);
    let b = parseInt(hexColor.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  };



  useEffect(() => {
    // Solo intentar obtener el idioma del localStorage en el cliente
    const savedLocale = localStorage.getItem('locale') as Locale;
    setCurrentLocale(savedLocale || router.locale || 'es');
  }, [router.locale]); // Dependencia solo en router.locale


  useEffect(() => {

    const fetchClients = async () => {
      try {
        const response = await axios.get("/clientes?lang="+localStorage.getItem('locale'));
        setClients(response?.data);
      } catch (error) {
        setErrorClients(error);
      }
    };

    const fetchBannerss = async () => {
      try {
        const response = await axios.get("/banner/secundario?lang="+localStorage.getItem('locale'));
        setBannerss(response?.data);
      } catch (error) {
        setErrorBannerss(error);
      }
    };

    const fetchBannersp = async () => {
      try {
        const response = await axios.get("/banner/principal?lang="+localStorage.getItem('locale'));
        setBannersp(response?.data);
      } catch (error) {
        setErrorBannersp(error);
      }
    };

    const fetchSoluciones = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}section/soluciones?lang=${localStorage.getItem('locale')}`
        );
        setSoluciones(response?.data);
      } catch (error) {
        setErrorSoluciones(error);
      }
    };

    const fetchClientes = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}section/clientes?lang=${localStorage.getItem('locale')}`
        );
        setClientes(response?.data);
      } catch (error) {
        setErrorClientes(error);
      }
    };

    const fetchCatalogo = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}section/catalogo?lang=${localStorage.getItem('locale')}`
        );
        setCatalogo(response?.data);
      } catch (error) {
        setErrorCatalogo(error);
      }
    };

    const fetchUbicacion = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}section/ubicacion?lang=${localStorage.getItem('locale')}`
        );
        setUbicacion(response?.data);
      } catch (error) {
        setErrorUbicacion(error);
      }
    };

    const fetchContactanos = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_API}section/contactanos?lang=${localStorage.getItem('locale')}`
        );
        console.log()
        setContactanos(response?.data);
      } catch (error) {
        setErrorContactanos(error);
      }
    };

    fetchClients();
    fetchBannerss();
    fetchBannersp();
    fetchSoluciones();
    fetchClientes();
    fetchCatalogo();
    fetchUbicacion();
    fetchContactanos();
    
  }, []);


  const onVisibilityChange = (isVisible: any) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  const convertLineBreaks = (text: any) => {
    if (!text) return '';
    return text.replace(/(?:\r\n|\r|\n)/g, '<br />');
  };
 

  return (
    <Layout whatsappLink={contactanos?.link}>
      <Head>
        <title>Marmopar</title>
      </Head>
  

{/* Banner Primario */}
<section id="banner-primario">
{!bannersp2 && !errorBannersp ? (
        <div className="h-[650px] bg-gray-200 animate-pulse w-full"></div>
      ) : (
        <Splide
          hasTrack={false}
          options={{
            autoplay: true,
            interval: 2000,
            type: "loop"
          }}
        >
          <SplideTrack className="h-full">
            {bannersp2?.data.map((banner: any) => (
              <SplideSlide key={banner.id} className="relative">
                <div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${banner.img}`}
                    className="w-full h-[500px] lg:h-[650px] object-cover"
                    alt=""
                  />

                  <div className=" bottom-0 h-6 bg-acgroup-primary w-full" />

                  {banner?.title || banner?.subtitle
                    ? banner.id && (
                        <motion.div
                          initial={{ top: 60 }}
                          animate={{
                            top: 0,
                            transition: { duration: 0.3 },
                          }}
                          className="absolute z-[60] container pb-5 lg:pb-0 items-center h-full grid lg:grid-cols-2 top-0 left-1/2 -translate-x-1/2 w-full"
                        >
                          <div className=" flex justify-center flex-col px-12 py-16 w-full h-full" >
                              <div className="p-7" style={{
                                backgroundColor: getRgbaColor(banner?.color_square, banner?.opacity),
                              }}>
                            <h3
                              className="text-2xl lg:text-4xl font-bold"
                              style={{
                                color: banner.color_title,
                              }}
                            >
                              {banner.title}
                            </h3>
                            <p
                              className="text-xl lg:text-2xl mt-5 mb-5"
                              style={{
                                color: banner.color_subtitle,
                              }}
                            >
                              {banner.subtitle}
                            </p>

                            {banner?.link && (
                              <a
                                href={banner.link}
                                target="_blank"
                                className="mt-5 w-max px-8 py-3 text-white"
                                style={{
                                  backgroundColor:
                                    banner.color_button,
                                }}
                              >
                                {banner?.label_button}
                              </a>
                            )}
                            </div>
                          </div>
                          <div className="h-full w-full"></div>
                        </motion.div>
                      )
                    : null}
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      )}
</section>

  {/* Banners Secundario */}
      <section id="banner-secundario">
      {!bannerss && !errorBannerss ? (
        <div className="h-[650px] bg-gray-200 animate-pulse w-full"></div>
      ) : (
        <Splide
          hasTrack={false}
          options={{
            autoplay: true,
            interval: 2000,
            type: "loop"
          }}
        >
          <SplideTrack className="h-full">
            {bannerss?.data.map((banner: any) => (
              <SplideSlide key={banner.id} className="relative">
                <div>
                  <div
                    
                    className="w-full h-[300px] lg:h-[550px] object-cover"
                    style={{backgroundColor: "black"}}
                  ></div>

                  <div className="absolute bottom-0 h-6 w-full" />

                  {banner?.title || banner?.subtitle
                    ? banner.id && (
                        <motion.div
                          initial={{ top: 60 }}
                          animate={{
                            top: 0,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute z-[100] container pb-5 lg:pb-0 items-center h-full grid lg:grid-cols-1 top-0 left-1/2 -translate-x-1/2 w-full"
                        >
                          <div className="relative flex justify-center flex-col px-12 py-16 w-full h-full">
                            <h3
                              className="text-2xl text-center lg:text-6xl font-bold"
                              style={{
                                color: "white",
                              }}
                            >
                              {banner.title}
                            </h3>
                           

                            
                          </div>
                        </motion.div>
                      )
                    : null}
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      )}
      </section>



      {/* Nuestras soluciones */}
      <VisibilitySensor onChange={onVisibilityChange}>
        {/* @ts-ignore */}
        {({ isVisible }) => (
            

            <section id="nuestras-soluciones" className="py-12 p-2 lg:py-36 grid lg:grid-cols-2 z-10">
              <h2
                className="lg:mx-auto p-4 lg:mt-10 text-4xl lg:text-6xl text-uppercase  font-bold "
              >
                 <div dangerouslySetInnerHTML={{ __html: convertLineBreaks(getTranslation(soluciones?.title, currentLocale)) }}
                 >

                 </div>

                
              </h2>

              <div className="lg:text-right mx-auto grid grid-cols-1">
                      {soluciones?.items?.map((item: any) => (
                          <NextLink
                              key={item.id}
                              href={item.link}
                              className="mt-10 lg:mt-5 text-uppercase text-center w-100 px-6 lg:px-8 py-3 text-xl lg:text-4xl text-white font-bold"
                              style={{ backgroundColor: item.background_color }}
                          >
                              {item.title}
                          </NextLink>
                      ))}
                  </div>
            </section>
          
        )}
      </VisibilitySensor>

      
      {/* Clientes */}
      <section id="clientes" className=" lg:py-24  z-10" style={{background: '#C00000'}}>
        <h1 className="text-4xl mx-auto p-8 lg:p-0 pb-0 text-white text-center font-bold">
          {getTranslation('nuestros_clientes', currentLocale)}
        </h1>

        <Splide
              hasTrack={false}
              options={{
                perPage: 7,
                pagination: false,
                arrows: false,
                drag: "free",
                focus: "center",
                autoplay: true,
                interval: 2000,
                type: "loop",
                breakpoints: {
                  480: {
                    perPage: 3,
                  },
                  768: {
                    perPage: 4,
                  },
                  992: {
                    perPage: 4,
                  },
                  1170: {
                    perPage: 4,
                  },
                },
              }}
            >
              <SplideTrack className="h-full mt-12">
                {!clients && !errorClients ? (
                  <div>loading</div>
                ) : clients ? (
                  clients?.data.map((client: any) => (
                    <SplideSlide key={client.id} className="relative">
                      <div key={client.id} className="mx-auto">
                        <a
                          href={client.link}
                          target="_blank"
                          className="block"
                        >
                          <img
                            src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${client.cover}`}
                            alt=""
                            className="w-[150px] h-[150px] object-contain grayscale-img"
                          />
                        </a>
                      </div>
                    </SplideSlide>
                  ))
                ) : (
                  <div>error</div>
                )}
              </SplideTrack>
        </Splide>

      </section>

      
      {/* Catalogo */}
      <section id="catalogo" className="lg:py-24 bg-white grid lg:grid-cols-2">

        <div className="text-center mx-auto">
                <img className="h-100" src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${catalogo?.img}`} alt="" />
                
        </div>

        <div className="lg:mt-12 p-12">
                <h1 className="text-4xl lg:mt-12 text-[#2C363F] font-bold">
                  {getTranslation(catalogo?.title, currentLocale)}

                <br />
                </h1>
                <p className="mt-2 mb-5 text-[#2C363F]"
                dangerouslySetInnerHTML={{ __html: getTranslation(catalogo?.description, currentLocale) }}>

                </p>
                {catalogo?.link && (
                  <NextLink
                      href={catalogo.link}
                      className="mt-6 text-center w-100 px-8 py-3 text-2xl lg:text-2xl text-white bg-red-700"
                  >
                      {getTranslation(catalogo?.boton_label, currentLocale)}
                  </NextLink>
              )}
                  </div>

      </section>

      {/* Nuestra tienda */}
      <section id="visitanos" className="bg-black py-24 mx-auto text-center">
            <img className="text-center mx-auto" src="/assets/icons/ubicacion.png" alt="" />
            <h1 className="text-4xl lg:text-6xl mt-5 mb-10 text-white font-bold">
              {getTranslation(ubicacion?.title, currentLocale)}
              </h1>
            <a target="_blank" href={ubicacion?.link} className="mt-10 text-center px-8 py-3 text-2xl lg:text-4xl text-white bg-red-700">
                  {getTranslation(ubicacion?.boton_label, currentLocale)}
                </a>
            
      </section>


      {/* Contacto */}
      <section id="contacto" className="lg:py-24 bg-white grid lg:grid-cols-2">

        <div className="text-center mx-auto">
                <img className="h-100" src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${contactanos?.img}`} alt="" />
        </div>

        <div className="lg:mt-12 p-12">
                <h1 className="text-4xl lg:mt-12 text-[#2C363F] font-bold">
                {getTranslation(contactanos?.title, currentLocale)}
                </h1>
                <p className="mt-2 mb-5 text-[#2C363F]" 
                dangerouslySetInnerHTML={{ __html: getTranslation(contactanos?.description, currentLocale) }} />

                <a target="_blank" href={contactanos?.link} className="mt-6 text-center w-100 px-8 py-3 text-2xl lg:text-2xl text-white bg-red-700">
                  {contactanos?.boton_label}
                </a>
        </div>

      </section>

     
     
    </Layout>
  );
}
