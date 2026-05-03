"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PhotoCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      style={{ width: "80%", height: "80vh", objectFit: "contain", display: "flex", borderRadius: "8px" }}
    >
      <SwiperSlide>
        <img src="/foto-2.jpg" alt="foto 2" style={{ width: "100%", height: "80%", objectFit: "cover" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/foto-3.jpg" alt="foto 3" style={{ width: "80%", height: "70%", objectFit: "cover" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/foto-1.jpg" alt="foto 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </SwiperSlide>
    </Swiper>
  );
}
