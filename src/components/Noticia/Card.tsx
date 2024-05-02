import React from "react";
import Link from "next/link";

export default function Card() {
  return (
    <Link
      href="/noticias/alianca-lanzan-servicio-express"
      className="block"
    >
      <img
        src="/assets/images/noticia-1.jpg"
        alt=""
        className="w-full object-cover"
      />
      <p className="text-sm py-2">02/05/2023</p>
      <p className="text-xl font-bold">
        Log-in y aliança lanzan servicio exprés que conectará los
        puertos...
      </p>
    </Link>
  );
}
