import { PAGES_INTERS } from "data/interns";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Layout from "@/components/Layout";
import Head from "next/head";

export default function Intern() {
  const {
    query: { slug },
  } = useRouter();

  const pageIntern = PAGES_INTERS.find((page) => page.slug === slug);

  return (
    <Layout>
      <Head>
        <title>Marmopar - {pageIntern?.title}</title>
      </Head>

      <header
        data-aos="fade-up"
        data-aos-delay="100"
        className="rounded-bl-xl rounded-br-xl mx-4 lg:mx-16 relative bg-[url('/assets/images/banner-page-intern.png')] h-[180px] lg:h-[300px] bg-cover bg-center"
      >
        <div className="container h-full flex items-center">
          <h3 className="text-4xl text-white font-bold ">
            Servicios
          </h3>
        </div>
      </header>

      <div className="relative">
        <div className="absolute top-0 left-0">
          <img src="/assets/images/banner-down.png" alt="" />
        </div>

        <div className="relative z-10 py-20 container principal-content">
          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className=" text-acgroup-primary font-bold text-center text-3xl"
          >
            {pageIntern?.title}
          </h3>

          <div className="grid lg:grid-cols-2 gap-32 lg:gap-36 mt-20">
            <div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-justify"
                dangerouslySetInnerHTML={{
                  __html: pageIntern?.principal_info!,
                }}
              />

              <ul className="list-disc ml-10 mt-16">
                {pageIntern?.secondary_info.map(
                  (item: any, index: number) => (
                    <li
                      data-aos="fade-up"
                      data-aos-delay={100 * index}
                      key={item}
                      className="font-bold text-lg"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="grid gap-8 lg:w-11/12 lg:ml-auto">
              {pageIntern?.images.map((image: any, index: number) => (
                <img
                  key={image}
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                  src={image}
                  alt=""
                  className="w-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
