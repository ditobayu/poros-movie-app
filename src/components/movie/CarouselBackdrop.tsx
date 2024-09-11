"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const IMAGE_API_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_API_BASE_URL;
export default function CarouselBackdrop({
  nowPlayingMovies = [],
}: {
  nowPlayingMovies: Movie[];
}) {
  return (
    <div className=" h-screen relative">
      <Swiper
        spaceBetween={0}
        modules={[Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{}}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {nowPlayingMovies.splice(0, 5).map((movie: Movie, index: number) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={
                  window.innerWidth < 640
                    ? `${IMAGE_API_BASE_URL}/original${movie.poster_path}`
                    : `${IMAGE_API_BASE_URL}/original${movie.backdrop_path}`
                }
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                alt={movie.title}
              />
              <div className="absolute bottom-0 text-white z-10 p-4 sm:p-20 flex flex-col gap-2">
                <span className="text-3xl font-semibold">{movie.title}</span>
                <span>Now in cinemas.</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-md"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black rounded-md"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
