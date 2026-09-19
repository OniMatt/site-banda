"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import foto1 from "@/public/foto-1.jpg";
import foto2 from "@/public/foto-2.jpg";
import foto3 from "@/public/foto-3.jpg";

const fotos = [
  { src: foto2, alt: "A banda tocando em uma construção abandonada tomada pelo mato" },
  { src: foto3, alt: "Os quatro integrantes sob os arcos de um prédio em ruínas" },
  { src: foto1, alt: "Os quatro integrantes em uma escadaria de azulejos descascados" },
];

export default function PhotoCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      className="photo-carousel"
    >
      {fotos.map((foto) => (
        <SwiperSlide key={foto.src.src} className="photo-slide">
          <Image
            src={foto.src}
            alt={foto.alt}
            fill
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 80vw"
            className="photo"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
