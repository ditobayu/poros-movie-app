"use client";
import { getNowPlayingMovies, getPopularMovies } from "@/lib/movie";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import CarouselBackdrop from "@/components/movie/CarouselBackdrop";
import MovieCard from "@/components/movie/MovieCard";

export default function Home() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  useEffect(() => {
    getNowPlayingMovies().then((data) => {
      setNowPlayingMovies(data.results);
    });
    getPopularMovies().then((data) => {
      setPopularMovies(data.results);
    });
  }, []);
  return (
    <div className="bg-black text-white">
      <Navbar />
      <CarouselBackdrop nowPlayingMovies={nowPlayingMovies} />
      <div className="px-4 sm:px-20 flex flex-col gap-4">
        <span className="font-semibold text-2xl">Popular Movies</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 ">
          {popularMovies?.map((movie: Movie, index: number) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
