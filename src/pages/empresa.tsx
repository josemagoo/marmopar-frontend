import React from "react";
import Layout from "@/components/Layout";

import Head from "next/head";

export default function empresa() {
  return (
    <Layout>
      <Head>
        <title>La empresa</title>
      </Head>

      <header
        className="px-4 lg:px-12 relative z-40"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          src="/assets/images/empresa-header.png"
          alt=""
          className="w-full object-cover h-[200px] lg:h-[250px]"
        />

        <div className="absolute container top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <p className="text-4xl font-bold text-white ">La empresa</p>
        </div>
      </header>

      <div className="relative">
        <div className="absolute top-[-250px] left-0">
          <img
            src="/assets/images/banner-down.png"
            alt=""
            className="w-full object-cover"
          />
        </div>

        <main className="relative z-10 container grid xl:grid-cols-2 gap-20 lg:32 xl:gap-32 2xl:gap-44 py-16 lg:py-32">
          <div>
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl font-bold text-acgroup-primary mb-5"
            >
              Nuestro Grupo
            </h3>

            <p
              className="text-xl mb-5 text-justify"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              AcGroup es un grupo empresarial dedicado a la logística
              en comercio exterior líder en el mercado Paraguayo.
            </p>
            <p
              className="text-xl text-justify"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Cuenta con más de 20 Años de presencia en dicho mercado
              y con un equipo de más 35 profesionales altamente
              capacitados ha logrado posicionarse como una empresa de
              vanguardia y referente en la materia tanto a nivel local
              como regional.
            </p>

            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl mt-12 font-bold text-acgroup-primary mb-5"
            >
              Nuestra Misión
            </h3>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xl mb-5 text-justify"
            >
              Brindar un servicio flexible de alta calidad, confiable
              y eficiente, con el fin de lograr la satisfacción del
              cliente y contribuir con el éxito de su negocio
            </p>

            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl mt-12 font-bold text-acgroup-primary mb-5"
            >
              Nuestros Objetivos
            </h3>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xl mb-5 text-justify"
            >
              Buscar la excelencia y calidad en el servicio,
              asesorando e informando a los clientes de los
              procedimientos y medios de transporte adecuados para el
              traslado de sus mercaderías; y transportando su carga
              desde y hacia cualquier parte del mundo de una manera
              eficaz y eficiente, manteniéndolo constantemente
              informado en los distintos pasos de la cadena logística.
            </p>

            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl mt-12 font-bold text-acgroup-primary mb-5"
            >
              Nuestra Naturaleza
            </h3>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xl mb-5 text-justify"
            >
              Somos innovadores en un mercado cada vez más exigente
              que nos lleva a seguir creando nuevos servicios, como
              ser el asesoramiento y transporte de carga terrestre
              consolidada y full a nivel regional (Brasil, Argentina,
              Chile y Uruguay); siendo actualmente nuestro producto
              estrella las Cargas Consolidadas San Pablo - Asunción,
              con un servicio puerta a puerta y en un tiempo de
              tránsito de 72 horas.
            </p>
          </div>
          <div className="grid gap-y-4">
            <img
              src="/assets/images/empresa-image-1.png"
              alt=""
              className="w-10/12 object-cover"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <img
              src="/assets/images/empresa-image-2.png"
              alt=""
              className="w-10/12 object-cover"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <img
              src="/assets/images/empresa-image-3.png"
              alt=""
              className="w-10/12 object-cover"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
        </main>
      </div>

      <aside className="grid lg:grid-cols-2 container gap-20 lg:gap-32 pb-10 lg:pb-24 xl:gap-48 2xl:gap-72 py-10">
        <div className="grid gap-20">
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            src="/assets/images/empresa-image-4.png"
            alt=""
            className="w-full object-cover"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            src="/assets/images/empresa-image-5.png"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div>
          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl font-bold text-acgroup-primary mb-5"
          >
            Nuestro Desafío
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl mb-5 text-justify"
          >
            Brindar soluciones logísticas a las empresas por medio de
            la tecnología y experiencia aplicada, anticipándonos a la
            evolución del mercado, agregando valor y creando ventajas
            competitivas para que nos confíen sus cargas.
          </p>

          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl mt-12 font-bold text-acgroup-primary mb-5"
          >
            Nuestra Actividad
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl mb-5 text-justify"
          >
            Somos especialistas en transportes alrededor del mundo y
            estamos a disposición en todo momento con el fin de
            cumplir con las exigencias de las necesidades del
            transporte, cualquiera sea su modalidad.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl mb-5 text-justify"
          >
            Ofrecemos servicios de confianza desde y hasta diferentes
            puntos de Asia, Europa, África, y América. Desde el retiro
            y manipuleo en origen, hasta la entrega en cualquier parte
            del mundo, nuestros expertos están entrenados para
            coordinar la carga a través del complejo mundo del
            comercio internacional.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl mb-5 text-justify"
          >
            Nuestra técnica basada en el sistema de localización y
            seguimiento personalizado de cargas, le proporciona al
            cliente el control constante de sus envíos a lo largo de
            toda la cadena logística, cualquiera sea el servicio
            prestado.
          </p>

          <ul className="list-disc ml-16 mt-20">
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mb-4"
            >
              Transporte Internacional Marítimo, Fluvial, Terrestre y
              Aéreo, FCL y LCL.
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mb-4"
            >
              Coordinación y logística para rellenado de contenedores.
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mb-4"
            >
              Manipuleo de cargas peligrosas.
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mb-4"
            >
              Servicios Puerta a Puerta.
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mb-4"
            >
              Almacenaje y distribución.
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mb-4"
            >
              Análisis y desarrollo de cargas proyecto.
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mb-4"
            >
              Transporte Interno en todo el territorio paraguayo.
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mb-4"
            >
              Servicios de consolidaciones y desconsolidaciones.
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mb-4"
            >
              Seguro de Mercaderías.
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mb-4"
            >
              Despachos Aduaneros.
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mb-4"
            >
              Inspección de carga.
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mb-4"
            >
              Rastreo y seguimiento de cargas
            </li>
          </ul>
        </div>
      </aside>

      <div className="container grid xl:grid-cols-3 py-32">
        <div className="xl:col-span-2 bg-[#F5F5F5] p-8 lg:p-20 rounded-2xl">
          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className=" font-bold text-3xl text-acgroup-primary mb-10"
          >
            Servicios
          </h3>

          <div className="grid lg:grid-cols-[repeat(2,max-content)] gap-6">
            <ul>
              <li
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex items-center gap-3 mb-1"
              >
                <img
                  src="/assets/icons/arrow-right-services.svg"
                  alt=""
                />
                <span className="block text-xl text-acgroup-primary">
                  Transporte Marítimo-Fluvial
                </span>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex items-center gap-3 mb-1"
              >
                <img
                  src="/assets/icons/arrow-right-services.svg"
                  alt=""
                />
                <span className="block text-xl text-acgroup-primary">
                  Transporte Terrestre
                </span>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex items-center gap-3 mb-1"
              >
                <img
                  src="/assets/icons/arrow-right-services.svg"
                  alt=""
                />
                <span className="block text-xl text-acgroup-primary">
                  Despacho Aduanero
                </span>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex items-center gap-3 mb-1"
              >
                <img
                  src="/assets/icons/arrow-right-services.svg"
                  alt=""
                />
                <span className="block text-xl text-acgroup-primary">
                  Servicio de Transporte Interno
                </span>
              </li>
            </ul>
            <ul>
              <li
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex items-center gap-3 mb-1"
              >
                <img
                  src="/assets/icons/arrow-right-services.svg"
                  alt=""
                />
                <span className="block text-xl text-acgroup-primary">
                  Transporte Marítimo-Fluvial
                </span>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex items-center gap-3 mb-1"
              >
                <img
                  src="/assets/icons/arrow-right-services.svg"
                  alt=""
                />
                <span className="block text-xl text-acgroup-primary">
                  Transbordos en Puertos Internacionales
                </span>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex items-center gap-3 mb-1"
              >
                <img
                  src="/assets/icons/arrow-right-services.svg"
                  alt=""
                />
                <span className="block text-xl text-acgroup-primary">
                  Seguro de Mercadería
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="py-14 lg:py-20 px-8 lg:px-14 grid items-center content-center bg-acgroup-primary h-full rounded-tr-2xl rounded-br-2xl -ml-2 relative -z-10"
        >
          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-3xl font-bold mb-10 "
          >
            Contactanos
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white mb-4"
          >
            Trabaja con nosotros
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white mb-4"
          >
            ¿Necesita Especialistas?
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white mb-4"
          >
            Solicite presupuesto
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white mb-4"
          >
            Solicitar mi casilla de correos en Miami - Usa
          </p>
        </div>
      </div>
    </Layout>
  );
}
