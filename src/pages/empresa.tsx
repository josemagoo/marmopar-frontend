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
            Descripcion de la empresa
        </main>

      </div>
        
    </Layout>
  );
}
