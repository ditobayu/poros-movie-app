import axios from "axios";
import axiosInstance from "./axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;

export const getNowPlayingMovies = async (page = 1) => {
  const response = await axiosInstance.get(
    `${baseUrl}/movie/now_playing?page=${page}`
  );

  return response.data;
};

export const getPopularMovies = async (page = 1) => {
  const response = await axiosInstance.get(
    `${baseUrl}/movie/popular?page=${page}`
  );
  return response.data;
};
export const getDetailMovie = async (id: number) => {
  const response = await axiosInstance.get(`${baseUrl}/movie/${id}`);

  return response.data;
};
