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

import {} from "framer-motion";
import axios from "../config/axios";

const getClients = async () => {
  try {
    const clients = await axios.get("/clientes");
    return clients.data;
  } catch (error) {
    console.log(error);
  }
};

export const getServerSideProps = async () => {
  const clients = await getClients();
  return { props: { clients } };
};

export default function Home({ clients }: any) {
  const [isVisible, setIsVisible] = useState(false);

  const [news, setNews] = useState<any>(null);
  const [errorNews, setErrorNews] = useState<any>(null);

  const [banners, setBanners] = useState<any>(null);
  const [errorBanners, setErrorBanners] = useState<any>(null);

  const [linkActive, setLinkActive] = useState<number | null>(null);

  // const [clients, setClients] = useState<any>(null);
  const [errorClients, setErrorClients] = useState<any>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/noticias");
        setNews(response?.data);
      } catch (error) {
        setErrorNews(error);
      }
    };

    const fetchBanners = async () => {
      try {
        const response = await axios.get("/banner");
        setBanners(response?.data);
      } catch (error) {
        setErrorBanners(error);
      }
    };

    fetchBanners();
    fetchNews();
  }, []);

  const onVisibilityChange = (isVisible: any) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  let newsLimited;

  if (news && news.data) {
    newsLimited = news?.data.slice(0, 3);
  }

  console.log({ banners });

  return (
    <Layout>
      <Head>
        <title>Marmopar</title>
      </Head>
  
  {/* Banners Primario */}

      {!banners && !errorBanners ? (
        <div className="h-[650px] bg-gray-200 animate-pulse w-full"></div>
      ) : (
        <Splide
          hasTrack={false}
          options={{
            autoplay: true,
            interval: 3000,
          }}
        >
          <SplideTrack className="h-full">
            {banners?.data.map((banner: any) => (
              <SplideSlide key={banner.id} className="relative">
                <div>
                  <div
                    
                    className="w-full h-[300px] lg:h-[550px] object-cover"
                    style={{backgroundColor: "black"}}
                  ></div>

                  <div className="absolute bottom-0 h-6 w-full" />

                  {banner?.name || banner?.description
                    ? banner.id && (
                        <motion.div
                          initial={{ top: 60 }}
                          animate={{
                            top: 0,
                            transition: { duration: 0.3 },
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
                              {banner.name}
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

{/* Banner secundario */}
{!banners && !errorBanners ? (
        <div className="h-[650px] bg-gray-200 animate-pulse w-full"></div>
      ) : (
        <Splide
          hasTrack={false}
          options={{
            autoplay: true,
            interval: 3000,
          }}
        >
          <SplideTrack className="h-full">
            {banners?.data.map((banner: any) => (
              <SplideSlide key={banner.id} className="relative">
                <div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL_STORAGE}/${banner.cover}`}
                    className="w-full h-[500px] lg:h-[650px] object-cover"
                    alt=""
                  />

                  <div className=" bottom-0 h-6 bg-acgroup-primary w-full" />

                  {banner?.name || banner?.description
                    ? banner.id && (
                        <motion.div
                          initial={{ top: 60 }}
                          animate={{
                            top: 0,
                            transition: { duration: 0.3 },
                          }}
                          className="absolute z-[60] container pb-5 lg:pb-0 items-center h-full grid lg:grid-cols-2 top-0 left-1/2 -translate-x-1/2 w-full"
                        >
                          <div className=" flex justify-center flex-col px-12 py-16 w-full h-full">
                            <h3
                              className="text-2xl lg:text-4xl font-bold"
                              style={{
                                color: banner.name_color,
                              }}
                            >
                              {banner.name}
                            </h3>
                            <p
                              className="text-xl lg:text-2xl mt-5"
                              style={{
                                color: banner.description_color,
                              }}
                            >
                              {banner.description}
                            </p>

                            {banner?.link && (
                              <a
                                href={banner.link}
                                target="_blank"
                                className="mt-5 w-max px-8 py-3 text-white"
                                style={{
                                  backgroundColor:
                                    banner.background_color,
                                }}
                              >
                                {banner?.label_button}
                              </a>
                            )}
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

      {/* Nuestras soluciones */}
      <VisibilitySensor onChange={onVisibilityChange}>
        {/* @ts-ignore */}
        {({ isVisible }) => (
            

            <section className="py-24 lg:py-36 container grid lg:grid-cols-2 z-10">
              <h2
                className="mx-auto lg:mt-10 text-6xl font-bold "
              >
                CONOZCA <br/>
                NUESTRAS <br/>
                SOLUCIONES <br/>
              </h2>

              <div className="text-right grid grid-cols-1">
                <a href="" className="mt-10 lg:mt-5 text-center w-100 px-8 py-3 text-2xl lg:text-4xl text-white"
                 style={{
                  backgroundColor: '#000000',
                }}>MARMOLES Y GRANITO</a>



                <a href="" className="mt-5 text-center w-100 px-8 py-3 text-2xl lg:text-4xl text-white"
                 style={{
                  backgroundColor: '#C00000',
                }}>CUARZO Y SINTÉTICO</a>



                <a href="" className="mt-5 text-center w-100 px-8 py-3 text-2xl lg:text-4xl text-white"
                 style={{
                  backgroundColor: '#000000',
                }}>INSUMOS Y MATERIAS PRIMAS</a>
              </div>
            </section>
          
        )}
      </VisibilitySensor>

      
      {/* Clientes */}
      <div className="py-24 lg:py-24  z-10" style={{background: '#C00000'}}>
        <h1 className="text-4xl text-white text-center">
          NUESTROS CLIENTES
        </h1>

        <Splide
              hasTrack={false}
              options={{
                perPage: 9,
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
                    perPage: 5,
                  },
                  1170: {
                    perPage: 7,
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
                            className="w-[100px] h-[100px] object-contain"
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

      </div>

      
      {/* Catalogo */}
      <div className="lg:py-24 bg-white grid lg:grid-cols-2">

        <div className="text-center mx-auto">
                <img className="h-100" src="https://picsum.photos/500" alt="" />
        </div>

        <div className="lg:mt-12 p-12">
                <h1 className="text-4xl lg:mt-12 text-[#2C363F]">Acceso a nuestro 
                <br />
                catálogo</h1>
                <p className="mt-2 mb-5 text-[#2C363F]">Presione este botón que le direccionará a nuestro catálogo</p>
                <a href="#" className="mt-6 text-center w-100 px-8 py-3 text-2xl lg:text-2xl text-white bg-red-700">
                  VER MÁS
                </a>
        </div>

      </div>

      {/* Banners Primario */}
      <div className="bg-black py-24 mx-auto text-center">
            <img className="text-center mx-auto" src="/assets/icons/ubicacion.png" alt="" />
            <h1 className="text-6xl mt-5 mb-10 text-white">¿Queres encontrarnos?</h1>
            <a href="#" className="mt-10 text-center px-8 py-3 text-2xl lg:text-4xl text-white bg-red-700">
                  Visitá nuestra tienda
                </a>
            
      </div>


      {/* Contacto */}
      <div className="lg:py-24 bg-white grid lg:grid-cols-2">

        <div className="text-center mx-auto">
                <img className="h-100" src="https://picsum.photos/500" alt="" />
        </div>

        <div className="lg:mt-12 p-12">
                <h1 className="text-4xl lg:mt-12 text-[#2C363F]">Contáctanos</h1>
                <p className="mt-2 mb-5 text-[#2C363F]">Nuestro principal canal de comunicación es WhatsApp.
                <br />
                 Estás a solo un click de nosotros.
Su consulta no es molestia.</p>
                <a href="#" className="mt-6 text-center w-100 px-8 py-3 text-2xl lg:text-2xl text-white bg-red-700">
                  WhatsApp
                </a>
        </div>

      </div>

     
     
    </Layout>
  );
}
