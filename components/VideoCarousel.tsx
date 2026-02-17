"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VideoCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      style={{ width: "100%", height: "80vh" }}
    >
      <SwiperSlide>
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/6R3cOMZow8M"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/teste"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
